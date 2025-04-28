import { useState } from 'react';
import WorkerCard from './WorkerCard';
import { 
    FaBolt,         
    FaWater,        
    FaBroom,        
    FaTruckMoving,  
    FaList         
  } from 'react-icons/fa';
import CategoryDropdown from './CategoryDropdown';

const WorkersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    location: '',
    minRating: 0,
    priceRange: [0, 1000]
  });

  // Sample worker data
  const workers = [
    {
      id: 1,
      name: "Ahmed Ali",
      category: "Electrician",
      rating: 4.7,
      description: "Fixing electricity issues fast and safe with 8 years experience",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      price: 50,
      available: true
    },
    // Add more workers...
  ];

  const filteredWorkers = workers.filter(worker => {
    return (
      worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) && (
      filters.category === '' || worker.category === filters.category
    ) && (
      worker.rating >= filters.minRating
    ) && (
      worker.price >= filters.priceRange[0] && worker.price <= filters.priceRange[1]
    );
  });

  return (
    <section className="py-12 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1E293B] mb-2">Find Skilled Workers</h1>
          <p className="text-gray-600">Browse and hire professionals in your area</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4 bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-semibold text-[#1E293B] mb-4">Filters</h2>
            
            <div className="space-y-6">
              {/* Category Filter */}
              <div>
                <label className="block text-[#1E293B] mb-2">Category</label>
                <CategoryDropdown
                  value={filters.category} 
                  onChange={(value) => setFilters({...filters, category: value})} 
                />
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-[#1E293B] mb-2">Minimum Rating</label>
                <div className="flex items-center space-x-2">
                  {[0, 3, 4, 4.5].map(rating => (
                    <button
                      key={rating}
                      className={`px-3 py-1 rounded-md ${filters.minRating === rating ? 'bg-[#F97316] text-white' : 'bg-gray-100 text-[#1E293B]'}`}
                      onClick={() => setFilters({...filters, minRating: rating})}
                    >
                      {rating === 0 ? 'Any' : `${rating}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-[#1E293B] mb-2">Price Range</label>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">${filters.priceRange[0]}</span>
                  <span className="text-sm text-gray-600">${filters.priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={filters.priceRange[1]}
                  onChange={(e) => setFilters({...filters, priceRange: [0, parseInt(e.target.value)]})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Reset Filters */}
              <button
                className="w-full text-[#1E40AF] hover:text-[#1E3A8A] font-medium py-2 border border-[#1E40AF] rounded-md transition"
                onClick={() => setFilters({
                  category: '',
                  location: '',
                  minRating: 0,
                  priceRange: [0, 1000]
                })}
              >
                Reset Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search Bar */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, skill, or service..."
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Workers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkers.map(worker => (
                <WorkerCard key={worker.id} worker={worker} />
              ))}
            </div>

            {/* No Results */}
            {filteredWorkers.length === 0 && (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <p className="text-gray-600">No workers found matching your criteria</p>
                <button
                  className="mt-4 text-[#1E40AF] hover:text-[#1E3A8A] font-medium"
                  onClick={() => {
                    setSearchTerm('');
                    setFilters({
                      category: '',
                      location: '',
                      minRating: 0,
                      priceRange: [0, 1000]
                    });
                  }}
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination/Load More */}
            <div className="mt-8 flex justify-center">
              <button className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-6 py-2 rounded-md font-medium transition">
                Load More Workers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkersPage;