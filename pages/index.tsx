import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Howdy, World.</h1>
      <p>Here's something you can learn about:</p>
      <Link href="/about">About</Link>
    </div>
  );
}
