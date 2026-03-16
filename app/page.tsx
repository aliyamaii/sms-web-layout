'use client';

import { useState } from 'react';
import PageLayout from '@/components/page-layout';
import { Shield, CheckCircle, Clock, Users, Award, Target, ArrowRight, MapPin, Phone, Mail, Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    number: '01',
    icon: Shield,
    title: 'Security Guard Services',
    description: 'Armed guards, unarmed guards, and Nepalese guards for comprehensive protection across all environments.',
    href: '/services/guards'
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Emergency Response Team',
    description: 'Agile teams trained to handle security emergencies with precision and speed.',
    href: '/services/ert'
  },
  {
    number: '03',
    icon: Target,
    title: 'K9 Canine Unit',
    description: 'Deploy highly trained dogs for explosive, drug, and contraband detection.',
    href: '/services/k9'
  },
  {
    number: '04',
    icon: Globe,
    title: 'Central Monitoring System',
    description: '24/7 real-time monitoring of CCTV, alarms, and access control systems.',
    href: '/technology/cms'
  },
  {
    number: '05',
    icon: Award,
    title: 'Technology Integration',
    description: 'AI-powered solutions for proactive threat detection and enhanced protection.',
    href: '/technology'
  },
  {
    number: '06',
    icon: Users,
    title: 'Security Training & Consultancy',
    description: 'Certified programs covering safety protocols and advanced monitoring technology.',
    href: '/services/training'
  },
];

const whyUsPoints = [
  {
    icon: Clock,
    title: '23 Years Proven Track Record',
    description: 'Safeguarding critical infrastructure, commercial properties, schools, and government institutions across Malaysia.',
  },
  {
    icon: Award,
    title: 'Certified & Recognized',
    description: 'Licensed by KDN, MOF Bumiputera, TAPA APAC Corporate Lite, APSA Corporate, ISO 9001:2015.',
  },
  {
    icon: Globe,
    title: 'Technology-First Approach',
    description: 'We blend AI, data-driven patrol systems, and 24/7 CMS to enhance security outcomes.',
  },
  {
    icon: Users,
    title: 'Experienced Management Team',
    description: 'Led by former Lt. Col. and SAC PDRM with vast knowledge in Emergency Response & Counter Terrorism.',
  },
];

const processSteps = [
  {
    step: 'STEP 1',
    title: 'Understand Your Environment',
    description: 'We assess risks, vulnerabilities, and client goals through comprehensive site evaluation.',
  },
  {
    step: 'STEP 2',
    title: 'Design Right Security Mix',
    description: 'Choose from armed/unarmed guards, K9 units, CMS, patrol tech, or hybrid solutions.',
  },
  {
    step: 'STEP 3',
    title: 'Deploy, Monitor & Adapt',
    description: 'Real-time CMS monitoring, dedicated helpdesk, and regular reviews ensure responsive protection.',
  },
];

const industries = [
  'Government Ministries & Agencies',
  'Local Authorities & Municipal Councils',
  'Commercial & Industrial Facilities',
  'Residential Communities & Condos',
  'Educational Institutions',
  'Healthcare Facilities',
];

const branches = [
  { name: 'Selangor (HQ)', location: 'Jenjarom', phone: '+603-8966 3680' },
  { name: 'Pahang', location: 'Kuantan', phone: '+603-8408 1900' },
  { name: 'Perak', location: 'Ipoh', phone: '+603-8408 1900' },
  { name: 'Sabah', location: 'Menumbok', phone: '+603-8408 1900' },
  { name: 'Melaka', location: 'Masjid Tanah', phone: '+603-8408 1900' },
];

