import PageLayout from '@/components/page-layout';
import { Search, Layout, Activity, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import Link from 'next/link';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Understand Your Environment',
    description: 'We begin by conducting a comprehensive assessment of your property, facilities, and current security measures. Our team evaluates potential risks, vulnerabilities, and specific security challenges unique to your environment.',
    details: [
      'Site security assessment',
      'Risk and vulnerability analysis',
      'Client goal identification',
      'Budget and timeline discussion'
    ],
    duration: '1-2 Days'
  },
  {
    number: '02',
    icon: Layout,
    title: 'Design Right Security Mix',
    description: 'Based on our assessment, we recommend the optimal combination of security services tailored to your specific needs. We work closely with you to design a customized security plan that balances protection, cost, and operational efficiency.',
    details: [
      'Armed/Unarmed Guards or Nepalese Guards',
      'K9 Unit for specialized detection',
      'Central Monitoring System (CMS) integration',
      'Emergency Response Team (ERT) availability',
      'Technology Integration (AI-powered solutions)'
    ],
    duration: '2-3 Days'
  },
  {
    number: '03',
    icon: Activity,
    title: 'Deploy, Monitor & Adapt',
    description: 'We deploy your security personnel and systems according to the agreed plan. Through 24/7 CMS monitoring and dedicated helpdesk support, we ensure continuous protection. Regular reviews and adjustments are made based on changing needs or emerging threats.',
    details: [
      'Deployment of security personnel and systems',
      '24/7 CMS monitoring for quick response',
      'Dedicated online helpdesk support',
      'Regular service quality monitoring',
      'Periodic reviews and adjustments'
    ],
    duration: 'Ongoing'
  },
];

export default function ProcessPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Our Process
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Security starts with understanding. We listen, plan, and protect.
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
                Customized Security Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Sigma Master Security, we believe that one size does not fit all when it comes to security. Our approach is to work closely with our clients to understand their needs and provide tailored security solutions that meet their specific requirements. From listening carefully to client concerns to bringing deep security expertise and legal regulations knowledge, we ensure comprehensive protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Three Steps to Complete Security
            </h2>
            <div className="space-y-12">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                      <div className="grid md:grid-cols-3">
                        <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-12 flex flex-col items-center justify-center text-white">
                          <div className="text-6xl font-bold opacity-30 mb-4">
                            {step.number}
                          </div>
                          <Icon className="w-20 h-20" strokeWidth={1} />
                        </div>
                        <div className="md:col-span-2 p-8">
                          <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {step.description}
                          </p>
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                            <ul className="space-y-2">
                              {step.details.map((detail) => (
                                <li key={detail} className="flex items-start space-x-2 text-gray-600">
                                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="inline-block bg-accent-100 text-accent-700 px-4 py-2 rounded-lg font-semibold">
                            Duration: {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:flex justify-center py-8">
                        <ArrowRight className="w-12 h-12 text-accent-500" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Our Process Works
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border-t-4 border-primary-600 shadow-sm">
                <div className="flex items-start space-x-4 mb-4">
                  <Search className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Deep Understanding
                  </h3>
                </div>
                <p className="text-gray-600">
                  We take time to understand your unique security requirements, risks, and objectives before recommending solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-t-4 border-accent-500 shadow-sm">
                <div className="flex items-start space-x-4 mb-4">
                  <Layout className="w-8 h-8 text-accent-500 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Tailored Solutions
                  </h3>
                </div>
                <p className="text-gray-600">
                  Every security plan is customized to match your specific needs, budget, and timeline.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-t-4 border-primary-600 shadow-sm">
                <div className="flex items-start space-x-4 mb-4">
                  <Activity className="w-8 h-8 text-primary-600 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Continuous Monitoring
                  </h3>
                </div>
                <p className="text-gray-600">
                  24/7 CMS monitoring and regular quality checks ensure service excellence at all times.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border-t-4 border-accent-500 shadow-sm">
                <div className="flex items-start space-x-4 mb-4">
                  <Shield className="w-8 h-8 text-accent-500 flex-shrink-0" />
                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    Quality Assurance
                  </h3>
                </div>
                <p className="text-gray-600">
                  We monitor service elements to meet expected quality standards and continuously improve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
              Ready to Secure Your Site?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our trained professionals and 24/7 systems are ready when you are.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              Start Your Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
