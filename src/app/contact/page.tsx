import FormInput from "@/component/formInput/FormInput";
import Image from "next/image";

function page() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex md:flex-row flex-col gap-10 items-center">
        <div className="imageContainer">
          <Image src="/contact.png" alt="contact image" fill />
        </div>
        <div className="w-full p-10 flex ">
          <div className="flex flex-col flex-1 gap-y-5">
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
              <button className="Button !bg-teal-300">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
