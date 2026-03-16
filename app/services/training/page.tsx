import PageLayout from '@/components/page-layout';
import { GraduationCap, CheckCircle, ArrowRight, Award, BookOpen, Users } from 'lucide-react';
import Link from 'next/link';

const trainingPrograms = [
  {
    icon: BookOpen,
    title: 'Security Guard Training',
    description: 'Comprehensive programs for new and existing security guards covering patrol procedures, access control, and incident reporting.'
  },
  {
    icon: Users,
    title: 'Supervisor Training',
    description: 'Advanced leadership training for security supervisors covering team management, crisis response, and operational planning.'
  },
  {
    icon: Award,
    title: 'Certified Courses',
    description: 'Official certification programs recognized by Malaysian security authorities and industry bodies.'
  },
  {
    icon: Award,
    title: 'Corporate Consultancy',
    description: 'Customized security assessments and recommendations for businesses of all sizes.'
  },
];

export default function TrainingPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b4a3c0c?q=80&w=1920')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Security Training & Consultancy
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Professional training programs and expert security consultancy services
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
                Industry-Leading Training Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Sigma Master Security, we believe that effective security starts with proper training and expert guidance. Our Security Training & Consultancy division offers certified programs for security professionals and customized solutions for organizations. With 23 years of industry experience, our training programs are designed to meet Malaysian regulatory requirements and international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Training Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {trainingPrograms.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                    <div className="bg-primary-100 p-4 rounded-lg w-fit mb-4">
                      <Icon className="w-10 h-10 text-primary-600" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Course Topics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive Course Topics
            </h2>
            <div className="space-y-6">
              {[
                { category: 'Patrol Procedures', topics: ['Foot patrol techniques', 'Vehicle patrol protocols', 'Incident identification and reporting'] },
                { category: 'Access Control', topics: ['Visitor management systems', 'ID verification processes', 'Entry authorization protocols'] },
                { category: 'Emergency Response', topics: ['Fire safety procedures', 'Medical emergency response', 'Evacuation coordination'] },
                { category: 'Legal Compliance', topics: ['Malaysian security regulations', 'Use of force guidelines', 'Documentation requirements'] },
                { category: 'Technology Integration', topics: ['CCTV monitoring', 'Patrol device operation', 'Communication systems'] },
              ].map((course, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <GraduationCap className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3">
                        {course.category}
                      </h3>
                      <ul className="space-y-2">
                        {course.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-600 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
              Security Consultancy Services
            </h2>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <ul className="space-y-4">
                {[
                  'Security risk assessments and audits',
                  'Custom security plan development',
                  'Security technology integration consulting',
                  'Emergency response planning',
                  'Security staff recruitment and training',
                  'Ongoing security advisory services',
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

      {/* Certification */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <Award className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Industry-Recognized Certifications
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our training programs are recognized by Malaysian security authorities and meet international standards. Upon completion, participants receive official certifications valid for employment and professional development.
              </p>
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