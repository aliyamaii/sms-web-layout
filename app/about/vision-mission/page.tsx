import PageLayout from '@/components/page-layout';
import { Target, Award, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function VisionMissionPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Vision, Mission & Objectives
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Guided by purpose, driven by excellence
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-r-lg mb-12">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="w-12 h-12 text-primary-600" />
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  Corporate Vision
                </h2>
              </div>
              <p className="text-xl text-gray-800 leading-relaxed">
                To be the most trusted and excellent leader in the security force industry.
              </p>
            </div>

            {/* Corporate Mission */}
            <div className="mb-16">
              <div className="flex items-center space-x-4 mb-8">
                <Award className="w-12 h-12 text-accent-500" />
                <h2 className="font-heading text-3xl font-bold text-gray-900">
                  Corporate Mission
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Assist Police Force</h3>
                    <p className="text-gray-600">To assist the police force to reduce crime related to property or important critical target.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Provide Protection</h3>
                    <p className="text-gray-600">To provide protection for property or assets.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Training</h3>
                    <p className="text-gray-600">To provide professional certified security related courses.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Consultation Services</h3>
                    <p className="text-gray-600">To offer security consultation services for any corporation or agency that required professional touch for their property.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Objectives */}
            <div className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Our Objectives
              </h2>
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 rounded-xl">
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3 text-gray-800">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span>To be the best company which capable to response fast</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-800">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span>To be successful and excellent company in delivering the service</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-800">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span>To evolve proudly with the nation development</span>
                  </li>
                  <li className="flex items-start space-x-3 text-gray-800">
                    <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <span>To be the leader in providing services that goes beyond the standard practice</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Keys to Success */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8">
                Our Keys to Success
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-t-4 border-accent-500 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                    Client-Centric Approach
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Listening carefully to client concerns and objectives to create customized security packages.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border-t-4 border-accent-500 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                    Deep Security Expertise
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Knowing what the client does not know — bringing deep security expertise as well as knowledge of legal regulations and liability to the table.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border-t-4 border-accent-500 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                    Comprehensive Training
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Training security guards precisely and ensuring their responsibility.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border-t-4 border-accent-500 shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Monitoring the element of service to meet the expected quality assurance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to About */}
      <section className="py-12 bg-gray-50">
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
