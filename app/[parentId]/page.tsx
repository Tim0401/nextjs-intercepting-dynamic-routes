import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function page({ params }) {
  return (
    <>
      <Link href={`/${params.parentId}/new`}>/{params.parentId}/new</Link>
      <br />
      <Link href={`/${params.parentId}/1`}>/{params.parentId}/1</Link>
    </>
  );
}
