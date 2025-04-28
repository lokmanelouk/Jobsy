const TopCategories = () => {
    const categories = [
      { name: "Plumbing", icon: "🚰" },
      { name: "Electrical", icon: "🔌" },
      { name: "Cleaning", icon: "🧹" },
      { name: "Moving", icon: "📦" },
      { name: "Painting", icon: "🎨" },
      { name: "Gardening", icon: "🌿" }
    ];
  
    return (
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
            Top Categories
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <button 
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all border-2 border-white
                          hover:border-[#F97316] focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                onClick={() => console.log(`Filter by ${category.name}`)} // Replace with your filter 
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-[#1E293B]">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default TopCategories