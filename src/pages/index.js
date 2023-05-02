import Image from "next/image";
import { Inter } from "next/font/google";
import beef from "./components/beef-stock-photo.jpg";
import redBackground from "./components/chinese-red-background.jpg";
import whiteBackground from "./components/chinese-background.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-400 text-black">
      <div className="absolute ">
        <Image src={redBackground} alt="background image" className="w-screen h-fit object-fill"/>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 shadow">
        <h1 className="text-2xl font-bold">
          Next JS 13 Background Image with Tailwind CSS{" "}
        </h1>
        <p className="mt-4 text-sm">
          lorem ipsom Next JS 13 Background Image with Tailwind CSS
        </p>
      </div>

      {/* <div className='w-full'>
        <Image src={beef} alt="beef" width={500} height={100} />
      </div> */}
    </main>
  );
}
