import "./globals.css";
import "./covers.css";

export const metadata = {
  title: "Franco Aureli | Scrittore",
  description: "Il sito ufficiale di Franco Aureli, autore di romanzi rosa."
};

export default function RootLayout({ children }) {
  return <html lang="it"><body>{children}</body></html>;
}
