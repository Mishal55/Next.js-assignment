import Link from "next/link";

export default function service(){
    return(
      <div>
        <h1>This is our Service page</h1>
        <p>In this Page we tell you about our services </p>
        <Link className="mr-5 hover:text-red-900 underline" href={"http://localhost:3000"}>Back to Home</Link>

      </div>
    );
  }