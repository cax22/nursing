import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-cyan-700">
            Coastal Foot Care
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-cyan-900 hover:text-cyan-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-cyan-900 hover:text-cyan-600 font-medium"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-cyan-900 hover:text-cyan-600 font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-cyan-900 hover:text-cyan-600 font-medium"
          >
            Contact
          </Link>
        </nav>
        <Button className="bg-cyan-600 hover:bg-cyan-700" asChild>
          <Link href="/contact?appointment=true">Book Appointment</Link>
        </Button>
      </div>
    </header>
  );
}
