import PageLayout from '@/components/page-layout';
import { Shield, Award, Globe, Users, MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              About Sigma Master Security
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              23 Years of Excellence in Security Services
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                  Your Trusted Security Partner
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Sigma Master Security Sdn. Bhd. is a leading security provider in Malaysia, established in 2001. We specialize in providing a comprehensive range of security services, including unarmed guards, armed guards, centralized monitoring system (CMS), Nepalese security guards, emergency response team (ERT), security training and consultancy, and K9 unit.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We understand that security is of utmost importance in today{'s'} world and therefore, we are committed to providing our clients with the best possible security solutions. Our team of security professionals is highly trained and experienced, ensuring that our clients receive the highest level of protection at all times.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  At Sigma Master Security Sdn. Bhd., we believe in providing customized security solutions to our clients, taking into consideration their unique security requirements. Our approach is to work closely with our clients to understand their needs and provide tailored security solutions that meet their specific needs.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800"
                  alt="Corporate office building"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">2001</div>
                <div className="text-gray-700 font-medium">Year Established</div>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">23+</div>
                <div className="text-gray-700 font-medium">Years in Service</div>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-gray-700 font-medium">Branches Nationwide</div>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">60+</div>
                <div className="text-gray-700 font-medium">Trusted Clients</div>
              </div>
            </div>

            {/* Bumiputera Status */}
            <div className="bg-gold-50 border-l-4 border-gold-500 p-6 rounded-r-lg mb-16">
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Bumiputera Company
              </h3>
              <p className="text-gray-600">
                Sigma Master Security Sdn. Bhd. is proud to be a Bumiputera-owned company, registered with the Companies Commission of Malaysia (SSM) under registration number 200101017930 (553687-W).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-8">
              Learn More About Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/about/vision-mission"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <Target className="w-10 h-10 text-primary-600 group-hover:text-gold-500 transition-colors" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">Vision & Mission</h3>
                    <p className="text-gray-600 text-sm">Our objectives and keys to success</p>
                  </div>
                </div>
              </Link>
              <Link
                href="/about/management"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <Users className="w-10 h-10 text-primary-600 group-hover:text-gold-500 transition-colors" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">Management Team</h3>
                    <p className="text-gray-600 text-sm">Meet our experienced leadership</p>
                  </div>
                </div>
              </Link>
              <Link
                href="/about/history"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <Award className="w-10 h-10 text-primary-600 group-hover:text-gold-500 transition-colors" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">Our History</h3>
                    <p className="text-gray-600 text-sm">23 years of security excellence</p>
                  </div>
                </div>
              </Link>
              <Link
                href="/contact"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-center space-x-4">
                  <Phone className="w-10 h-10 text-primary-600 group-hover:text-gold-500 transition-colors" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900 mb-1">Contact Us</h3>
                    <p className="text-gray-600 text-sm">Get in touch with our team</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Target({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