const certifications = [
  { name: 'SSM Registration', category: 'Business Registration' },
  { name: 'KDIN License', category: 'Security License' },
  { name: 'PIKM Membership', category: 'Industry Association' },
  { name: 'MOF Certificate', category: 'Government Contractor' },
  { name: 'MOF Bumiputera', category: 'Bumiputera Status' },
  { name: 'SST Certificate', category: 'Tax Compliance' },
  { name: 'TAPA APAC Corporate', category: 'International Standards' },
  { name: 'APSA Corporate', category: 'Regional Association' },
  { name: 'ISO 9001:2015', category: 'Quality Management' },
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/90 via-primary-700/90 to-primary-800/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              23 Years of Excellence in Security Services
            </h1>
            <p className="text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your Trusted Security Partner — Protecting What Matters Most with Professional Expertise & Cutting-Edge Technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-lg"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/30 text-lg"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-800">ISO 9001:2015</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-800">TAPA APAC</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-800">APSA Corporate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-800">MOF Bumiputera</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-6 h-6 text-primary-600" />
              <span className="font-semibold text-gray-800">KDIN Licensed</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Your Trusted Security Partner Since 2001
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Established in 2001, Sigma Master Security Sdn. Bhd. is a Bumiputera-owned security provider committed to delivering professional, technology-enhanced security services across Malaysia.
                </p>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  With 23 years of safeguarding lives, assets, and property, we offer nationwide coverage with branches in Selangor, Pahang, Perak, Sabah, and Melaka. Our 24/7 CMS monitoring and customer support ensure your security never sleeps.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-1">23+</div>
                    <div className="text-gray-600">Years in Service</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-1">5</div>
                    <div className="text-gray-600">Branches Nationwide</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-1">60+</div>
                    <div className="text-gray-600">Trusted Clients</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
                    <div className="text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800"
                  alt="Professional security guards team"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive security services tailored to meet your specific needs across Malaysia
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-gray-50 hover:bg-white border-2 border-gray-100 hover:border-primary-500 rounded-xl p-8 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary-100 text-primary-600 p-3 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-bold text-primary-200 group-hover:text-primary-500">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Sigma Master */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">
              Why Sigma Master Security?
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              More than manpower. Integrated security made simple.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {whyUsPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                  <Icon className="w-10 h-10 text-gold-400 mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3">{point.title}</h3>
                  <p className="text-white/90 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Security starts with understanding. We listen, plan, and protect.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl p-8 h-full shadow-lg border-t-4 border-primary-600">
                  <div className="text-primary-600 font-bold mb-4">{step.step}</div>
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gold-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/process"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View Full Process Details
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We serve based on your risk, not a template. Every industry faces different threats.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {industries.map((industry) => (
              <div
                key={industry}
                className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg hover:bg-primary-50 hover:border-primary-200 border border-gray-100 transition-all"
              >
                <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Certified. Licensed. Compliant. Meeting national and international standards.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <Shield className="w-12 h-12 mx-auto mb-3 text-primary-600" />
                <h3 className="font-heading font-semibold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/certifications"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View All Certifications
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Branch Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Branch Locations
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Nationwide coverage for rapid response and local support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {branches.map((branch) => (
              <div key={branch.name} className="bg-gray-50 p-6 rounded-lg hover:bg-primary-50 transition-all border border-gray-100">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-gray-900">{branch.name}</h3>
                    <p className="text-gray-600">{branch.location}</p>
                  </div>
                </div>
                <a
                  href={`tel:${branch.phone.replace(/ /g, '')}`}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{branch.phone}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Ready to Secure Your Site?
            </h2>
            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              Our trained professionals and 24/7 systems are ready when you are.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-lg"
              >
                Request Quote
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-lg font-semibold transition-all border border-white/30 text-lg"
              >
                Contact Us
              </Link>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center text-white/90">
              <a href="tel:+601115014294" className="flex items-center space-x-2 hover:text-gold-300 transition-colors">
                <Phone className="w-5 h-5" />
                <span>+60 11-1501 4294 (24/7 Support)</span>
              </a>
              <a href="mailto:hello@sigmamaster.my" className="flex items-center space-x-2 hover:text-gold-300 transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@sigmamaster.my</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
