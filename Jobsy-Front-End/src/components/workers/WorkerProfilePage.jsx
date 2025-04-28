import { FaStar, FaRegStar, FaMapMarkerAlt, FaTools, FaCheckCircle, FaPhone, FaEnvelope, FaMoneyBillWave } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const WorkerProfilePage = () => {
  const { id } = useParams();
  
  // Mock data - replace with API call
  const worker = {
    id: 1,
    name: "Ahmed Ali",
    category: "Electrician",
    rating: 4.7,
    completedJobs: 124,
    location: "Paris, France",
    hourlyRate: "$50",
    description: "Professional electrician with 8 years of experience in residential and commercial electrical work. Certified and insured. Specialized in wiring, lighting installations, and electrical repairs.",
    services: ["Wiring Installation", "Lighting Setup", "Electrical Repairs", "Safety Inspections"],
    reviews: [
      { user: "Marie D.", rating: 5, comment: "Fixed my wiring issue quickly and professionally.", date: "2023-05-15" },
      { user: "Thomas L.", rating: 4, comment: "Good work but arrived a bit late.", date: "2023-04-28" }
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
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(worker.rating) ? 
                    <FaStar key={i} className="text-[#FBBF24] text-xl" /> : 
                    <FaRegStar key={i} className="text-[#FBBF24] text-xl" />
                ))}
                <span className="ml-2 text-[#1E293B]">{worker.rating.toFixed(1)}</span>
              </div>
              <p className="text-gray-600 mb-4">{worker.completedJobs}+ jobs completed</p>
              
              <div className="flex space-x-4 w-full">
                <button className="flex-1 bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-lg font-semibold transition">
                  Request Job
                </button>
              </div>
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
                  <span className="text-[#1E293B]">{worker.category} for 8 years</span>
                </div>
                <div className="flex items-center">
                  <FaCheckCircle className="text-[#1E40AF] mr-2" />
                  <span className="text-[#1E293B]">Verified Professional</span>
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="text-[#1E40AF] mr-2" />
                  <span className="text-[#1E293B]">{worker.hourlyRate}/hour</span>
                </div>
              </div>
              
              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1E293B] mb-4">About Me</h2>
                <p className="text-gray-600">{worker.description}</p>
              </div>
              
              {/* Services */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-[#1E293B] mb-4">Services Offered</h2>
                <div className="flex flex-wrap gap-2">
                  {worker.services.map((service, index) => (
                    <span key={index} className="bg-[#E0F2FE] text-[#1E40AF] px-3 py-1 rounded-full text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Contact (visible to logged-in users) */}
              {true /* Replace with auth check */ && (
                <div>
                  <h2 className="text-xl font-semibold text-[#1E293B] mb-4">Contact</h2>
                  <div className="flex space-x-4">
                    <button className="flex items-center bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-4 py-2 rounded-md">
                      <FaPhone className="mr-2" /> Call
                    </button>
                    <button className="flex items-center bg-[#F97316] hover:bg-[#EA580C] text-white px-4 py-2 rounded-md">
                      <FaEnvelope className="mr-2" /> Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Reviews Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Client Reviews</h2>
          
          <div className="space-y-6">
            {worker.reviews.map((review, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default WorkerProfilePage;