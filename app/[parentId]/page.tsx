import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <>
      <Link href="/parent/new">/parent/new</Link>
      <br />
      <Link href="/parent/1">/parent/1</Link>
    </>
  );
}