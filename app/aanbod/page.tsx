import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Aanbod' };

export default function AanbodPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-primair mb-12">Mijn aanbod</h1>
      <div className="grid gap-8 sm:grid-cols-2">
        <Link href="/aanbod/de-idealen-koers"
          className="group bg-wit rounded-2xl overflow-hidden shadow-sm border border-primair/10 hover:shadow-md transition-shadow">
          <img src="/fotos/web/og-idealen-koers.jpg" alt="De Idealen Koers"
            className="w-full aspect-[1200/630] object-cover" />
          <div className="p-8">
            <h2 className="font-koppen text-2xl font-bold text-primair mb-2">De Idealen Koers</h2>
            <p className="text-tekst/70 leading-relaxed mb-4">
              Een 6-wekenprogramma in Deventer voor vrouwen die moeder zijn en verlangen naar
              keuzevrijheid, rust, energie en richting.
            </p>
            <span className="font-bold text-primair group-hover:underline">Meer info →</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
