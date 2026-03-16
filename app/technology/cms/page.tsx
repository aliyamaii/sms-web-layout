import PageLayout from '@/components/page-layout';
import { Monitor, CheckCircle, ArrowRight, Shield, Activity, AlertTriangle, Clock } from 'lucide-react';
import Link from 'next/link';

const cmsFeatures = [
  {
    icon: Clock,
    title: '24/7 Monitoring',
    description: 'Round-the-clock surveillance by experienced operators ensuring constant protection.'
  },
  {
    icon: AlertTriangle,
    title: 'Real-Time Alerts',
    description: 'Instant notifications for security breaches, alarms, and suspicious activities.'
  },
  {
    icon: Activity,
    title: 'Multi-Site Management',
    description: 'Single dashboard to monitor multiple locations simultaneously for efficient oversight.'
  },
  {
    icon: Shield,
    title: 'Remote Control',
    description: 'Remote access control, lighting, and emergency response activation.'
  },
];

export default function CMSPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Central Monitoring System (CMS)
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Advanced 24/7 surveillance and alarm monitoring for comprehensive security
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
                Intelligent Surveillance & Monitoring
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Central Monitoring System represents the pinnacle of modern security technology. Operating from our headquarters, experienced operators monitor CCTV feeds, alarm systems, and access control points 24 hours a day, 7 days a week. When threats are detected, our team responds immediately, dispatching appropriate response units and coordinating with authorities as needed.
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
              CMS Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cmsFeatures.map((feature, index) => {
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

      {/* System Components */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Integrated System Components
            </h2>
            <div className="space-y-6">
              {[
                { component: 'CCTV Monitoring', description: 'Real-time video surveillance with AI-powered threat detection and motion analytics' },
                { component: 'Alarm Systems', description: 'Comprehensive alarm network with instant CMS notification and response protocols' },
                { component: 'Access Control', description: 'Integrated door access, biometric systems, and remote lock/unlock capabilities' },
                { component: 'Perimeter Security', description: 'Fence sensors, motion detectors, and intrusion detection systems' },
                { component: 'Emergency Communication', description: 'Two-way communication systems for immediate operator-to-site contact' },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <Monitor className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                        {item.component}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our CMS?
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <ul className="space-y-4">
                {[
                  'Professional operators with extensive security experience',
                  'Redundant systems ensuring 99.9% uptime',
                  'Customizable alert thresholds and response protocols',
                  'Integrated with our Emergency Response Team for rapid deployment',
                  'Regular system audits and maintenance',
                  'Detailed incident logs and reporting for compliance',
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