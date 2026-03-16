'use client';

import { useState } from 'react';
import PageLayout from '@/components/page-layout';
import { Users, Shield, Send, CheckCircle, Award, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const positions = [
  {
    title: 'Security Guard',
    type: 'Full-time / Part-time',
    location: 'Nationwide',
    description: 'Provide protection and security services for clients across various industries.',
    requirements: ['Minimum SPM or equivalent', 'Physically fit', 'Good communication skills', 'Willing to work shifts']
  },
  {
    title: 'Security Supervisor',
    type: 'Full-time',
    location: 'Nationwide',
    description: 'Lead a team of security guards and ensure quality service delivery.',
    requirements: ['2+ years security experience', 'Leadership experience', 'Good problem-solving skills', 'Certified security training']
  },
  {
    title: 'CCTV Operator',
    type: 'Full-time',
    location: 'Headquarters (Selangor)',
    description: 'Monitor and operate Central Monitoring System for multiple client sites.',
    requirements: ['IT literate', 'Attention to detail', 'Good analytical skills', 'Willing to work 24/7 shifts']
  },
  {
    title: 'K9 Handler',
    type: 'Full-time',
    location: 'Selected Branches',
    description: 'Work with trained dogs for detection and security operations.',
    requirements: ['Experience with animals', 'Physical fitness', 'Certified K9 training preferred', 'Willing to travel']
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application. We will review and contact you shortly.');
    setFormData({ name: '', email: '', phone: '', position: '', experience: '', message: '' });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Careers at Sigma Master Security
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our team of security professionals and build a rewarding career
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Work With Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-4 mb-3">
                  <Shield className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    23 Years of Stability
                  </h3>
                </div>
                <p className="text-gray-600">
                  Join an established company with over two decades of experience in the security industry.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-4 mb-3">
                  <Award className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Comprehensive Training
                  </h3>
                </div>
                <p className="text-gray-600">
                  Professional training programs that develop your skills and advance your career.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-4 mb-3">
                  <Users className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Growth Opportunities
                  </h3>
                </div>
                <p className="text-gray-600">
                  Clear career progression paths from guard to supervisor and management roles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="flex items-start space-x-4 mb-3">
                  <CheckCircle className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Technology-Driven
                  </h3>
                </div>
                <p className="text-gray-600">
                  Work with cutting-edge security technology including CMS, AI systems, and patrol devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Open Positions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-heading text-2xl font-bold text-gray-900">
                        {position.title}
                      </h3>
                      <span className="bg-primary-100 text-primary-600 px-4 py-1 rounded-full text-sm font-medium">
                        {position.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 mb-6">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-primary-600 p-4 text-white text-center">
                    <Link
                      href="#application-form"
                      className="font-semibold hover:text-white/90 transition-colors"
                    >
                      Apply Now →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white">
                <h2 className="font-heading text-3xl font-bold mb-2">
                  Apply to Join Our Team
                </h2>
                <p className="text-white/90">
                  Fill out the form below and we{'ll'} review your application
                </p>
              </div>
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="+60 12-3456 7890"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <select
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Position</option>
                      <option value="guard">Security Guard</option>
                      <option value="supervisor">Security Supervisor</option>
                      <option value="cctv">CCTV Operator</option>
                      <option value="k9">K9 Handler</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="e.g., 2 years"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Why do you want to join us? *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about yourself and why you{'re'} interested in joining Sigma Master Security..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </button>
                </form>
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
