// src/components/PracticeAreas.tsx
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const practiceAreas = [
  {
    title: "Penyelesaian Sengketa",
    description:
      "Menyelesaikan sengketa komersial yang kompleks melalui litigasi, arbitrase, dan mediasi.",
    details: ["Sengketa Korporat", "Kepailitan & PKPU", "Arbitrase Komersial"],
  },
  {
    title: "Hukum Korporat & M&A",
    description:
      "Menasihati klien dalam semua aspek hukum korporat, dari pendirian hingga merger & akuisisi.",
    details: [
      "Merger & Akuisisi (M&A)",
      "Penanaman Modal Asing (PMA)",
      "Restrukturisasi Perusahaan",
    ],
  },
  {
    title: "Pasar Modal",
    description:
      "Membantu perusahaan publik dan swasta dalam transaksi pasar modal dan kepatuhan regulasi OJK.",
    details: [
      "Penawaran Umum Perdana (IPO)",
      "Penerbitan Obligasi",
      "Kepatuhan & Tata Kelola (GCG)",
    ],
  },
  {
    title: "Ketenagakerjaan",
    description:
      "Memberikan panduan strategis untuk semua masalah ketenagakerjaan, dari kontrak hingga perselisihan.",
    details: [
      "Perjanjian Kerja (PKWT/PKWTT)",
      "Penyelesaian Perselisihan (PHI)",
      "Peraturan Perusahaan",
    ],
  },
];

export default function PracticeAreas() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Area Praktik Kami
        </h2>
        <p className="mt-4 text-lg leading-7 text-gray-600">
          Solusi khusus untuk masalah hukum spesifik yang Anda hadapi.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
        {practiceAreas.map((area) => (
          <motion.div
            key={area.title}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2">
                  {area.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-x-3">
                      <span className="h-1.5 w-1.5 flex-none rounded-full bg-blue-700" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
