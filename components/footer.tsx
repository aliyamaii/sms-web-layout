import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Shield, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <div className="font-heading font-bold text-xl mb-1">SIGMA MASTER</div>
              <div className="font-heading text-sm opacity-90">SECURITY SDN. BHD.</div>
            </div>
            <p className="text-white/80 mb-6 text-sm leading-relaxed">
              Your trusted security partner with 23 years of excellence. Protecting what matters most with professional expertise and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-white/80 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/technology" className="text-white/80 hover:text-white transition-colors text-sm">Technology</Link></li>
              <li><Link href="/clients" className="text-white/80 hover:text-white transition-colors text-sm">Our Clients</Link></li>
              <li><Link href="/certifications" className="text-white/80 hover:text-white transition-colors text-sm">Certifications</Link></li>
              <li><Link href="/careers" className="text-white/80 hover:text-white transition-colors text-sm">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-500" />
                <div>
                  <p className="font-medium">Headquarters</p>
                  <p className="text-sm text-white/80">
                    No. 83, Jalan SP 8/6,<br />
                    Bandar Saujana Putra,<br />
                    42610 Jenjarom, Selangor
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent-500" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+60389663680" className="text-sm text-white/80 hover:text-white transition-colors">
                    +603-8966 3680
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent-500" />
                <div>
                  <p className="font-medium">24/7 Support</p>
                  <a href="tel:+601115014294" className="text-sm text-white/80 hover:text-white transition-colors">
                    +60 11-1501 4294
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent-500" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@sigmamaster.my" className="text-sm text-white/80 hover:text-white transition-colors">
                    hello@sigmamaster.my
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Certifications & Branches */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6">Credentials</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="bg-white/10 rounded p-2 text-center">
                <Shield className="w-6 h-6 mx-auto mb-1 text-accent-500" />
                <p className="text-xs">ISO 9001</p>
              </div>
              <div className="bg-white/10 rounded p-2 text-center">
                <Shield className="w-6 h-6 mx-auto mb-1 text-accent-500" />
                <p className="text-xs">TAPA APAC</p>
              </div>
              <div className="bg-white/10 rounded p-2 text-center">
                <Shield className="w-6 h-6 mx-auto mb-1 text-accent-500" />
                <p className="text-xs">APSA</p>
              </div>
            </div>

            <h3 className="font-heading font-semibold text-lg mb-4">Branches</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Selangor (HQ)</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Pahang</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Perak</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Sabah</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4" />
                <span>Melaka</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-white/70">
            © {currentYear} Sigma Master Security Sdn. Bhd. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm text-white/70">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>24/7 Monitoring & Support</span>
            </div>
            <span>•</span>
            <span>Registered: 200101017930 (553687-W)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
