import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
            <span className="text-gray-900 font-bold text-lg">♪</span>
          </div>
          <span className="text-white font-bold text-xl">Streamify</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* Sign Up Button */}
        <Link href="/signup" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
