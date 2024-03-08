import { handleGithubLogin } from "@/lib/serverAction/action";

async function LogIN() {
  return (
    <div className="flex justify-center items-center">
      <form action={handleGithubLogin}>
        <button className="bg-teal-900"> Login with github</button>
      </form>
    </div>
  );
}

export default LogIN;
