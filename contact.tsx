import Link from "next/link";

export default function Contact(){
    return(
      <div >
        
        <h1>This is my Contact us page</h1>

        <div className="text-center bg-purple-800">

        <p>In this Page we tell you about to contact the website owner</p>
        <Link className="mr-5 hover:text-red-900 underline" href={"http://localhost:3000"}>Back to Home</Link>

      </div>
      </div>
    );
  }