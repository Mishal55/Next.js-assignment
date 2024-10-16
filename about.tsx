import Link from "next/link";

export default function About (){
    return(
      <div>
        <h1 className="stext-center bg-purple-900">This is my about us page</h1>
        <p>This is our about section you can explore many more things about us</p>

        <Link className="mr-5 hover:text-red-900 underline" href={"http://localhost:3000"}>Back to Home</Link>

      </div>
    );
  }