import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Helllo world</h1>
      <Link href="/post">POSTING PAGE</Link>
      <br />
      <Link href="/albums">POSTING ALBUMS</Link>
    </>
  );
}
