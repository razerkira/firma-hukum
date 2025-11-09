// src/components/Insights.tsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const recentInsights = [
  {
    category: 'Client Alert',
    title: 'Analisis Peraturan OJK Terbaru tentang Penawaran Efek (POJK 22/2024)',
    date: '5 November 2025',
    description: 'Pembaruan ini berdampak signifikan pada proses IPO dan penawaran umum...',
    href: '#',
  },
  {
    category: 'Analisis Hukum',
    title: 'Panduan Kepatuhan: Tantangan Implementasi UU PDP bagi Sektor Keuangan',
    date: '28 Oktober 2025',
    description: 'Undang-Undang Pelindungan Data Pribadi (UU PDP) memberlakukan kewajiban baru...',
    href: '#',
  },
  {
    category: 'Update Regulasi',
    title: 'Perubahan pada Pedoman Investasi BKPM: Apa Artinya bagi Investor Asing?',
    date: '15 Oktober 2025',
    description: 'Regulasi BKPM terbaru bertujuan untuk menyederhanakan perizinan...',
    href: '#',
  },
];

export default function Insights() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Wawasan & Publikasi
        </h2>
        <p className="mt-4 text-lg leading-7 text-gray-600">
          Tetap terinformasi dengan analisis hukum terbaru dan pembaruan regulasi
          dari tim ahli kami.
        </p>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {recentInsights.map((post) => (
          <motion.article
            key={post.title}
            className="flex flex-col items-start justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            whileHover={{ y: -5, scale: 1.02 }} 
            transition={{ duration: 0.2 }}        
          >
            <div className="flex w-full flex-col">
              <div className="flex items-center justify-between gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-700">
                  {post.category}
                </span>
              </div>
              <div className="group relative mt-4">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-700">
                  <Link href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </div>
            <div className="mt-6">
              <Link href={post.href} className="text-sm font-semibold text-blue-700 hover:text-blue-800">
                Baca selengkapnya <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}