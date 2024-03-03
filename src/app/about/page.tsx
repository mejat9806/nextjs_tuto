import Image from "next/image";

function AboutPage() {
  return (
    <div className="grid grid-cols-2">
      <div className="gap-y-10 flex flex-col w-[80%]">
        <h2 className="text-teal-400 font-extrabold text-xl">About Agency</h2>
        <div className="w-[80%]">
          <h1 className="font-extrabold text-5xl ">
            We create digital ideas that bigger, bolder, braver and better
          </h1>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, rem
          eos? Et temporibus numquam dolores porro labore praesentium aliquam,
          eius laborum possimus, eos consectetur, facilis quisquam sint iure
          repellendus eum.
        </p>
        <div className=" flex gap-10 h-11">
          <div>
            <h1 className="aboutSmallThing">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div>
            <h1 className="aboutSmallThing">222 K+</h1>
            <p>People reached</p>
          </div>
          <div>
            <h1 className="aboutSmallThing">5 K+</h1>
            <p>Service and plugins</p>
          </div>
        </div>
      </div>
      {/*  <div className="w-[500px] h-[500px] relative ">
        <Image
          src="https://images.pexels.com/photos/6796574/pexels-photo-6796574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about image"
          fill
          className="rounded-full"
        />
      </div> */}
      <div className="w-[500px] h-[500px] relative">
        <Image src="/about.png" alt="about image" fill />
      </div>
    </div>
  );
}

export default AboutPage;
