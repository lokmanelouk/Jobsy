// pages/WorkerProfile.jsx
import { useParams } from 'react-router-dom';
import { FaStar, FaRegStar, FaMapMarkerAlt, FaTools, FaClock, FaMoneyBillWave } from 'react-icons/fa';

const WorkerProfile = () => {
  const { id } = useParams();
  
  // Mock data - replace with API call
  const worker = {
    id: 1,
    name: "Ahmed Ali",
    category: "Electrician",
    rating: 4.7,
    reviews: 42,
    location: "Paris, France",
    experience: "8 years",
    rate: "$50/hour",
    description: "Professional electrician with 8 years of experience in residential and commercial electrical work. Specialized in wiring, lighting installations, and electrical repairs.",
    services: ["Wiring Installation", "Lighting Setup", "Electrical Repairs", "Safety Inspections"],
    reviewsList: [
      { user: "Marie D.", rating: 5, comment: "Ahmed fixed my wiring issue in under an hour! Very professional.", date: "2023-05-15" },
      { user: "Jean P.", rating: 4, comment: "Good work but arrived 20 minutes late.", date: "2023-04-28" }
    ]
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column */}
            <div className="md:w-1/3 flex flex-col items-center">
              <img 
                src="https://randomuser.me/api/portraits/men/32.jpg" 
                alt={worker.name}
                className="w-48 h-48 rounded-full object-cover border-4 border-[#F97316] mb-4"
              />
              <h1 className="text-3xl font-bold text-[#1E293B]">{worker.name}</h1>
              <p className="text-lg text-[#64748B] mb-2">{worker.category}</p>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(worker.rating) ? 
                    <FaStar key={i} className="text-[#FBBF24] text-xl" /> : 
                    <FaRegStar key={i} className="text-[#FBBF24] text-xl" />
                ))}
                <span className="ml-2 text-[#1E293B]">({worker.reviews})</span>
              </div>
              
              <button className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-lg font-semibold text-lg transition mb-6">
                Hire Me
              </button>
            </div>
            
            {/* Right Column */}
            <div className="md:w-2/3">
              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-[#1E40AF] mr-2" />
                  <span className="text-[#1E293B]">{worker.location}</span>
                </div>
                <div className="flex items-center">
                  <FaTools className="text-[#1E40AF] mr-2" />
                  <span className="text-[#1E293B]">{worker.experience} experience</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-[#1E40AF] mr-2" />
                  <span className="text-[#1E293B]">Available today</span>
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="text-[#1E40AF] mr-2" />
                  <span className="text-[#1E293B]">{worker.rate}</span>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1E293B] mb-4">About Me</h2>
                <p className="text-gray-600">{worker.description}</p>
              </div>
              
              {/* Services */}
              <div>
                <h2 className="text-xl font-semibold text-[#1E293B] mb-4">Services Offered</h2>
                <div className="flex flex-wrap gap-2">
                  {worker.services.map((service, index) => (
                    <span key={index} className="bg-[#E0F2FE] text-[#1E40AF] px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Reviews</h2>
          
          {/* Average Rating */}
          <div className="flex items-center mb-8">
            <div className="text-4xl font-bold text-[#1E293B] mr-4">{worker.rating.toFixed(1)}</div>
            <div>
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(worker.rating) ? 
                    <FaStar key={i} className="text-[#FBBF24] text-xl" /> : 
                    <FaRegStar key={i} className="text-[#FBBF24] text-xl" />
                ))}
              </div>
              <p className="text-gray-600">{worker.reviews} reviews</p>
            </div>
          </div>
          
          {/* Reviews List */}
          <div className="space-y-6">
            {worker.reviewsList.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-[#1E293B]">{review.user}</h3>
                  <span className="text-gray-500 text-sm">{review.date}</span>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    i < review.rating ? 
                      <FaStar key={i} className="text-[#FBBF24]" /> : 
                      <FaRegStar key={i} className="text-[#FBBF24]" />
                  ))}
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
          
          {/* Add Review (Conditional) */}
          {true /* Replace with auth check */ && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-[#1E293B] mb-4">Add Your Review</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-[#1E293B] mb-2">Your Rating</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button type="button" key={star} className="text-2xl">
                        {star <= 4 /* Replace with state */ ? 
                          <FaStar className="text-[#FBBF24]" /> : 
                          <FaRegStar className="text-[#FBBF24]" />}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-[#1E293B] mb-2">Your Review</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    rows="4"
                    placeholder="Share your experience..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-6 py-2 rounded-md font-medium transition"
                >
                  Submit Review
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;