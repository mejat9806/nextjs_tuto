"use client";
import Link from "next/link";
import LinkToPage from "./links/LinkToPage";
import localFont from "next/font/local";
import { useState } from "react";
import Image from "next/image";
import { handleGithubLogOut } from "@/lib/serverAction/action";
import { auth } from "@/lib/auth";
const Anton = localFont({
  src: [{ path: "../../../public/font/Anton-Regular.ttf" }],
  variable: "--font-Anton",
});
type sessionObjectType = {
  session: {
    user: { name: string; email: string; image: string };
    expires: string;
  };
};
function NavBar({ session }: sessionObjectType) {
  console.log(session);
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ];
  //temp this is for login fuction
  const isAdmin = true;
  return (
    <div className="flex justify-between mt-10  ">
      <Link
        href={"/"}
        className={`${Anton.className} sm:text-6xl text-3xl tracking-widest `}
      >
        <h1 className="underline decoration-red-300">
          L<span className="text-teal-200">o</span>g
          <span className="text-teal-200">o</span>
        </h1>
      </Link>
      <div className=" md:w-1/4 justify-evenly gap-3 hidden md:flex ">
        {links.map((link) => (
          <LinkToPage key={link.label} links={link}></LinkToPage>
        ))}
        {session?.user ? (
          <>
            {session?.user && (
              <LinkToPage links={{ href: "/admin", label: "Admin" }} />
            )}
            <form action={handleGithubLogOut}>
              <button className="h-10 bg-red-300 text-black rounded-sm p-2 font-extrabold uppercase">
                LogOut
              </button>
            </form>
          </>
        ) : (
          <LinkToPage links={{ href: "/login", label: "Login" }} />
        )}
      </div>
      <button className="md:hidden z-50">
        <Image
          src={"/menu.png"}
          width={30}
          height={30}
          alt="menu"
          onClick={() => setOpen((open) => !open)}
        />
      </button>
      {open && (
        <div
          className={`flex flex-col absolute right-0 items-center  animate-silde h-[100vh] 
            justify-center gap-10 top-0 bg-darkteal/95 md:hidden z-10  w-[80vw]`}
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
