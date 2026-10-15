import Link from "next/link";
import { buttonVariants } from "../ui/button";

export function Navbar() {
  return (
    <nav className="w-full py-5 flex items-center justify-between p-4 lg:p-8">
      <div className="flex items-center gap-8">
        <h1 className="text-4xl font-bold italic">
          <Link href={"/"}>
            Next<span className="text-blue-500">Pro</span>
          </Link>
        </h1>

        <div className="flex items-center gap-2">
          <Link
            href={"/"}
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            Home
          </Link>

          <Link
            href={"/blog"}
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            Blog
          </Link>

          <Link
            href={"/create"}
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            Create
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link href={"/auth/sign-up"} className={buttonVariants({ size: "lg" })}>
          Sign Up
        </Link>
        <Link
          href={"/auth/log-in"}
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
