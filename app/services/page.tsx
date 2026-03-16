import PageLayout from '@/components/page-layout';
import { Shield, ShieldCheck, Target, Globe, Award, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Shield,
    title: 'Security Guard Services',
    description: 'Comprehensive guard services including armed guards, unarmed guards, and Nepalese guards for complete protection across all environments.',
    features: ['Armed Guards', 'Unarmed Guards', 'Nepalese Security Guards'],
    href: '/services/guards'
  },
  {
    icon: ShieldCheck,
    title: 'Emergency Response Team (ERT)',
    description: 'Agile teams trained to handle security emergencies with precision and speed. Rapid response when you need it most.',
    features: ['Rapid Response', 'Crisis Management', 'Emergency Support'],
    href: '/services/ert'
  },
  {
    icon: Target,
    title: 'K9 Canine Unit',
    description: 'Deploy highly trained dogs for explosive, drug, and contraband detection during major events or specialized patrols.',
    features: ['Explosive Detection', 'Drug Detection', 'Specialized Patrols'],
    href: '/services/k9'
  },
  {
    icon: Globe,
    title: 'Central Monitoring System (CMS)',
    description: '24/7 real-time monitoring of CCTV, alarms, and access control systems for immediate response to security breaches.',
    features: ['24/7 Monitoring', 'Real-time Alerts', 'Remote Management'],
    href: '/technology/cms'
  },
  {
    icon: Award,
    title: 'Security Training & Consultancy',
    description: 'Certified programs for guards, companies, and institutions covering safety protocols and advanced monitoring technology.',
    features: ['Professional Training', 'Certified Courses', 'Security Consultancy'],
    href: '/services/training'
  },
  {
    icon: Users,
    title: 'Technology Integration',
    description: 'AI-powered solutions for proactive threat detection, enhanced surveillance, and smart security management.',
    features: ['AI Solutions', 'Smart Systems', 'Advanced Analytics'],
    href: '/technology'
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Comprehensive security solutions tailored to meet your specific needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={index}
                    href={service.href}
                    className="group bg-white border-2 border-gray-100 hover:border-primary-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="bg-primary-100 text-primary-600 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h2 className="font-heading text-2xl font-semibold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
              Need a Customized Security Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team will work closely with you to design the right security mix for your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-accent-600 hover:bg-accent-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Request Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
