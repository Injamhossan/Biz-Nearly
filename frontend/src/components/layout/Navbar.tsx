import Link from "next/link";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 group">
          <span className="font-serif text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
            Biz
          </span>
          <span className="font-serif text-xl font-bold text-orange-500">
            Nearby
          </span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Explore", "For Business"].map((item) => (
            <Link
              key={item}
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:text-orange-500 transition-colors">
            <Search className="w-4 h-4" />
          </button>
          
          <Link 
            href="/login" 
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-gray-600 bg-transparent hover:bg-gray-50 rounded-full transition-colors"
          >
            Log in
          </Link>
          
          <Link 
            href="/signup" 
            className="inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors shadow-sm shadow-orange-500/20"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
}
