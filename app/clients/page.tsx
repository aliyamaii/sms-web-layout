'use client';

import { useState } from 'react';
import PageLayout from '@/components/page-layout';
import { Building2, Users, GraduationCap, Hospital, Factory, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const clientTypes = [
  {
    icon: Building2,
    title: 'Government Ministries & Agencies',
    count: '20+',
    description: 'Ministries, departments, and government facilities across Malaysia.'
  },
  {
    icon: Factory,
    title: 'Commercial & Industrial Facilities',
    count: '25+',
    description: 'Manufacturing plants, office buildings, and industrial complexes.'
  },
  {
    icon: Users,
    title: 'Residential Communities & Condos',
    count: '10+',
    description: 'Condominiums, gated communities, and residential complexes.'
  },
  {
    icon: GraduationCap,
    title: 'Educational Institutions',
    count: '8+',
    description: 'Schools, colleges, universities, and training centers.'
  },
  {
    icon: Hospital,
    title: 'Healthcare Facilities',
    count: '5+',
    description: 'Hospitals, clinics, and healthcare centers.'
  },
];

const featuredClients = [
  { name: 'Kementerian Pendidikan Malaysia (KPM)', category: 'Government', state: 'Perak' },
  { name: 'JKR Petaling', category: 'Government', state: 'Selangor' },
  { name: 'IPG Kampus Tun Hussein Onn', category: 'Education', state: 'Johor' },
  { name: 'PERKESO', category: 'Government', state: 'Multiple States' },
  { name: 'MARA', category: 'Government', state: 'Multiple States' },
  { name: 'TTDI Plaza', category: 'Commercial', state: 'Kuala Lumpur' },
  { name: 'Guan Yin Temple', category: 'Cultural', state: 'Kuala Lumpur' },
  { name: 'Menara PGRM', category: 'Government', state: 'Kuala Lumpur' },
];

export default function ClientsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredClients = activeFilter === 'all'
    ? featuredClients
    : featuredClients.filter(client => client.category.toLowerCase() === activeFilter);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Our Clients
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trusted by 60+ organizations across Malaysia
            </p>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Who We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientTypes.map((type, index) => {
                const Icon = type.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-primary-500 transition-all group"
                  >
                    <div className="bg-primary-100 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon className="w-10 h-10 text-primary-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <div className="inline-block bg-gold-100 text-gold-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {type.count} Clients
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {type.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
              Featured Clients
            </h2>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Clients
              </button>
              <button
                onClick={() => setActiveFilter('government')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === 'government'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Government
              </button>
              <button
                onClick={() => setActiveFilter('commercial')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === 'commercial'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Commercial
              </button>
              <button
                onClick={() => setActiveFilter('education')}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === 'education'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                Education
              </button>
            </div>

            {/* Client List */}
            <div className="space-y-3">
              {filteredClients.map((client, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading font-semibold text-gray-900">
                        {client.name}
                      </h3>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span className="inline-block bg-primary-100 px-2 py-0.5 rounded">
                          {client.category}
                        </span>
                        <span>•</span>
                        <span>{client.state}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Clients Trust Sigma Master Security
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  23 Years of Experience
                </h3>
                <p className="text-gray-600">
                  Two decades of protecting critical infrastructure, commercial properties, and government institutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Fully Certified
                </h3>
                <p className="text-gray-600">
                  ISO 9001:2015, MOF, TAPA APAC, APSA, KDIN licensed — meeting all regulatory requirements.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Technology-Enhanced
                </h3>
                <p className="text-gray-600">
                  AI-powered solutions, 24/7 CMS monitoring, and advanced patrol systems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Nationwide Coverage
                </h3>
                <p className="text-gray-600">
                  Five branches across Malaysia ensuring rapid response and local support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold mb-6">
              Ready to Join Our Growing Client List?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Get a customized security solution for your organization.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
