const Statistics = () => {
    const stats = [
      { value: "500+", label: "Jobs Completed" },
      { value: "200+", label: "Registered Workers" },
      { value: "4.9★", label: "Average Rating" },
      { value: "98%", label: "Satisfaction Rate" }
    ];
  
    return (
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl font-bold text-[#F97316] mb-2">{stat.value}</p>
                <p className="text-lg text-[#1E293B]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Statistics