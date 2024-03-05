import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/navBar/NavBar";
import Footer from "@/component/footer/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
}); //this is for font //this is subset is like what language we want

export const metadata: Metadata = {
  title: "Next JS test",
  description: "my First next js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}   flex flex-col justify-between sm:mx-10`}
      >
        <NavBar />
        <div className="flex-1 justify-center my-10 flex">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
