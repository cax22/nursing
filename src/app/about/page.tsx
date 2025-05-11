import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Heart, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* About Hero */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Coastal Foot Care
            </h1>
            <p className="text-xl">
              Professional foot care services provided by Alana Pace, RN with 20
              years of nursing experience
            </p>
          </div>
        </div>
      </section>

      {/* About Alana */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=600&width=500"
                alt="Alana Pace, RN"
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-cyan-900">
                Meet Alana Pace, RN
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                With over 20 years of nursing experience, Alana has dedicated
                her career to providing exceptional healthcare services with a
                focus on foot health and preventative care.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                After working in various healthcare settings, Alana recognized
                the critical need for specialized foot care services in the
                Tampa Bay area, particularly for individuals with chronic health
                conditions and seniors.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Her extensive background in nursing has equipped her with the
                expertise to address a wide range of foot health concerns with
                compassion, professionalism, and a commitment to improving
                quality of life through proper foot care.
              </p>
              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-600 mb-6">
                <p className="italic text-gray-700">
                  &quot;I believe that proper foot care is essential for overall
                  well-being and mobility. My mission is to provide
                  high-quality, personalized foot care services that help my
                  clients maintain their independence and enjoy an active
                  lifestyle.&quot;
                </p>
                <p className="font-semibold text-cyan-800 mt-2">
                  - Alana Pace, RN
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-900">
            Experience & Credentials
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-cyan-800">
                  Specialized Training
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <BookOpen className="h-6 w-6 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">
                        Specialized Training in Foot Care
                      </p>
                      <p className="text-gray-600">
                        Foot Care Nurse Specialist Program
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <BookOpen className="h-6 w-6 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Continuing Education</p>
                      <p className="text-gray-600">
                        Regular updates in wound care, diabetic foot management,
                        and geriatric care
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-cyan-800">
                  Professional Experience
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Users className="h-6 w-6 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Senior Care Facility</p>
                      <p className="text-gray-600">
                        10 years as Registered Nurse providing specialized care
                        for elderly patients
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Users className="h-6 w-6 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Home Health Services</p>
                      <p className="text-gray-600">
                        5 years providing in-home nursing care with focus on
                        chronic disease management
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Users className="h-6 w-6 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Hospital Setting</p>
                      <p className="text-gray-600">
                        5 years in medical-surgical and wound care units
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-cyan-800">
                  Certifications
                </h3>
                <ul className="space-y-4">
                  <li className="flex">
                    <Award className="h-6 w-6 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Registered Nurse (RN)</p>
                      <p className="text-gray-600">
                        Florida State Board of Nursing
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Award className="h-6 w-6 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Certified in Foot Care</p>
                      <p className="text-gray-600">
                        American Foot Care Nurses Association
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <Award className="h-6 w-6 text-cyan-600 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Wound Care Certification</p>
                      <p className="text-gray-600">
                        Wound Care Education Institute
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-900">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Heart className="h-12 w-12 text-cyan-600 mb-4" />,
                title: "Compassionate Care",
                description:
                  "We believe in treating each client with dignity, respect, and genuine concern for their well-being.",
              },
              {
                icon: <Award className="h-12 w-12 text-cyan-600 mb-4" />,
                title: "Professional Excellence",
                description:
                  "We are committed to maintaining the highest standards of professional practice and continuing education.",
              },
              {
                icon: <Users className="h-12 w-12 text-cyan-600 mb-4" />,
                title: "Client-Centered Approach",
                description:
                  "We tailor our services to meet the unique needs and goals of each individual we serve.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-cyan-50 rounded-lg"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-800">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Experience Professional Foot Care
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your consultation with Alana Pace, RN and take the first
            step toward healthier feet and improved mobility.
          </p>
          <Button
            className="bg-white text-cyan-700 hover:bg-gray-100 w-full sm:w-auto"
            asChild
          >
            <Link href="/contact?appointment=true">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
