import { Star, Quote } from "lucide-react";

export function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Local Explorer",
      image: "SJ",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
      rating: 5,
      content: "BizNearly has completely changed how I explore my city. I found an amazing hidden gem of a coffee shop just two blocks from my apartment that I never knew existed!",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Restaurant Owner",
      image: "MJ",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600",
      rating: 5,
      content: "Since listing our family restaurant on BizNearly, we've seen a 40% increase in weekend foot traffic. The platform makes it so easy to connect with new local customers and respond to reviews.",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Frequent Traveler",
      image: "EC",
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-600",
      rating: 4,
      content: "Whenever I travel for work, I rely on BizNearly to find the best local salons and gyms. The review system is super trustworthy and the interface is incredibly easy to use.",
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-medium text-sm mb-6 border border-orange-200">
            <Star className="w-4 h-4 fill-current" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-serif mb-6 leading-tight">
            What Our Users Are <span className="text-orange-500">Saying</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Don't just take our word for it. Here's what people love about using BizNearly to find, rate, and discover amazing local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 relative border border-gray-100 group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-blue-50 transition-colors duration-300">
                <Quote className="w-16 h-16 fill-current" />
              </div>

              {/* Rating */}
              <div className="flex text-yellow-500 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-8 relative z-10 italic">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-gray-100">
                <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} ${testimonial.textColor} flex items-center justify-center font-bold text-lg`}>
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Stats Bar */}
        <div className="mt-20 border-t border-gray-200 pt-10">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200">
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">1M+</div>
                <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">50k+</div>
                <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">Businesses Listed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">200k</div>
                <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">Verified Reviews</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2 font-serif">4.9/5</div>
                <div className="text-sm text-gray-500 font-medium tracking-wide uppercase">Average Rating</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
