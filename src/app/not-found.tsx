import Link from "next/link";
import { FaFaceSadTear } from "react-icons/fa6";

function NotFound() {
  return (
    <div>
      <h2 className="flex items-center gap-5 text-3xl capitalize font-extrabold">
        page not found{" "}
        <span>
          <FaFaceSadTear />
        </span>
      </h2>
      <Link href={"/"}>return Home</Link>
    </div>
  );
}

export default NotFound;
