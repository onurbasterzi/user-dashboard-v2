import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


const NotFound = () => {

    const router=useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            router.push('/')
        },5000)
    },[])

  return (
    <div className="not-found">
      <h1>404 Error</h1>
      <h2>That page is not found</h2>
      <p>You will be redirected to the homepage in 5 seconds</p>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
