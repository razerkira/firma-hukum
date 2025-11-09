// src/components/OurTeam.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Bapak Fulan, S.H., M.H.",
    role: "Managing Partner",
    imageUrl: "/placeholder-male.png",
    summary:
      "Mengkhususkan diri dalam membantu perusahaan multinasional menavigasi regulasi investasi dan M&A yang kompleks di Indonesia.",
    credentials: [
      "Lisensi: PERADI",
      "Penghargaan: Legal 500 Leading Individual",
    ],
  },
  {
    name: "Ibu Fulanah, S.H.",
    role: "Partner (Penyelesaian Sengketa)",
    imageUrl: "/placeholder-female.png",
    summary:
      "Fokus pada penyelesaian sengketa komersial bernilai tinggi, mewakili klien di arbitrase domestik dan internasional (BANI, SIAC).",
    credentials: ["Lisensi: PERADI", "Sertifikasi: Mediator Bersertifikat"],
  },
  {
    name: "Fulan Muda, S.H.",
    role: "Senior Associate",
    imageUrl: "/placeholder-male.png",
    summary:
      "Mendampingi startup teknologi dalam putaran pendanaan (seed & series A) dan kepatuhan data privasi (UU PDP).",
    credentials: ["Lisensi: PERADI", "Publikasi: Analisis UU PDP 2024"],
  },
];

export default function OurTeam() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tim Profesional Kami
        </h2>
        <p className="mt-4 text-lg leading-7 text-gray-600">
          Mereka adalah para ahli yang akan menjadi mitra strategis Anda dan
          menyelesaikan masalah hukum Anda.
        </p>
      </div>

      <div className="mx-auto mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
        {teamMembers.map((person) => (
          <motion.div
            key={person.name}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="flex flex-col overflow-hidden h-full">
              <div className="relative h-64 w-full bg-gray-100">
                <div className="flex h-full w-full items-center justify-center text-sm text-gray-400">
                  (Foto Profesional)
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <CardHeader>
                  <CardTitle>{person.name}</CardTitle>
                  <CardDescription className="text-blue-700 font-medium !mt-1">
                    {person.role}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <p className="text-base text-gray-600">{person.summary}</p>
                </CardContent>

                <CardFooter>
                  <ul className="w-full space-y-2">
                    {person.credentials.map((cred) => (
                      <li key={cred} className="flex items-center gap-x-2">
                        <span className="h-1.5 w-1.5 flex-none rounded-full bg-gray-400" />
                        <span className="text-sm text-gray-500">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </CardFooter>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
