// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} FirmaHukum Anda. All rights
              reserved.
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Konten di situs ini hanya untuk tujuan informasi umum dan bukan
              merupakan nasihat hukum.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
