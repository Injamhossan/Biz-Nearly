import { MapPin, Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-white">
      <div className="container mx-auto px-6 flex flex-col items-center text-center max-w-7xl py-10">
        
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-6 shadow-sm">
          <span className="text-base">🌍</span>
          Discover businesses worldwide
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-5 font-primary">
          Find the best local <br />
          <span className="font-serif italic text-orange-500 relative">
            businesses
          </span>
          {" "}near you
        </h1>
        
        {/* Subheadline */}
        <p className="text-base text-gray-500 max-w-2xl leading-relaxed mb-8 mx-auto">
          Explore top-rated restaurants, services, and shops in your
          neighborhood. Your next favorite spot is just a search away.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-2xl bg-white p-1.5 rounded-full border border-gray-200 shadow-xl shadow-gray-100/50 flex flex-col sm:flex-row items-center gap-1 hover:shadow-2xl transition-shadow duration-300">
          
          {/* Search Input */}
          <div className="flex-1 flex items-center px-4 h-12 w-full border-b sm:border-b-0 sm:border-r border-gray-100">
            <Search className="w-4 h-4 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Search businesses, services..."
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-base"
            />
          </div>
          
          {/* Location Input */}
          <div className="flex-1 flex items-center px-4 h-12 w-full">
            <MapPin className="w-4 h-4 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="New York, NY" 
              className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400 text-base"
            />
          </div>
          
          {/* Search Button */}
          <button className="hidden sm:flex items-center justify-center h-10 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition-all hover:scale-105 active:scale-95 shadow-md shadow-orange-500/20 text-sm whitespace-nowrap">
            Search
          </button>
        </div>
        
        {/* Mobile Search Button */}
        <button className="sm:hidden w-full max-w-2xl mt-3 h-10 bg-orange-500 text-white font-medium rounded-full shadow-lg text-sm">
          Search
        </button>

        {/* Popular Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6 text-sm text-gray-500">
          <span className="font-semibold text-gray-400 uppercase tracking-wider text-[10px]">Popular:</span>
          {["Restaurants", "Hospitals", "Salons", "Gym", "Grocery", "Cafés"].map((cat) => (
            <button 
              key={cat}
              className="px-3 py-1 bg-white hover:bg-orange-50 text-gray-600 hover:text-orange-600 rounded-full border border-gray-200 hover:border-orange-200 transition-all shadow-sm cursor-pointer text-xs"
            >
              {cat}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
