import { register } from "@/lib/serverAction/action";

function Register() {
  return (
    <div className="text-black bg-teal-900/35 w-[500px] p-10 h-[80%] ">
      <form action={register} className="formStyle">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
        />
        <input type="email" name="email" id="email" placeholder="email" />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
        <input
          type="text"
          name="passwordRepeat"
          id="passwordRepeat"
          placeholder="password"
        />
        <button
          type="submit"
          className="bg-teal-300 py-4 px-2 uppercase font-extrabold"
        >
          create
        </button>
      </form>
    </div>
  );
}

export default Register;
