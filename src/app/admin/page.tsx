import AdminPost from "@/component/adminPost/AdminPost";
import AdminFormPost from "@/component/adminPostForm/AdminFormPost";
import AdminUser from "@/component/adminUser/AdminUser";
import AdminUserForm from "@/component/adminUserForm/AdminUserForm";
import { auth } from "@/lib/auth";
import { Suspense } from "react";

async function Admin() {
  const session = await auth();

  return (
    <div className="flex w-[100%] justify-center p-5 ">
      <div className="grid grid-cols-2 h-[calc(100h-100px)] flex-[1/2] gap-10">
        <div className="grid grid-cols-1 ">
          <div>
            <Suspense fallback={<div>...loading</div>}>
              <AdminPost />
            </Suspense>
          </div>
          <div>
            {" "}
            <Suspense fallback={<div>...loading</div>}>
              {" "}
              <AdminUser />
            </Suspense>
          </div>
        </div>
        <div className="grid grid-cols-1 ">
          <div>
            <Suspense fallback={<div>...loading</div>}>
              <AdminFormPost userId={session} />
            </Suspense>
          </div>
          <div>
            {" "}
            <Suspense fallback={<div>...loading</div>}>
              {" "}
              <AdminUserForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
