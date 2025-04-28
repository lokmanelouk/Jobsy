const WorkerCard = ({ worker }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
        <div className="flex items-center mb-4">
          <img 
            src={worker.avatar} 
            alt={worker.name}
            className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-[#F97316]"
          />
          <div>
            <h3 className="font-bold text-[#1E293B]">{worker.name}</h3>
            <p className="text-sm text-gray-600">{worker.category}</p>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
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
        
        <p className="text-gray-600 mb-4">{worker.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-[#1E293B]">${worker.price}/hr</span>
          <button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-md text-sm font-medium transition">
            View Profile
          </button>
        </div>
      </div>
    );
  };

export default WorkerCard