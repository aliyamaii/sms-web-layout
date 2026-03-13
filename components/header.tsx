'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Technology', href: '/technology' },
  { name: 'Clients', href: '/clients' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-primary-600 shadow-lg' : 'bg-primary-600/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <div className="text-white">
                <div className="font-heading font-bold text-xl tracking-tight">
                  SIGMA MASTER
                </div>
                <div className="font-heading font-medium text-sm opacity-90">
                  SECURITY SDN. BHD.
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-white/90 text-sm">
                <a href="tel:+601115014294" className="flex items-center space-x-1 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+60 11-1501 4294</span>
                </a>
                <a href="mailto:hello@sigmamaster.my" className="flex items-center space-x-1 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>hello@sigmamaster.my</span>
                </a>
              </div>
              <Link
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary-700 border-t border-white/10">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                <a href="tel:+601115014294" className="flex items-center space-x-2 text-white/90">
                  <Phone className="w-5 h-5" />
                  <span>+60 11-1501 4294</span>
                </a>
                <a href="mailto:hello@sigmamaster.my" className="flex items-center space-x-2 text-white/90">
                  <Mail className="w-5 h-5" />
                  <span>hello@sigmamaster.my</span>
                </a>
                <Link
                  href="/contact"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-all block text-center mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
