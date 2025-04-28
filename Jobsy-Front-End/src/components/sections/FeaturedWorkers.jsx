const FeaturedWorkers = () => {
    const workers = [
      {
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Michael Johnson",
        rating: 4.9,
        category: "Plumbing",
        description: "15 years experience in residential plumbing"
      },
      {
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Sarah Williams",
        rating: 5.0,
        category: "Electrical",
        description: "Certified electrician with safety-first approach"
      },
      {
        avatar: "https://randomuser.me/api/portraits/men/75.jpg",
        name: "David Chen",
        rating: 4.8,
        category: "Moving",
        description: "Professional mover with 200+ happy clients"
      }
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
            Top Rated Workers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {workers.map((worker, index) => (
              <div key={index} className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <img 
                    src={worker.avatar} 
                    alt={worker.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#F97316]"
                  />
                  <div>
                    <h3 className="font-bold text-[#1E293B]">{worker.name}</h3>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(worker.rating) ? 'text-[#FBBF24]' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm text-gray-600">({worker.rating})</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#1E293B] mb-2">
                  <span className="font-semibold">Specialty:</span> {worker.category}
                </p>
                <p className="text-gray-600">{worker.description}</p>
                <button className="mt-4 w-full bg-[#1E40AF] hover:bg-[#1E3A8A] text-white py-2 rounded-md transition">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FeaturedWorkers