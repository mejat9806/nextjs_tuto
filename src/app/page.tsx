import Image from "next/image";

function page() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 items-center ">
        <div className="flex justify-center flex-1">
          <div className="sm:w-[70%] w-full">
            <h1 className="lg:text-8xl font-extrabold mb-8 text-5xl md:text-6xl">
              Create Though Agency
            </h1>
            <p className="homeP">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              libero voluptate eum aut, animi molestias dicta officia quasi
              culpa id aspernatur quos, ipsam saepe expedita amet aperiam magni
              cumque natus.
            </p>
            <div className="mt-10 flex gap-5 ">
              <button className="HomeButton bg-teal-200">Learn more </button>
              <button className="HomeButton bg-white">Contact</button>
            </div>
            <div>
              <div className="relative sm:w-[350px] sm:h-[50px]  w-[300px] h-[50px] filter grayscale">
                <Image src="/brands.png" fill alt="brand logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative lg:w-[800px] lg:h-[600px] md:w-[600px] md:h-[400px] h-[300px] w-[300px]">
            <Image src="/hero_1.gif" fill alt="gif " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
