import { cp, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { extname, join, relative, sep } from "node:path";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/server", { recursive: true });
await mkdir("dist/client", { recursive: true });
await mkdir("dist/.openai", { recursive: true });
await cp("out", "dist/client", { recursive: true });
await cp(".openai/hosting.json", "dist/.openai/hosting.json");

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

async function filesIn(directory) {
  const files = [];
  for (const name of await readdir(directory)) {
    const path = join(directory, name);
    if ((await stat(path)).isDirectory()) files.push(...await filesIn(path));
    else files.push(path);
  }
  return files;
}

const assets = {};
for (const path of await filesIn("out")) {
  let route = "/" + relative("out", path).split(sep).join("/");
  if (route === "/index.html") route = "/";
  assets[route] = {
    body: (await readFile(path)).toString("base64"),
    type: types[extname(path).toLowerCase()] ?? "application/octet-stream"
  };
}

const source = `const assets = ${JSON.stringify(assets)};
const decode = value => Uint8Array.from(atob(value), character => character.charCodeAt(0));
const respond = request => {
  const url = new URL(request.url);
  let path = decodeURIComponent(url.pathname);
  if (path.length > 1 && path.endsWith("/")) path += "index.html";
  const asset = assets[path] ?? assets[path + ".html"] ?? assets["/404.html"];
  return new Response(decode(asset.body), {
    status: assets[path] || assets[path + ".html"] ? 200 : 404,
    headers: {
      "content-type": asset.type,
      "cache-control": asset.type.startsWith("text/html") ? "no-cache" : "public, max-age=31536000, immutable"
    }
  });
};
export { respond as fetch };
export default { fetch: respond };
`;

await writeFile("dist/server/index.js", source);
