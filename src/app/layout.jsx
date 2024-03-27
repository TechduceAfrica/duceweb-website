import { Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "DuceWeb Website",
  description: "Duceweb create productive websites and mobile apps to meet business and user goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
