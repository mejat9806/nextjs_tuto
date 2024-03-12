import LoginForm from "@/component/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/serverAction/action";

async function LogIN() {
  return (
    <div className="flex justify-center items-center flex-col gap-5 text-black bg-teal-900/35 w-[300px] p-10 h-[90%]">
      <form action={handleGithubLogin}>
        <button className="bg-teal-500 text-white capitalize p-2">
          github
        </button>
      </form>
      <LoginForm />
      <div className="flex w-full flex-col">
        <div className="flex gap-4"></div>
      </div>
    </div>
  );
}

export default LogIN;
