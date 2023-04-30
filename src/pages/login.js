import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      Login page!
      <div className="bg-gray-500 shadow-lg ">
        <form className="p-5 flex flex-col justify-center ">
          <h1>Login</h1>
          <label className="p-2">
            Username:
            <input className="text-black p-1 m-2 rounded" type="text" name="username" />
          </label>
          <label className="p-2 flex-col">
            Password:
            <input className="text-black p-1 m-2 rounded" type="password" name="password" />
          </label>
          <input className=" bg-gray-300 w-1/4 rounded hover:font-bold" type="submit" value="Submit" />
        </form>
      </div>
    </main>
  );
}
