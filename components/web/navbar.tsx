import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "cn";

export function Navbar() {
  return (
    <nav className="w-full py-5 flex items-center justify-between p-4 lg:p-8">
      <div className="flex items-center gap-8">
        <h1 className="text-4xl xl:text-6xl font-bold italic">
          <Link href={"/"}>
            Next<span className="text-blue-500">Pro</span>
          </Link>
        </h1>

        <div className="flex items-center gap-2">
          <Link
            href={"/"}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "link",
            )}
          >
            Home
          </Link>

          <Link
            href={"/blog"}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "link",
            )}
          >
            Blog
          </Link>

          <Link
            href={"/create"}
            className={cn(
              buttonVariants({ variant: "ghost", size: "lg" }),
              "link",
            )}
          >
            Create
          </Link>
        </div>

        <ThemeToggle />
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={"/auth/sign-up"}
          className={cn(buttonVariants({ size: "lg" }), "link")}
        >
          Sign Up
        </Link>
        <Link
          href={"/auth/log-in"}
          className={cn(
            buttonVariants({ variant: "secondary", size: "lg" }),
            "link",
          )}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
