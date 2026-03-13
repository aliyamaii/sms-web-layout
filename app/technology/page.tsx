import PageLayout from '@/components/page-layout';
import { Globe, Activity, Camera, Smartphone, Shield, Plane, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const technologies = [
  {
    icon: Globe,
    title: 'Central Monitoring System (CMS)',
    description: '24/7 real-time monitoring of CCTV, alarms, and access control systems for immediate response to security breaches.',
    href: '/technology/cms'
  },
  {
    icon: Activity,
    title: 'Tracker Hero Patrol',
    description: 'Real-time GPS tracking device for security guards with checkpoint scanning, emergency button, and attendance logging.',
    href: '#'
  },
  {
    icon: Camera,
    title: 'CCTV Solutions',
    description: 'AI-based surveillance with 30-day data retention, analytics, and automated security operations.',
    href: '#'
  },
  {
    icon: Smartphone,
    title: 'Smart Mangga',
    description: 'AI face recognition access control with fingerprint unlock, mobile app remote control, and detailed access logs.',
    href: '#'
  },
  {
    icon: Shield,
    title: 'Body Camera (Tracker RTS)',
    description: 'Live streaming body cameras with 4G/WiFi support, GPS tracking, and 24/7 monitoring center.',
    href: '#'
  },
  {
    icon: Plane,
    title: 'Drone X Surveillance',
    description: 'Automated drone systems for checkpoint monitoring and aerial surveillance of large areas.',
    href: '#'
  },
];

export default function TechnologyPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Technology-First Security
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              AI-powered solutions for proactive threat detection and enhanced protection
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
                Smart Security, Safer Communities
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Sigma Master Security, we redefine physical security with cutting-edge technology and customized solutions. We go beyond traditional methods, leveraging the power of intelligent systems and automation to keep you and your assets safe. Our technology-centric approach integrates AI, advanced analytics, and remote monitoring for proactive threat detection and prevention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Technology Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <Link
                    key={index}
                    href={tech.href}
                    className="group bg-white border-2 border-gray-100 hover:border-primary-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="bg-primary-100 text-primary-600 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tech.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Technology */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Technology Integration Benefits
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Proactive Detection
                </h3>
                <p className="text-gray-600">
                  AI-powered solutions enable early threat detection and prevention rather than reactive response.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Real-Time Monitoring
                </h3>
                <p className="text-gray-600">
                  24/7 centralized monitoring ensures immediate response to any security event.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Data-Driven Decisions
                </h3>
                <p className="text-gray-600">
                  Advanced analytics provide insights for informed security planning and optimization.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  Integrated Systems
                </h3>
                <p className="text-gray-600">
                  Seamless integration of different security systems provides unified control and management.
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
              Ready to Upgrade Your Security?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Our AI-powered solutions are ready to protect what matters most.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-primary-600 px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Request Technology Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
