// src/components/ContactForm.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
        
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Siap untuk mendiskusikan masalah hukum Anda? Hubungi kami untuk 
            konsultasi awal. Tim kami akan merespons dalam 24 jam kerja.
          </p>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.04 11.04 0 005.139 5.139l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <a href="tel:+62211234567" className="text-base font-medium text-gray-700 hover:text-gray-900">
                (021) 123-4567
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <a href="mailto:info@firmahukum.com" className="text-base font-medium text-gray-700 hover:text-gray-900">
                info@firmahukum.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <p className="text-base font-medium text-gray-700">
                Gedung ABC, Lantai 10<br />
                Jl. Jenderal Sudirman Kav. 1<br />
                Jakarta Selatan, 12345, Indonesia
              </p>
            </div>
          </div>
        </div>

        <form action="#" method="POST" className="space-y-6">
          
          <div className="space-y-2">
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input type="text" name="name" id="name" autoComplete="name" required placeholder="Nama Anda" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input type="email" name="email" id="email" autoComplete="email" required placeholder="email@anda.com" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Nomor Telepon</Label>
            <Input type="tel" name="phone" id="phone" autoComplete="tel" required placeholder="(081) 123-4567" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Pesan Singkat</Label>
            <Textarea name="message" id="message" rows={4} required placeholder="Tuliskan pesan singkat Anda di sini..." />
          </div>
          
          <div className="flex justify-end">
            <Button type="submit" size="lg">
              Kirim Pesan
            </Button>
          </div>
        </form>
      </div>
      
      <div className="mt-16 h-80 w-full overflow-hidden rounded-lg bg-gray-200">
        <div className="flex h-full w-full items-center justify-center text-gray-500">
          (Placeholder untuk Google Maps yang Tersemat)
        </div>
      </div>
    </div>
  );
}