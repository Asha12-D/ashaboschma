'use client';
import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/',         label: 'Home'     },
  { href: '/over-mij', label: 'Over mij' },
  { href: '/aanbod',   label: 'Aanbod'   },
  { href: '/contact',  label: 'Contact'  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-wit border-b border-primair/10 relative">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-koppen text-xl sm:text-2xl font-bold text-primair" onClick={() => setOpen(false)}>
          Asha Boschma
        </Link>

        {/* Navigatie — desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className="text-tekst hover:text-primair transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger — mobiel */}
        <button className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}>
          <span className={`block w-6 h-0.5 bg-primair transition-transform duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primair transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-primair transition-transform duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Navigatie — mobiel dropdown */}
      {open && (
        <nav className="md:hidden border-t border-primair/10 bg-wit px-6 py-5 flex flex-col gap-5 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              className="text-tekst hover:text-primair transition-colors"
              onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
