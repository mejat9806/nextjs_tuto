"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function NavigationTestPage() {
  //! cleant side navigation
  const router = useRouter();
  const pathName = usePathname(); //use to get the pathname
  const searchParams = useSearchParams();
  console.log(pathName);
  const q = searchParams.get("q");
  console.log(q);

  const handleRedirect = () => {
    console.log("click");
    // router.push("/"); //Navigate to the provided href. Pushes a new history entry.
    // router.replace("/"); //replace will not add new entries to history stack
    router.forward();
  };
  return (
    <div className="flex flex-col">
      <h1>{searchParams}</h1>
      <Link href="/" prefetch={false}>
        click here
      </Link>
      <button onClick={handleRedirect}>redirect</button>
    </div>
  );
}

export default NavigationTestPage;
