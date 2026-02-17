import { BedDouble, Briefcase, GraduationCap, HeartPulse, ShoppingBag, Utensils } from "lucide-react";

export function CategorySection() {
  const categories = [
    { name: "Food & Dining", count: "245 listings", icon: Utensils, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Health", count: "128 listings", icon: HeartPulse, color: "text-rose-500", bg: "bg-rose-50" },
    { name: "Shopping", count: "312 listings", icon: ShoppingBag, color: "text-sky-500", bg: "bg-sky-50" },
    { name: "Education", count: "87 listings", icon: GraduationCap, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Services", count: "194 listings", icon: Briefcase, color: "text-slate-500", bg: "bg-slate-50" },
    { name: "Hotels", count: "56 listings", icon: BedDouble, color: "text-orange-500", bg: "bg-orange-50" },
  ];

  return (
    <section className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-500 text-lg">
            Explore businesses across popular categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group bg-white rounded-2xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className={`p-4 rounded-xl mb-4 ${category.bg} ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                {category.name}
              </h3>
              <span className="text-sm text-gray-400 font-medium">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
