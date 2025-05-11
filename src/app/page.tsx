import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Foot Care in Tampa Bay
            </h1>
            <p className="text-xl mb-8">
              Specialized foot care services provided by Alana Pace, RN with 20
              years of nursing experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?consultation=true">
                <Button className="bg-white text-cyan-700 hover:bg-gray-100 w-full sm:w-auto">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-[url('/placeholder.svg?height=100&width=1920')] bg-repeat-x opacity-20"></div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-900">
            Our Foot Care Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Diabetic Foot Care",
                description:
                  "Specialized care for diabetic patients to prevent complications and maintain foot health.",
                icon: "/placeholder.svg?height=80&width=80",
                url: "/services/diabetic-foot-care",
              },
              {
                title: "Nail Disorders",
                description:
                  "Treatment for ingrown toenails, fungal infections, and other nail-related conditions.",
                icon: "/placeholder.svg?height=80&width=80",
                url: "/services/nail-disorders",
              },
              {
                title: "Foot Pain Management",
                description:
                  "Assessment and care plans for various types of foot pain and discomfort.",
                icon: "/placeholder.svg?height=80&width=80",
                url: "/services/foot-pain-management",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-cyan-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-cyan-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.url}
                  className="text-cyan-600 hover:text-cyan-800 font-medium"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-cyan-600 hover:bg-cyan-700 w-full sm:w-auto">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Alana Pace, RN"
                className="rounded-lg shadow-md w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-cyan-900">
                Meet Alana Pace, RN
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                With over 20 years of nursing experience, Alana specializes in
                providing comprehensive foot care services to the Tampa Bay
                community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Alana&apos;s extensive background in nursing has equipped her
                with the expertise to address a wide range of foot health
                concerns with compassion and professionalism.
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-cyan-600 mb-6">
                <p className="italic text-gray-600">
                  &quot;My mission is to improve quality of life through proper
                  foot care, education, and preventative measures.&quot;
                </p>
              </div>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 w-full sm:w-auto"
                >
                  Read Full Bio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-900">
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Joe Biden",
                quote:
                  "Alana's expertise in diabetic foot care has been invaluable for managing my condition. Her preventative approach has helped me avoid complications.",
              },
              {
                name: "Donald J Trump",
                quote:
                  "After suffering from chronic foot pain for years, I finally found relief thanks to Alana's comprehensive assessment and treatment plan. Also J in my name stands for genius",
              },
              {
                name: "Stephen Hawking",
                quote:
                  "The foot care education I received has made a significant difference in my daily comfort. Highly recommend Coastal Foot Care!",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-cyan-50 p-6 rounded-lg shadow-sm">
                <p className="text-gray-700 mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold text-cyan-800">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-xl mb-8">
              Take the first step toward healthier feet. Contact us today to
              schedule your personalized foot care consultation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <a href="tel:+18135551234" className="flex flex-col items-center">
                <PhoneCall className="h-10 w-10 mb-4" />
                <p className="font-medium">(813) 555-1234</p>
              </a>
              <a
                href="mailto:info@coastalfootcare.com"
                className="flex flex-col items-center"
              >
                <Mail className="h-10 w-10 mb-4" />
                <p className="font-medium">info@coastalfootcare.com</p>
              </a>
            </div>
            <Link href="/contact">
              <Button className="bg-white text-cyan-700 hover:bg-gray-100 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
