import Image from "next/image";

function page() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-flow-col items-center w-full md:w-[80%] h-svh items-center justify-center">
      <div className="flex justify-center flex-col flex-1">
        <h1 className="lg:text-8xl font-extrabold mb-8 text-5xl md:text-6xl">
          Create Though Agency
        </h1>
        <div className="sm:w-[70%] w-full">
          <p className="homeP">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            libero voluptate eum aut, animi molestias dicta officia quasi culpa
            id aspernatur quos, ipsam saepe expedita amet aperiam magni cumque
            natus.
          </p>
          <div className="mt-10 flex gap-5 ">
            <button className="Button !bg-teal-200 ">Learn more </button>
            <button className="Button !bg-white ">Contact</button>
          </div>
          <div>
            <div className="relative sm:w-[350px] sm:h-[50px]  w-[300px] h-[50px] filter grayscale">
              <Image src="/brands.png" fill alt="brand logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="relative lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[400px] h-[300px] w-[300px] hidden sm:flex">
          <Image src="/hero_1.gif" fill alt="gif " />
        </div>
      </div>
    </div>
  );
}

export default page;
