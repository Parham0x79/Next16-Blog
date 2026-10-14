import Link from "next/link";

export function Navbar() {
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h1 className="text-4xl font-bold italic">
          <Link href={"/"}>
            Next<span className="text-blue-500">Pro</span>
          </Link>
        </h1>

        <div className="flex items-center gap-2">
          <Link href={"/"}>Home</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/create"}>Create</Link>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link href={"/auth/sign-up"}>Sign Up</Link>
        <Link href={"/auth/log-in"}>Login</Link>
      </div>
    </nav>
  );
}
