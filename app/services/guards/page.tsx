import PageLayout from '@/components/page-layout';
import { Shield, CheckCircle, ArrowRight, Users, Clock } from 'lucide-react';
import Link from 'next/link';

const guardTypes = [
  {
    type: 'Armed Guards',
    icon: Shield,
    description: 'Expert security handling critical situations, protecting clients and premises, and deterring criminal activity. Highly trained and licensed personnel for high-risk environments.',
    features: [
      'Licensed firearms handling',
      'Critical situation management',
      'High-value asset protection',
      'Strategic deployment'
    ],
    suitable: 'Banks, jewelry stores, government facilities, and high-risk locations'
  },
  {
    type: 'Unarmed Guards',
    icon: Users,
    description: 'Professional and vigilant guards for premises requiring discreet and controlled protection. Ensures safety and security through access control, patrolling, and visible deterrence.',
    features: [
      'Access control management',
      'Regular patrol schedules',
      'Visible security presence',
      'Incident reporting'
    ],
    suitable: 'Commercial buildings, residential complexes, retail stores, and offices'
  },
  {
    type: 'Nepalese Security Guards',
    icon: Clock,
    description: 'Experienced Nepalese guards providing visible deterrence against criminal activity through access control, patrols, and surveillance. Known for discipline, reliability, and dedication.',
    features: [
      'Exceptional discipline',
      'High reliability',
      'Professional conduct',
      'Cultural adaptability'
    ],
    suitable: 'Industrial facilities, construction sites, and large commercial properties'
  },
];

export default function GuardsPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Security Guard Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Professional guards tailored to your specific security requirements
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
                Comprehensive Guard Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Sigma Master Security, we provide a range of professional guard services to meet your specific security needs. Whether you require armed guards for high-risk environments, unarmed guards for general protection, or Nepalese guards for their exceptional discipline and reliability, our highly trained team ensures your safety and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guard Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Guard Services
            </h2>
            <div className="space-y-8">
              {guardTypes.map((guard, index) => {
                const Icon = guard.icon;
                return (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-3">
                      <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-12 flex items-center justify-center">
                        <Icon className="w-32 h-32 text-primary-600" strokeWidth={1} />
                      </div>
                      <div className="md:col-span-2 p-8">
                        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                          {guard.type}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {guard.description}
                        </p>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {guard.features.map((feature) => (
                              <li key={feature} className="flex items-center space-x-2 text-gray-600 text-sm">
                                <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-accent-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Best For:</h4>
                          <p className="text-gray-600 text-sm">{guard.suitable}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Guards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Guards?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Highly Trained & Certified
                </h3>
                <p className="text-gray-600">
                  All our guards undergo rigorous training and certification to ensure professional conduct and competence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  24/7 Supervision
                </h3>
                <p className="text-gray-600">
                  Our guards are supervised around the clock through our Central Monitoring System and dedicated support team.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Technology-Enhanced
                </h3>
                <p className="text-gray-600">
                  Our guards utilize advanced technology including patrol devices, body cameras, and GPS tracking.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Quality Assured
                </h3>
                <p className="text-gray-600">
                  Regular monitoring and quality checks ensure service excellence at all times.
                </p>
              </div>
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
