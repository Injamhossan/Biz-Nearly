"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-20 pb-10 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-blue-600 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg">
                BN
              </div>
              <span className="text-2xl font-bold font-serif text-white tracking-tight">
                BizNearly
              </span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Discover the best local businesses, read trusted reviews, and find exactly what you're looking for, wherever you are.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Explore</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#" className="hover:text-orange-500 transition-colors">How it works</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Pricing Options</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Top Categories</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Popular Locations</Link></li>
              <li><Link href="#" className="hover:text-orange-500 transition-colors">Submit a Listing</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>123 Business Avenue, <br />Tech District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>hello@biznearly.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates and exclusive local deals.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-800 border-none outline-none text-white px-4 py-3 rounded-xl pr-12 focus:ring-2 focus:ring-orange-500 transition-shadow"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              >
                <Send className="w-4 h-4 ml-[-2px]" />
              </button>
            </form>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} BizNearly. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
