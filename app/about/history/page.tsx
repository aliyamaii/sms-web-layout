import PageLayout from '@/components/page-layout';
import { Calendar, TrendingUp, Award, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const milestones = [
  {
    year: '2001',
    title: 'Company Established',
    description: 'Sigma Master Security Sdn. Bhd. was founded as a Bumiputera-owned security provider in Malaysia.',
    icon: Calendar
  },
  {
    year: '2007',
    title: 'Service Expansion',
    description: 'Expanded services to include centralized monitoring system (CMS), K9 unit, and security training.',
    icon: TrendingUp
  },
  {
    year: '2010',
    title: 'Branch Network',
    description: 'Established nationwide presence with branches in major states across Malaysia.',
    icon: MapPin
  },
  {
    year: '2015',
    title: 'ISO 9001:2015 Certification',
    description: 'Achieved ISO 9001:2015 Quality Management System certification under JAS-ANZ.',
    icon: Award
  },
  {
    year: '2020',
    title: 'Technology Integration',
    description: 'Launched AI-powered security solutions including Tracker Hero Patrol and Smart Mangga.',
    icon: TrendingUp
  },
  {
    year: '2024',
    title: '23 Years of Excellence',
    description: 'Celebrating over two decades of protecting lives, assets, and property across Malaysia.',
    icon: Award
  },
];

export default function HistoryPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Our History
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              23 Years of Security Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-r-lg mb-16">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                A Legacy of Protection
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Since our establishment in 2001, Sigma Master Security Sdn. Bhd. has grown from a small security provider to one of Malaysia{'s'} trusted names in the security industry. Our journey has been marked by continuous improvement, technological advancement, and an unwavering commitment to protecting our clients.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the past 23 years, we have safeguarded critical infrastructure, commercial properties, schools, government institutions, and countless other assets across the nation. Our success is built on our team of highly trained and experienced security professionals.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <div key={index} className="relative pl-20">
                      <div className="absolute left-6 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="text-3xl font-bold text-primary-600 mb-2">
                              {milestone.year}
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-gray-900">
                              {milestone.title}
                            </h3>
                          </div>
                          <div className="bg-primary-100 p-3 rounded-lg">
                            <Icon className="w-8 h-8 text-primary-600" />
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
              Key Achievements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary-600 mb-2">60+</div>
                <div className="text-gray-700 font-medium">Trusted Clients</div>
                <p className="text-gray-600 text-sm mt-2">Across government, commercial, and residential sectors</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-gray-700 font-medium">Branch Offices</div>
                <p className="text-gray-600 text-sm mt-2">Nationwide coverage for rapid response</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-700 font-medium">Bumiputera Owned</div>
                <p className="text-gray-600 text-sm mt-2">Registered with SSM since 2001</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to About */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link
            href="/about"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
            Back to About
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
