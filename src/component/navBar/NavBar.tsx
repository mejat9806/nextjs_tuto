"use client";
import Link from "next/link";
import LinkToPage from "./links/LinkToPage";
import localFont from "next/font/local";
import { useState } from "react";
const myFont = localFont({
  src: [{ path: "../../../public/font/Anton-Regular.ttf" }],
  variable: "--font-Anton",
});

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  //temp this is for login fuction
  const session = true;
  const isAdmin = true;
  return (
    <div className="flex justify-between mt-10  ">
      <Link
        href={"/"}
        className={`${myFont.className} sm:text-6xl text-3xl tracking-widest `}
      >
        <h1 className="underline decoration-red-300">
          L<span className="text-teal-200">o</span>g
          <span className="text-teal-200">o</span>
        </h1>
      </Link>
      <div className="sm:w-full md:w-1/2 justify-evenly gap-3 hidden sm:flex">
        {links.map((link) => (
          <LinkToPage key={link.label} links={link}></LinkToPage>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <LinkToPage links={{ href: "/admin", label: "Admin" }} />
            )}
            <button className="h-10 bg-red-300 text-black rounded-sm p-2 font-extrabold uppercase">
              LogOut
            </button>
          </>
        ) : (
          <LinkToPage links={{ href: "/login", label: "Login" }} />
        )}
      </div>
      <button
        onClick={() => setOpen((open) => !open)}
        className="sm:hidden z-50"
      >
        Menu
      </button>
      {open && (
        <div
          className={`flex flex-col absolute right-0 items-center  animate-silde h-[100vh] 
            justify-center gap-10 top-0 bg-teal-300/80 sm:hidden z-10  w-[80vw]`}
        >
          {links.map((link) => (
            <LinkToPage key={link.label} links={link}></LinkToPage>
          ))}
          {session ? (
            <>
              {isAdmin && (
                <LinkToPage links={{ href: "/admin", label: "Admin" }} />
              )}
              <button className="h-10 bg-red-300 text-black rounded-sm p-2 font-extrabold uppercase ">
                LogOut
              </button>
            </>
          ) : (
            <LinkToPage links={{ href: "/login", label: "Login" }} />
          )}
        </div>
      )}
    </div>
  );
}

export default NavBar;
