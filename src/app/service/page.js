import Link from 'next/link'
export default function Home() {
  return (
    <>
    <center><h1>บริการของเรา</h1></center>
  <br />
<center>
 <Link href="/">หน้าแรก</Link> |
 <Link href="/about">เกี่ยวกับเรา</Link> |
 <Link href="/service">บริการของเรา</Link> |
 <Link href="/contact">ติดต่อเรา</Link>
 
</center>
</>
  );
}