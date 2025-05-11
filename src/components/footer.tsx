import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cyan-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Coastal Foot Care. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            <Link href="/privacy-policy" className="hover:underline mr-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
          </p>
          <p className="text-sm mt-4 text-cyan-400 max-w-3xl mx-auto">
            *Disclaimer: Services provided by Alana Pace, RN are within the
            scope of nursing practice. This website does not provide medical
            advice, diagnosis, or treatment. Always consult with a qualified
            healthcare provider for medical concerns.
          </p>
        </div>
      </div>
    </footer>
  );
}
