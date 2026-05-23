import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/20 px-6 py-4 backdrop-blur-md transition-all duration-300 md:px-12">
      <div className="flex items-center justify-between">
        {/* Logo with a glowing hover effect */}
        <Link href="/" className="group relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/30 transition-all hover:border-[#f26d5b] hover:shadow-[0_0_15px_rgba(242,109,91,0.6)]">
          <Image 
            src="/1.jpeg" 
            alt="Utopia Marketing Logo" 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Nav with underline animations */}
        <nav className="hidden space-x-8 text-sm font-semibold tracking-wide text-white md:flex">
          {['Home', 'Digital Marketing', 'Utopia Studio', 'Agency', 'Utopia Merch', 'Cart'].map((item) => (
            <Link key={item} href="#" className="group relative py-1">
              <span className="transition-colors duration-300 group-hover:text-[#f26d5b]">{item}</span>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#f26d5b] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button className="text-white transition-transform hover:scale-110 hover:text-[#f26d5b]">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}