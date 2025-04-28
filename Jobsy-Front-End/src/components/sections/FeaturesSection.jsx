function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1E293B]">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-[#1E293B]">
                Service {item}
              </h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt.
              </p>
              <button className="mt-4 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-4 py-2 rounded-md transition">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
