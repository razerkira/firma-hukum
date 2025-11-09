// src/components/AboutUs.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
        
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tentang Kami
          </h2>
          <p className="mt-6 text-lg leading-7 text-gray-600">
            FirmaHukum Anda didirikan dengan misi untuk menyediakan layanan hukum 
            yang responsif, strategis, dan berintegritas tinggi. Kami menggabungkan 
            pengalaman puluhan tahun dengan pendekatan modern untuk memecahkan 
            masalah hukum klien kami yang paling kompleks.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <div className="mt-1 flex-shrink-0">
                <span className="text-blue-700 font-bold">✓</span>
              </div>
              <p className="ml-3 text-base text-gray-600">
                <strong>Pengalaman Lokal Mendalam:</strong> Pemahaman kami yang kuat 
                tentang regulasi dan badan pemerintah Indonesia.
              </p>
            </div>
            <div className="flex items-start">
              <div className="mt-1 flex-shrink-0">
                <span className="text-blue-700 font-bold">✓</span>
              </div>
              <p className="ml-3 text-base text-gray-600">
                <strong>Berpusat pada Klien:</strong> Kami bukan hanya penasihat hukum; 
                kami adalah mitra strategis yang berfokus pada hasil bisnis Anda.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="#tim">
                Temui Tim Kami
              </Link>
            </Button>
          </div>
        </div>

        <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-200 sm:h-80 lg:h-96">
          <div className="flex h-full w-full items-center justify-center text-gray-500">
            (Placeholder untuk Foto Kantor/Tim Profesional)
          </div>
        </div>
      </div>
    </div>
  );
}