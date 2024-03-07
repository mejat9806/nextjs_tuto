import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/navBar/NavBar";
import Footer from "@/component/footer/Footer";
import TestClientSideProviderTest from "@/component/testClientSideProviderTest";
import { SpeedInsights } from "@vercel/speed-insights/next";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
}); //this is for font //this is subset is like what language we want

export const metadata: Metadata = {
  title: { default: "Next js 14 Homepage", template: "%s | Next js 14" }, //this is for SEO purposes the $s will be replaced with page link when we go into it
  description: "my First next js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <TestClientSideProviderTest> //this for useContext and redux react query*/}

      <body className={`${roboto.className}   flex flex-col  sm:mx-10 h-svh`}>
        <NavBar />
        <div className="flex-1 justify-center my-10 flex">{children}</div>
        <Footer />
      </body>
      {/* </TestClientSideProviderTest> */}
      <SpeedInsights />
    </html>
  );
}
