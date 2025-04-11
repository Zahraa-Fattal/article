"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const showNav = pathname !== "/login" && pathname !== "/register";

  if (!showNav) return null;

  return (
    <nav className="bg-gray-100 text-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-semibold text-xl">
          Home
        </Link>
        <div className="space-x-4">
          <Link href="/articles" className="hover:text-gray-200">
            Articles
          </Link>
          <Link href="/about" className="hover:text-gray-200">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
