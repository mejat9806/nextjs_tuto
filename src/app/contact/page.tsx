//import HydrationComponent from "@/component/HydrationComponent";
import FormInput from "@/component/formInput/FormInput";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
/* const HydrationTestNoSSR = dynamic(
  () => import("@/component/HydrationComponent"),
  {
    ssr: false,
  },
); */
// console.log("it work here");
export const metadata: Metadata = {
  title: "Contact page",
  description: "my First next js App",
};

function ContactPge() {
  /*   const [isClient, setisClient] = useState(false); //false because it will be ssr initially
  useEffect(() => {
    //useEffect will change the state of the client ,whent it is true that it will run the "a" code because useEffect is only client side code
    setisClient(true);
  }, []);*/

  /*  const a = Math.random();
  console.log(a); */
  console.log("lets check where it work ");
  return (
    <div className="flex lg:flex-row flex-col gap-5 lg:flex-none flex-1 items-center">
      <div className="imageContainer">
        <Image src="/contact.png" alt="contact image" fill />
      </div>
      <div className="w-full  flex ">
        <div className="flex flex-col flex-1 gap-y-5">
          {/*           {isClient && a}
           */}{" "}
          {/* a will oly render when isClient false  */}
          {/*           <HydrationTestNoSSR />
           */}
          {/*           <div suppressHydrationWarning>{a}</div>{" "}
           */}{" "}
          <form className="flex flex-col gap-y-10">
            <FormInput label="name" htmlfor="name" type="text" />
            <FormInput label="email" htmlfor="email" type="text" />
            <FormInput label="phone" htmlfor="phone" type="text" />
            <textarea
              id="meesage"
              name="message"
              cols={30}
              rows={10}
              placeholder="message"
              className="inputStyle"
            />
          </form>
          <div>
            <button
              className="Button !bg-teal-300"
              /* onClick={() => {
                console.log("SSR fail");
              }} */
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPge;
