import PageLayout from '@/components/page-layout';
import { Shield, Clock, CheckCircle, ArrowRight, Zap, ShieldAlert, Users } from 'lucide-react';
import Link from 'next/link';

const ertFeatures = [
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Deployed within minutes to critical situations, minimizing damage and ensuring safety.'
  },
  {
    icon: ShieldAlert,
    title: 'Crisis Management',
    description: 'Expert handling of security emergencies with protocols for various threat levels.'
  },
  {
    icon: Users,
    title: 'Trained Professionals',
    description: 'ERT members undergo specialized training for emergency scenarios and crisis intervention.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Around-the-clock readiness for immediate deployment when security threats arise.'
  },
];

export default function ERTPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1555445851-712b84594862?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Emergency Response Team (ERT)
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Rapid deployment for critical security situations when every second counts
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
                Swift & Strategic Emergency Response
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Emergency Response Team is trained to handle critical security incidents with speed, precision, and professionalism. From intruder alerts to medical emergencies, our ERT members are equipped and ready to respond immediately, minimizing damage and ensuring safety of personnel and assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Our ERT?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ertFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <div className="bg-primary-100 p-4 rounded-lg w-fit mb-4">
                      <Icon className="w-10 h-10 text-primary-600" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Response Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Emergency Response Process
            </h2>
            <div className="space-y-8">
              {[
                { step: '1', title: 'Alert Received', description: 'Central Monitoring System detects security breach or receives emergency call' },
                { step: '2', title: 'ERT Deployment', description: 'Nearest ERT team is immediately dispatched to the location' },
                { step: '3', title: 'Situation Assessment', description: 'ERT leader evaluates threat level and implements appropriate response protocol' },
                { step: '4', title: 'Resolution & Reporting', description: 'Incident is resolved, detailed report provided to client and authorities' },
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-primary-600 text-white font-bold text-2xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    {process.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* When to Use ERT */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
              When to Deploy ERT
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <ul className="space-y-4">
                {[
                  'Security breaches and intruder alerts',
                  'Medical emergencies on-site',
                  'Fire or natural disaster response',
                  'VIP protection incidents',
                  'Theft or vandalism in progress',
                  'Hostile situations requiring intervention',
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