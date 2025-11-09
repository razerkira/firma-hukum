// src/components/Header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="text-xl font-bold">
          <Link href="/">FirmaHukum Anda</Link>
        </div>

        <nav className="hidden space-x-6 md:flex">
          <Link
            href="#tentang"
            className="text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            Tentang Kami
          </Link>
          <Link
            href="#layanan"
            className="text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            Area Praktik
          </Link>
          <Link
            href="#tim"
            className="text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            Tim Kami
          </Link>
          <Link
            href="#wawasan"
            className="text-sm font-medium text-gray-600 hover:text-blue-700"
          >
            Wawasan
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <span className="hidden text-sm font-semibold text-gray-700 sm:block">
            (021) 123-4567
          </span>

          <Button asChild size="sm">
            <Link href="#kontak">Hubungi Kami</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
