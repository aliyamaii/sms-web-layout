import PageLayout from '@/components/page-layout';
import { Shield, Dog, CheckCircle, ArrowRight, Award, Search, Zap } from 'lucide-react';
import Link from 'next/link';

const k9Capabilities = [
  {
    icon: Search,
    title: 'Explosive Detection',
    description: 'Specially trained dogs detect explosives and explosives residue with high accuracy for venue security.'
  },
  {
    icon: Zap,
    title: 'Drug Detection',
    description: 'K9 units identify illegal substances, assisting in maintaining drug-free environments.'
  },
  {
    icon: Shield,
    title: 'Patrol & Protection',
    description: 'Trained dogs provide visible deterrence and protection during regular security operations.'
  },
  {
    icon: Award,
    title: 'Contraband Detection',
    description: 'Detection of prohibited items and materials in high-security environments.'
  },
];

export default function K9Page() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1534123888573-7e6e8764d7b?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              K9 Canine Unit
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Highly trained dogs for advanced security and detection operations
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-r-lg mb-12">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                Elite Canine Security Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our K9 Canine Unit consists of highly trained dogs and expert handlers for specialized security operations. From explosive and drug detection to patrol duties, our dogs are certified to provide advanced security capabilities that human guards alone cannot match. Each dog undergoes rigorous training and certification to ensure reliability and effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Our K9 Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {k9Capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <div className="bg-primary-100 p-4 rounded-lg w-fit mb-4">
                      <Icon className="w-10 h-10 text-primary-600" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Advantages of K9 Security
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { benefit: 'Enhanced Detection', description: 'Superior sensing capabilities for explosives, drugs, and contraband' },
                { benefit: 'Visual Deterrence', description: 'Presence of security dogs acts as strong psychological deterrent' },
                { benefit: 'Rapid Response', description: 'Dogs can quickly patrol large areas and detect threats humans might miss' },
                { benefit: 'Cost-Effective', description: 'One K9 team can cover area equivalent to multiple human guards' },
                { benefit: 'Versatile Applications', description: 'Suitable for events, venues, borders, and critical infrastructure' },
                { benefit: 'Certified Training', description: 'All dogs certified by recognized canine training institutions' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                    {item.benefit}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
              Ideal Applications
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <ul className="space-y-4">
                {[
                  'Major events and conferences',
                  'Airport and port security',
                  'Government buildings and embassies',
                  'Industrial facilities and warehouses',
                  'Shopping malls and entertainment venues',
                  'Border checkpoints and customs',
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Back to Services
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}