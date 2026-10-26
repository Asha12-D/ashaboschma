import { CONTACT_EMAIL } from '@/lib/links';

export default function Footer() {
  return (
    <footer className="bg-achtergrond text-tekst/70 text-sm py-8 mt-24 border-t border-primair/15">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Asha Boschma · Alle rechten voorbehouden</p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primair transition-colors">
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
