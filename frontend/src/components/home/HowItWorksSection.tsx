import { Search, Map, Star, ArrowRight } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      id: 1,
      title: "Choose What To Do",
      description: "Looking for a cozy hotel, a relaxing space, or a nice restaurant? We have it all.",
      icon: Search,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      id: 2,
      title: "Find Your Spot",
      description: "Search and filter hundreds of listings, read reviews, explore photos, and find the right place.",
      icon: Map,
      color: "text-orange-500",
      bg: "bg-orange-100",
    },
    {
      id: 3,
      title: "Explore Places",
      description: "Go explore, have fun and share your experience with others by leaving a review.",
      icon: Star,
      color: "text-emerald-500",
      bg: "bg-emerald-100",
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
            How It Works
          </h2>
          <p className="text-gray-500 text-lg">
            Discover great places in just a few simple steps. Your next adventure is waiting!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line for desktop */}
          <div className="hidden md:block absolute top-[3.5rem] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-blue-200 via-orange-200 to-emerald-200 z-0 border-t border-dashed border-gray-300"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10 group text-center flex flex-col items-center">
              <div className={`w-28 h-28 ${step.bg} rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-xl group-hover:-translate-y-2 transition-transform duration-300 relative`}>
                <step.icon className={`w-12 h-12 ${step.color}`} strokeWidth={1.5} />
                
                {/* Step Number Badge */}
                <div className="absolute top-0 right-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-sm">
                {step.description}
              </p>
              
              {/* Arrow for Mobile */}
              {index !== steps.length - 1 && (
                <div className="md:hidden mt-8 text-gray-300">
                   <ArrowRight className="w-6 h-6 xl:w-8 xl:h-8 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
