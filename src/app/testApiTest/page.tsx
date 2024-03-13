// import { revalidatePath } from "next/cache";

// async function getDataAll(): Promise<any[]> {
//   const res = await fetch(
//     "http://127.0.0.1:3000/api/testApi",

//     { next: { revalidate: 4000 } },
//   );
//   const data = res.json();
//   return data;
// }
// type POSTTYPE = {
//   name: string;
//   age: number;
// };
// async function testPost(formData: any): Promise<POSTTYPE | null> {
//   "use server";
//   const data = Object.fromEntries(formData);
//   console.log(data);

//   const res = await fetch("http://127.0.0.1:3000/api/testApi", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json" },
//   });
//   if (res.ok) {
//     console.log("Yeai!");
//   } else {
//     console.log("Oops! Something is wrong.");
//   }
//   revalidatePath("/testApiTest"); //this will revalidate the data so it show up in our path

//   return await res.json(); // Return the response data
// }
// async function TestApiTest() {
//   const data = await getDataAll();
//   console.log(data);
//   return (
//     <div className=" flex flex-col justify-center items-center w-full p-8 ">
//       <h1 className=" w-full text-center m-4 font-semibold text-lg ">
//         GET & POST Request in NextJS Stable App Router
//       </h1>
//       <form
//         className=" flex w-full flex-col justify-center items-center "
//         action={testPost}
//       >
//         <div className=" flex w-1/2 justify-center items-center gap-4 text-black">
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter the name"
//             className=" border p-2 px-4 rounded outline-none "
//           />
//           <input
//             type="number"
//             name="age"
//             placeholder="Enter the age"
//             className=" border p-2 px-4 rounded outline-none "
//           />
//           <button
//             type="submit"
//             className=" border-blue-500 bg-blue-500 text-white p-2 px-4 rounded-md "
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//       <div>
//         {data.map((data) => (
//           <div key={data.name} className="flex gap">
//             <h1>{data.name}</h1>
//             <h1>{data.age}</h1>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TestApiTest;
