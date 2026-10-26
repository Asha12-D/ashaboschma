import { CONTACT_EMAIL } from '@/lib/links';

// Tijdelijke "hier wordt gewerkt"-inhoud voor pagina's die nog niet af zijn.
export default function ComingSoon() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-24 md:py-32 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primair mb-6">Hier wordt gewerkt!</h1>
      <p className="text-lg text-tekst/80 leading-relaxed mb-10">
        Mail me op{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-primair underline underline-offset-2 hover:opacity-80">
          {CONTACT_EMAIL}
        </a>{' '}
        als je wilt sparren over jouw ambitie nu je moeder bent.
      </p>
      <p className="font-koppen text-2xl text-primair mb-12">X Asha</p>
      <a href={`mailto:${CONTACT_EMAIL}`}
        className="inline-block bg-primair text-wit font-bold px-8 py-3 rounded-full hover:opacity-90 transition-opacity">
        Stuur me een mail →
      </a>
    </section>
  );
}
