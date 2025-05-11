import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      {/* Services Hero */}
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Foot Care Services
            </h1>
            <p className="text-xl mb-6">
              Comprehensive foot care services provided by Alana Pace, RN with
              20 years of nursing experience
            </p>
            <p className="text-lg">
              All services are delivered with the highest standards of care and
              professionalism
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              {
                title: "Diabetic Foot Care",
                description:
                  "Specialized care for patients with diabetes to prevent complications and maintain optimal foot health.",
                image: "/placeholder.svg?height=300&width=500",
                benefits: [
                  "Comprehensive foot assessments",
                  "Preventative care strategies",
                  "Early detection of potential issues",
                  "Personalized foot care plans",
                  "Education on proper self-care techniques",
                ],
              },
              {
                title: "Nail Disorders",
                description:
                  "Professional care for various nail conditions including ingrown toenails, fungal infections, and other nail-related issues.",
                image: "/placeholder.svg?height=300&width=500",
                benefits: [
                  "Treatment of ingrown toenails",
                  "Management of fungal nail infections",
                  "Care for thickened nails",
                  "Preventative strategies",
                  "Proper nail trimming techniques",
                ],
              },
              {
                title: "Foot Pain Management",
                description:
                  "Assessment and care plans for various types of foot pain and discomfort to improve mobility and quality of life.",
                image: "/placeholder.svg?height=300&width=500",
                benefits: [
                  "Comprehensive pain assessment",
                  "Identification of underlying causes",
                  "Non-invasive management strategies",
                  "Referrals when appropriate",
                  "Follow-up care and monitoring",
                ],
              },
              {
                title: "Preventative Foot Care",
                description:
                  "Proactive approaches to maintain foot health and prevent common foot problems before they develop.",
                image: "/placeholder.svg?height=300&width=500",
                benefits: [
                  "Regular foot health assessments",
                  "Early intervention strategies",
                  "Customized preventative care plans",
                  "Education on proper footwear",
                  "Lifestyle recommendations for foot health",
                ],
              },
              {
                title: "Foot Health Education",
                description:
                  "Personalized education on proper foot care techniques and practices to maintain optimal foot health.",
                image: "/placeholder.svg?height=300&width=500",
                benefits: [
                  "Self-care instruction",
                  "Proper footwear guidance",
                  "Hygiene best practices",
                  "Early warning signs awareness",
                  "Lifestyle modifications for foot health",
                ],
              },
              {
                title: "Senior Foot Care",
                description:
                  "Specialized foot care services tailored to the unique needs of older adults to maintain mobility and independence.",
                image: "/placeholder.svg?height=300&width=500",
                benefits: [
                  "Age-appropriate foot assessments",
                  "Management of age-related foot changes",
                  "Mobility enhancement strategies",
                  "Fall prevention education",
                  "Comfort-focused interventions",
                ],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="md:w-1/2 w-full">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
                <div className="md:w-1/2 w-full">
                  <h2 className="text-2xl font-bold mb-3 text-cyan-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <h3 className="font-semibold text-cyan-700 mb-2">
                    Benefits:
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-900">
            Our Service Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Assessment",
                description:
                  "Comprehensive evaluation of your foot health, medical history, and specific concerns.",
              },
              {
                step: "2",
                title: "Personalized Care Plan",
                description:
                  "Development of a tailored approach to address your unique foot health needs.",
              },
              {
                step: "3",
                title: "Professional Care",
                description:
                  "Implementation of appropriate foot care interventions by our experienced registered nurse.",
              },
              {
                step: "4",
                title: "Follow-up & Education",
                description:
                  "Ongoing support, monitoring, and education to maintain optimal foot health.",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-800">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule your consultation today and start your journey toward
            healthier feet with Coastal Foot Care.
          </p>
          <Button
            className="bg-white text-cyan-700 hover:bg-gray-100 w-full sm:w-auto"
            asChild
          >
            <Link href="/contact?appointment=true">Book Your Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="border border-cyan-200 bg-cyan-50 p-4 rounded-lg max-w-3xl mx-auto">
            <h3 className="font-semibold text-cyan-800 mb-2">
              Important Information
            </h3>
            <p className="text-sm text-gray-700">
              All foot care services are provided by Alana Pace, RN within the
              scope of nursing practice. Our services focus on preventative
              care, education, and non-invasive interventions. For medical
              conditions requiring diagnosis or treatment beyond the scope of
              nursing practice, we will provide appropriate referrals to
              podiatrists or other healthcare providers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
