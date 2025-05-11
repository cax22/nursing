export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg">Last Updated: May 10, 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg">
            <p className="mb-6">
              Please read these Terms of Service (&quot;Terms&quot;) carefully
              before using the Coastal Foot Care website or services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Acceptance of Terms
            </h2>
            <p className="mb-6">
              By accessing or using our website and services, you agree to be
              bound by these Terms. If you do not agree to these Terms, please
              do not use our website or services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Services Description
            </h2>
            <p className="mb-6">
              Coastal Foot Care provides foot care services by Alana Pace, RN, a
              registered nurse with 20 years of nursing experience. Our services
              include diabetic foot care, nail disorders treatment, foot pain
              management, preventative care, and foot health education.
            </p>
            <p className="mb-6">
              All services are provided within the scope of nursing practice. We
              do not provide medical diagnosis or treatment that falls outside
              the scope of nursing practice.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Appointments and Cancellations
            </h2>
            <p className="mb-6">
              Appointments can be scheduled through our website, by phone, or by
              email. We require 24 hours&apos; notice for cancellations or
              rescheduling. Failure to provide adequate notice may result in a
              cancellation fee.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Payment Terms
            </h2>
            <p className="mb-6">
              Payment is due at the time of service. We accept cash, credit
              cards, and debit cards. We do not directly bill insurance
              companies, but we can provide you with a detailed receipt that you
              may submit to your insurance provider for possible reimbursement.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Medical Disclaimer
            </h2>
            <p className="mb-6">
              The information provided on our website and during our services is
              for general informational purposes only and is not intended as a
              substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of your physician or other
              qualified health provider with any questions you may have
              regarding a medical condition.
            </p>
            <p className="mb-6">
              Alana Pace provides services as a registered nurse within the
              scope of nursing practice. For conditions requiring medical
              diagnosis or treatment beyond the scope of nursing practice, we
              will provide appropriate referrals to podiatrists or other
              healthcare providers.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Limitation of Liability
            </h2>
            <p className="mb-6">
              To the maximum extent permitted by law, Coastal Foot Care and its
              representatives shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, or any loss of
              profits or revenues, whether incurred directly or indirectly, or
              any loss of data, use, goodwill, or other intangible losses,
              resulting from your access to or use of or inability to access or
              use our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Intellectual Property
            </h2>
            <p className="mb-6">
              All content on our website, including text, graphics, logos,
              images, and software, is the property of Coastal Foot Care and is
              protected by copyright and other intellectual property laws. You
              may not reproduce, distribute, modify, or create derivative works
              of any content from our website without our express written
              permission.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Changes to Terms
            </h2>
            <p className="mb-6">
              We reserve the right to modify these Terms at any time. We will
              provide notice of any material changes by posting the updated
              Terms on our website and updating the &quot;Last Updated&quot;
              date at the top of this page. Your continued use of our website
              and services after such changes constitutes your acceptance of the
              new Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Governing Law
            </h2>
            <p className="mb-6">
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Florida, without regard to its conflict
              of law provisions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mb-6">
              <p>
                Email:{" "}
                <a
                  href="mailto:info@coastalfootcare.com"
                  className="text-cyan-600 hover:text-cyan-800"
                >
                  info@coastalfootcare.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+18135551234"
                  className="text-cyan-600 hover:text-cyan-800"
                >
                  (813) 555-1234
                </a>
              </p>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
