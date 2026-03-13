import PageLayout from '@/components/page-layout';
import { Shield, Award, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const management = [
  {
    name: 'Lt. Kol (B) Rusli bin Dato\' Che Mee',
    title: 'Senior Management',
    description: 'A former Senior Military Officer in the Malaysian Armed Forces. He joined the military in 1977 and retired 2004 at the rank of Lieutenant Colonel (Lt. Col). Had vast exposure in various military assignments. In year 2000 he had served as Deputy Director of the Crisis and Disaster Management Unit at the Prime Minister\'s Department.',
    expertise: ['Emergency Response', 'Counter Terrorism', 'Crisis Management', 'Military Operations'],
    experience: '27+ Years Military Service'
  },
  {
    name: 'Dato\' Mohamad bin Haji Yaakub',
    title: 'Senior Management',
    description: 'A former Senior Assistant Commissioner (SAC) of the Royal Police of Malaysia (PDRM). Before retirement, he served as a Director of the Crisis and Disaster Management Unit at the Prime Minister\'s Department. He is also an expert on Security, Emergency and Counter Terrorism.',
    expertise: ['Security', 'Emergency Response', 'Counter Terrorism', 'Police Operations'],
    experience: '30+ Years Police Service'
  },
];

export default function ManagementPage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Management Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Led by industry veterans with decades of experience
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 leading-relaxed">
              At Sigma Master Security Sdn. Bhd., our leadership team brings together decades of combined experience from military and police forces. Their deep understanding of security, emergency response, and counter-terrorism ensures that our clients receive the highest level of protection.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {management.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <div className="grid md:grid-cols-3">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-8 flex items-center justify-center">
                    <Users className="w-32 h-32 text-primary-600" strokeWidth={1} />
                  </div>
                  <div className="md:col-span-2 p-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <Award className="w-6 h-6 text-accent-500" />
                      <span className="text-primary-600 font-semibold">{person.title}</span>
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                      {person.name}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {person.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Expertise</h3>
                        <ul className="space-y-1">
                          {person.expertise.map((item) => (
                            <li key={item} className="flex items-center space-x-2 text-sm text-gray-600">
                              <Shield className="w-3 h-3 text-primary-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Experience</h3>
                        <p className="text-sm text-gray-600">{person.experience}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Executive Team
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">
                  Muhammad Hafiz Haziq bin Zulkifly
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-2">Human Resource Manager</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">
                  Nurul Najwa Binti Mohd Arif
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-2">Operation Manager</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">
                  Khairul Nizam bin Otman
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-2">Executive</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">
                  Natasha Binti Hasbin
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-2">Officer</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">
                  Nurul Farah Syarah Binti Razali
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-2">Manager</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-heading font-semibold text-gray-900 mb-1">
                  Muhammad Izzudin bin Hisyam
                </h3>
                <p className="text-primary-600 text-sm font-medium mb-2">Clerk</p>
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
