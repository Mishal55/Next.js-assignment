import Link from "next/link";


export default function Home(){
  return(
    <div>
      <h1 className="bg-blue-800 text-center pt-4 font-bold w-full h-[60px]">Hello World!</h1>

      <Link className="mr-5 hover:text-red-900 underline" href={"http://localhost:3000/about"}>About us</Link>
      <Link className="mr-5 hover:text-red-900 underline" href={"http://localhost:3000/contact"}>Contact</Link>
      <Link className="mr-5 hover:text-red-900 underline" href={"http://localhost:3000/service"}>Service</Link>



    </div>
  );
}