// src/components/Hero.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TextType from "./TextType";

export default function Hero() {
  return (
    <section id="beranda" className="bg-gray-50">
      <div className="container mx-auto flex h-[calc(100vh-80px)] min-h-[500px] flex-col items-center justify-center px-4 text-center">
        {/*<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Solusi Hukum Profesional
          <span className="block text-blue-700">
            untuk Bisnis Anda yang Kompleks
          </span>
        </h1>*/}

        <h1 className="text-4xl font-bold tracking-tight text-[#ffdf00] sm:text-6xl">
          <TextType
            text={["EGUL ASSOCIATES LAW FIRM", ""]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Menavigasi Hukum Indonesia dengan Percaya Diri. EGUL ASSOCIATES hadir
          dengan keahlian dan integritas untuk perusahaan, startup, dan
          kebutuhan personal Anda.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#kontak">Jadwalkan Konsultasi Gratis</Link>
          </Button>

          <Button asChild variant="ghost" size="lg">
            <Link href="#layanan">
              Pelajari Layanan Kami <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
