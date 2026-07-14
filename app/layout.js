import "./globals.css";
import "./covers.css";
import { contact } from "../content/contact";
import { siteContent } from "../content/site";

export const metadata = {
  ...siteContent.metadata,
  ...(contact.siteUrl ? {
    metadataBase: new URL(contact.siteUrl),
    alternates: { canonical: "/" }
  } : {})
};

export default function RootLayout({ children }) {
  return <html lang="it"><body>{children}</body></html>;
}
