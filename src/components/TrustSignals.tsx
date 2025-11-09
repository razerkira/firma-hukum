// src/components/TrustSignals.tsx

export default function TrustSignals() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-base font-semibold text-gray-600">
          Diakui oleh dan berafiliasi dengan:
        </h2>

        <div className="mt-8 grid grid-cols-2 place-items-center gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          <div className="text-lg font-semibold text-gray-400">Hukumonline</div>
          <div className="text-lg font-semibold text-gray-400">
            The Legal 500
          </div>
          <div className="text-lg font-semibold text-gray-400">
            Chambers & Partners
          </div>
          <div className="text-lg font-semibold text-gray-400">PERADI</div>
          <div className="text-lg font-semibold text-gray-400">Asialaw</div>
        </div>
      </div>
    </section>
  );
}
