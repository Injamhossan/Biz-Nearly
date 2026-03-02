import { Smartphone, Check, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import appStoreImg from "@/assets/appstore.png";
import playStoreImg from "@/assets/playstore.png";

export function AppDownloadSection() {
  const features = [
    "Find places nearby with exact location maps",
    "Get exclusive mobile-only deals and offers",
    "Save your favorite spots for quick access",
    "Read and write reviews on the go"
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-6 md:p-10 relative border border-blue-100/50 shadow-sm">
          
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-[60px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-400 rounded-full mix-blend-multiply filter blur-[60px] opacity-20"></div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Left side content */}
            <div className="lg:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-blue-700 font-medium text-xs mb-4 shadow-sm border border-blue-200">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Get Our Mobile App</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-serif mb-4 leading-tight">
                Discover Places <br />
                <span className="text-blue-600">On The Go</span>
              </h2>
              
              <p className="text-gray-600 text-base mb-6 leading-relaxed max-w-md">
                Download the BizNearly app to explore thousands of businesses, get directions, and read reviews straight from your phone.
              </p>

              <div className="space-y-3 mb-8 text-sm">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-white p-1 rounded-full shadow-sm text-blue-600">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                {/* App Store Button */}
                <Link href="#" className="flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl transition-all hover:-translate-y-1 shadow-sm min-w-[160px]">
                  <Image src={appStoreImg} alt="App Store" className="w-8 h-8 object-contain" />
                  <div className="text-left">
                    <div className="text-[9px] leading-tight text-gray-300">Download on the</div>
                    <div className="text-xs font-semibold leading-tight">App Store</div>
                  </div>
                </Link>

                {/* Play Store Button */}
                <Link href="#" className="flex items-center justify-center gap-2.5 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-900 px-5 py-2.5 rounded-xl transition-all hover:-translate-y-1 shadow-sm min-w-[160px]">
                  <Image src={playStoreImg} alt="Google Play" className="w-8 h-8 object-contain" />
                  <div className="text-left">
                    <div className="text-[9px] leading-tight text-gray-500">GET IT ON</div>
                    <div className="text-xs font-semibold leading-tight">Google Play</div>
                  </div>
                </Link>
              </div>
              
              <div className="mt-6 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-white text-xs bg-blue-${i*100+300}`}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-500 mb-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Over 50k+ positive reviews</p>
                </div>
              </div>
            </div>

            {/* Right side Image / Mockup */}
            <div className="lg:w-1/2 relative hidden md:block">
              {/* Phone Mockup Frame */}
              <div className="relative mx-auto w-64 h-[480px] bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden shadow-blue-900/10 z-10 transform lg:rotate-[-4deg] hover:rotate-0 transition-transform duration-500">
                
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-5 bg-gray-900 rounded-b-2xl w-32 mx-auto z-30"></div>
                
                {/* Phone Screen Mockup Content */}
                <div className="w-full h-full bg-gray-50 flex flex-col pt-8 pb-5 px-3 relative z-20">
                  <header className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-[10px] text-gray-500 font-medium">Hello there!</p>
                      <h3 className="text-sm font-bold text-gray-900 leading-tight">Where to next?</h3>
                    </div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full border border-white shadow-sm overflow-hidden">
                       <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600 text-[10px] font-bold">BN</div>
                    </div>
                  </header>

                  {/* Search Bar */}
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-2.5 flex items-center gap-2 mb-4">
                    <div className="text-gray-400"><Smartphone className="w-4 h-4" /></div>
                    <div className="text-gray-400 text-xs font-medium">Bars, Hotels, Salons...</div>
                  </div>

                  {/* Categories */}
                  <div className="flex gap-2 mb-4 overflow-hidden scrollbar-hide">
                    {['Food', 'Hotels', 'Beauty', 'Fun'].map((cat, i) => (
                      <div key={i} className={`px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap ${i === 0 ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}>
                        {cat}
                      </div>
                    ))}
                  </div>

                  {/* Cards Mock */}
                  <div className="flex-1 space-y-3 relative">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2.5 h-40 overflow-hidden">
                        <div className="w-full h-20 bg-gray-200 rounded-lg mb-2.5"></div>
                        <div className="w-2/3 h-3 bg-gray-200 rounded mb-1.5"></div>
                        <div className="w-1/2 h-2.5 bg-gray-100 rounded"></div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-2.5 h-40 overflow-hidden">
                        <div className="w-full h-20 bg-gray-200 rounded-lg mb-2.5"></div>
                        <div className="w-3/4 h-3 bg-gray-200 rounded mb-1.5"></div>
                        <div className="w-1/3 h-2.5 bg-gray-100 rounded"></div>
                    </div>
                    {/* Gradient Fade for bottom of mock list */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-gray-50 to-transparent"></div>
                  </div>

                  {/* Bottom Navigation Mock */}
                  <div className="mt-auto bg-white rounded-xl shadow-md border border-gray-100 py-2.5 px-5 flex justify-between items-center text-gray-400">
                    <div className="text-blue-600 flex flex-col items-center gap-1">
                      <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-sm"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>

                </div>
              </div>

              {/* Decorative background circle behind phone */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-indigo-500 rounded-full opacity-10 filter blur-[30px] z-0"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
