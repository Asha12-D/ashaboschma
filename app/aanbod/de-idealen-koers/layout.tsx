import { Caveat } from 'next/font/google';
import { WACHTLIJST_URL } from '@/lib/links';

const handschrift = Caveat({ subsets: ['latin'], weight: ['600'], variable: '--font-handschrift' });

// Layout voor de landingspagina van De Idealen Koers: handschrift-lettertype en de gele wachtlijstbalk.
export default function IdealenKoersLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={handschrift.variable}>
      <div className="bg-mosterd py-4 px-6 text-center">
        <p className="font-bold text-tekst text-sm sm:text-base">
          De volgende ronde start binnenkort.{' '}
          <a href={WACHTLIJST_URL} className="underline underline-offset-2 hover:opacity-80">
            Zet je op de wachtlijst →
          </a>
        </p>
      </div>
      {children}
    </div>
  );
}
