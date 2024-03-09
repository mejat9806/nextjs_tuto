import { handleGithubLogin, login } from "@/lib/serverAction/action";

async function LogIN() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 text-black bg-teal-900/35 w-[300px] p-10 h-[60%]">
      <div className="">
        <form action={login} className="formStyle">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <button>login</button>
        </form>
      </div>

      <div className="flex w-full flex-col">
        <h1 className="text-white">Other log In option</h1>
        <div className="flex gap-4">
          <form action={handleGithubLogin}>
            <button className="bg-teal-500 text-white capitalize p-2">
              github
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIN;
