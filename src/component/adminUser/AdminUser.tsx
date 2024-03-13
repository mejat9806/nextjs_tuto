import { getAllUser } from "@/lib/data";
import { DeleteUser } from "@/lib/serverAction/action";
import Image from "next/image";

async function AdminUser() {
  const users = await getAllUser();
  console.log(users);
  return (
    <div className="mt-10">
      <h1 className="text-6xl">User</h1>
      <div>
        {users.map((data) => (
          <div key={data.id} className=" ">
            <div className="flex w-[500px]">
              <div className="AdminImg flex gap-4 mt-5 flex-1">
                <Image
                  src={data.img || "/noavatar.png"}
                  alt={data.img}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <h1>{data.username}</h1>
                  <h2>
                    {data.createdAt
                      ? new Date(data.createdAt).toLocaleString()
                      : "no Date data"}
                  </h2>
                </div>
              </div>
              <form
                action={DeleteUser}
                className="flex items-center justify-center"
              >
                <input type="hidden" name="id" value={data.id} />
                <button>Delete</button>
              </form>
            </div>
            {/*  <form action={() => DeletePostWithID(id)}> this form is problematic we can create a new component just for this form and pass the id as a prop
          <input type="hidden" name="userId" value={data.userId} />
        </form> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminUser;
