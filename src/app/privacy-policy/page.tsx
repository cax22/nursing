export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg">Last Updated: May 10, 2025</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg">
            <p className="mb-6">
              At Coastal Foot Care, we are committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Fill out forms on our website</li>
              <li>Register for an appointment</li>
              <li>Sign up for our newsletter</li>
              <li>
                Contact us via email, phone, or other communication channels
              </li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="mb-6">
              The personal information we may collect includes your name, email
              address, phone number, mailing address, and health information
              relevant to the foot care services we provide.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We may use the information we collect for various purposes,
              including to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and manage appointments</li>
              <li>Send appointment reminders</li>
              <li>Respond to your inquiries and requests</li>
              <li>
                Send you marketing and promotional communications (with your
                consent)
              </li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>
                Protect against, identify, and prevent fraud and other illegal
                activity
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Disclosure of Your Information
            </h2>
            <p className="mb-6">
              We may share your personal information in the following
              situations:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>With Service Providers:</strong> We may share your
                information with third-party vendors, service providers, and
                other business partners who perform services on our behalf.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a
                merger, acquisition, or sale of all or a portion of our assets,
                your information may be transferred as part of that transaction.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose your
                information where required to do so by law or in response to
                valid requests by public authorities.
              </li>
              <li>
                <strong>With Your Consent:</strong> We may disclose your
                personal information for any other purpose with your consent.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Security of Your Information
            </h2>
            <p className="mb-6">
              We use administrative, technical, and physical security measures
              to protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that no security measures are perfect or
              impenetrable, and we cannot guarantee the security of your
              information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Your Privacy Rights
            </h2>
            <p className="mb-6">
              Depending on your location, you may have certain rights regarding
              your personal information, such as the right to access, correct,
              or delete your personal information. To exercise these rights,
              please contact us using the information provided below.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last Updated&quot; date at the top of this
              page.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-cyan-800">
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <address className="not-italic mb-6">
              <p>
                Email:{" "}
                <a
                  href="mailto:privacy@coastalfootcare.com"
                  className="text-cyan-600 hover:text-cyan-800"
                >
                  privacy@coastalfootcare.com
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
