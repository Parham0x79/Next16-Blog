import Link from "next/link";

export default function Home() {
  return (
    <> 
      <h1 className="text-4xl text-red-500">Hello There!</h1>
      <Link href={"/blog"} className="underline text-xl">
        Go to Blog
      </Link>
    </>
  );
}
