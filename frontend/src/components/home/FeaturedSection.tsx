import { MapPin, Star, Clock } from "lucide-react";
import Image from "next/image";

export function FeaturedSection() {
  const featuredBusinesses = [
    {
      id: 1,
      name: "The Rustic Spoon",
      category: "Food & Dining",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      reviews: 124,
      location: "Downtown, Metro City",
      isOpen: true,
      price: "$$",
    },
    {
      id: 2,
      name: "Zenith Wellness Spa",
      category: "Health & Beauty",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      reviews: 89,
      location: "Westside Hills",
      isOpen: true,
      price: "$$$",
    },
    {
      id: 3,
      name: "Urban Outfitters Hub",
      category: "Shopping",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      reviews: 210,
      location: "Central Mall",
      isOpen: false,
      price: "$$",
    },
    {
      id: 4,
      name: "Elite Fitness Studio",
      category: "Services",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      reviews: 156,
      location: "Northside Park",
      isOpen: true,
      price: "$$",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
              Featured Places
            </h2>
            <p className="text-gray-500 text-lg">
              Discover top-rated businesses and spots near you
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:text-orange-500 transition-all duration-300 shadow-sm self-center md:self-auto">
            View All Places
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBusinesses.map((business) => (
            <div
              key={business.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={business.image}
                  alt={business.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700 shadow-sm">
                    {business.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-bold rounded-full shadow-sm text-white ${business.isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`}>
                    {business.isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-1">
                    {business.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-md">
                    <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                    <span className="text-sm font-bold text-orange-700">{business.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="text-gray-400 font-medium">{business.reviews} reviews</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="font-medium text-gray-500">{business.price}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1.5 line-clamp-1">
                    <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                    <span className="truncate">{business.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
