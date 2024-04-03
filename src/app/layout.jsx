import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "DuceWeb Website",
  description: "Duceweb create productive websites and mobile apps to meet business and user goals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
