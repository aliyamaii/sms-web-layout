'use client';

import { useState } from 'react';
import PageLayout from '@/components/page-layout';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const branches = [
  { name: 'Selangor (HQ)', address: 'No. 83, Jalan SP 8/6, Bandar Saujana Putra, 42610 Jenjarom', phone: '+603-8966 3680' },
  { name: 'Pahang', address: 'No. 8, Tingkat 1, Jalan Beserah, 25300 Kuantan', phone: '+603-8408 1900' },
  { name: 'Perak', address: 'No. 10A, Medan Gopeng 3, Medan Gopeng, 31350 Ipoh', phone: '+603-8408 1900' },
  { name: 'Sabah', address: 'Lot 10-B1, Kepayang Skim, Jalan Menumbok, Peti Surat 128, 79767 Menumbok', phone: '+603-8408 1900' },
  { name: 'Melaka', address: 'No. 741-1 Jalan Penara Jaya, 78300 Masjid Tanah Melaka', phone: '+603-8408 1900' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    branch: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', company: '', service: '', branch: '', message: '' });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get in touch with our security experts
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  Headquarters
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  No. 83, Jalan SP 8/6<br />
                  Bandar Saujana Putra<br />
                  42610 Jenjarom, Selangor
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  Phone Numbers
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-600 text-sm mb-1">General Inquiries:</p>
                    <a href="tel:+60389663680" className="text-primary-600 font-semibold hover:text-primary-700">
                      +603-8966 3680
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm mb-1">24/7 Emergency Support:</p>
                    <a href="tel:+601115014294" className="text-gold-600 font-semibold hover:text-gold-700">
                      +60 11-1501 4294
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-4">
                  Email
                </h3>
                <a href="mailto:hello@sigmamaster.my" className="text-primary-600 font-semibold hover:text-primary-700">
                  hello@sigmamaster.my
                </a>
                <div className="mt-4 flex items-center space-x-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">24/7 Monitoring & Support</span>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Request a Quote
                </h2>
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
                      placeholder="john@company.com"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Branch
                      </label>
                      <select
                        value={formData.branch}
                        onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select Branch</option>
                        <option value="hq">Selangor (HQ)</option>
                        <option value="pahang">Pahang</option>
                        <option value="perak">Perak</option>
                        <option value="sabah">Sabah</option>
                        <option value="melaka">Melaka</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select Service</option>
                      <option value="guards">Security Guard Services</option>
                      <option value="ert">Emergency Response Team</option>
                      <option value="k9">K9 Unit</option>
                      <option value="cms">Central Monitoring System</option>
                      <option value="training">Security Training & Consultancy</option>
                      <option value="technology">Technology Integration</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Please describe your security requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Request</span>
                  </button>
                </form>
              </div>

              {/* Branch Locations */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Branch Locations
                </h2>
                <div className="space-y-4">
                  {branches.map((branch, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-primary-50 transition-all">
                      <h3 className="font-heading font-semibold text-gray-900 mb-2">{branch.name}</h3>
                      <p className="text-gray-600 text-sm mb-2">{branch.address}</p>
                      <a href={`tel:${branch.phone.replace(/ /g, '')}`} className="text-primary-600 font-medium hover:text-primary-700 text-sm">
                        {branch.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
