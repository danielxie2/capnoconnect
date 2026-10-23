import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-gray-200 bg-white px-8 py-6">
      <Link href="/" className="text-xl font-bold">
        Capnoconnect
      </Link>

      <div className="flex gap-6">
        <a href="#what-we-do">What We Do</a>
        <a href="#solution">Our Solution</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}