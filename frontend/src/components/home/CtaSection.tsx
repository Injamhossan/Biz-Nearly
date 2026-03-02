import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function CtaSection() {
  const benefits = [
    "Reach thousands of local customers daily",
    "Manage your online presence easily",
    "Get detailed insights and analytics",
    "Respond to customer reviews quickly"
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gray-900 border-t border-gray-800">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-40"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6 leading-tight">
              Ready to Grow Your <span className="text-orange-500">Business?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl">
              Join thousands of businesses that use BizNearly to connect with local customers and grow their revenue. Setting up your listing takes less than 5 minutes.
            </p>
            
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link 
                href="/add-listing" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-colors text-lg"
              >
                Add Your Business <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/pricing"
                className="text-gray-400 hover:text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2"
              >
                View Pricing
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col p-8">
                {/* Mockup Dashboard UI */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-orange-500"></div>
                  </div>
                  <div>
                    <div className="h-4 w-32 bg-gray-700 rounded mb-2"></div>
                    <div className="h-3 w-20 bg-gray-800 rounded"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                    <div className="h-3 w-16 bg-gray-600 rounded mb-3"></div>
                    <div className="h-6 w-24 bg-white/20 rounded"></div>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
                    <div className="h-3 w-16 bg-gray-600 rounded mb-3"></div>
                    <div className="h-6 w-24 bg-white/20 rounded"></div>
                  </div>
                </div>
                
                <div className="flex-1 bg-gray-800 rounded-xl p-6 flex flex-col justify-end gap-4 border border-gray-700">
                  <div className="h-3 w-full bg-gray-700 rounded"></div>
                  <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
                  <div className="h-3 w-4/6 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Floating element */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100 z-20 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Verified Listing</p>
                <p className="text-xs text-gray-500">Trust badge unlocked</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
