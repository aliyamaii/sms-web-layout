import PageLayout from '@/components/page-layout';
import { Award, CheckCircle, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  {
    name: 'SSM Registration',
    category: 'Business Registration',
    number: '200101017930 (553687-W)',
    description: 'Registered with the Companies Commission of Malaysia (SSM) since 2001.',
    icon: Shield
  },
  {
    name: 'KDIN License',
    category: 'Security License',
    number: 'Licensed by KDN',
    description: 'Licensed by the Ministry of Home Affairs (KDN) to provide security services.',
    icon: Shield
  },
  {
    name: 'PIKM Membership',
    category: 'Industry Association',
    number: 'PIKM Member',
    description: 'Member of Persatuan Industri Keselamatan Malaysia, promoting security industry development.',
    icon: Award
  },
  {
    name: 'MOF Certificate',
    category: 'Government Contractor',
    number: 'MOF Registered',
    description: 'Registered with the Ministry of Finance as a government contractor.',
    icon: Award
  },
  {
    name: 'MOF Bumiputera',
    category: 'Bumiputera Status',
    number: 'Bumiputera Certified',
    description: 'Certified as a Bumiputera-owned company.',
    icon: Award
  },
  {
    name: 'SST Certificate',
    category: 'Tax Compliance',
    number: 'SST Registered',
    description: 'Registered for Sales and Service Tax compliance.',
    icon: Shield
  },
  {
    name: 'TAPA APAC Corporate',
    category: 'International Standards',
    number: 'Corporate Lite Certified',
    description: 'Corporate Lite Member of Transported Asset Protection Association Asia Pacific.',
    icon: Award
  },
  {
    name: 'APSA Corporate',
    category: 'Regional Association',
    number: 'Corporate Certified',
    description: 'Corporate Member of Asia Pacific Security Association.',
    icon: Award
  },
  {
    name: 'ISO 9001:2015',
    category: 'Quality Management',
    number: 'JAS-ANZ Certified',
    description: 'ISO 9001:2015 Quality Management System certified under JAS-ANZ accreditation.',
    icon: Award
  },
];

export default function CertificationsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Certifications & Compliance
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Certified. Licensed. Compliant. Meeting national and international standards.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-r-lg mb-16">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Certified Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sigma Master Security Sdn. Bhd. is proud to be associated with leading industry organizations and certified under national and international standards. Our certifications and memberships demonstrate our commitment to quality, professionalism, and continuous improvement in security services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                        <Icon className="w-8 h-8 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-semibold text-gray-900 mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-primary-600 text-sm font-medium">{cert.number}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                        {cert.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Our Certifications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-4 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Quality Assurance
                  </h3>
                </div>
                <p className="text-gray-600">
                  ISO 9001:2015 certification ensures consistent quality in all our security services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-4 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Regulatory Compliance
                  </h3>
                </div>
                <p className="text-gray-600">
                  All certifications ensure full compliance with Malaysian security regulations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-4 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Industry Recognition
                  </h3>
                </div>
                <p className="text-gray-600">
                  PIKM and APSA memberships demonstrate our standing in the security industry.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-4 mb-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Government Approved
                  </h3>
                </div>
                <p className="text-gray-600">
                  MOF and Bumiputera certifications enable us to serve government clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Back to Home
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
