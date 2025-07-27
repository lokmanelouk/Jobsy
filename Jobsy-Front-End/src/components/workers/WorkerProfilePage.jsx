import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { 
  FaStar, FaRegStar, FaMapMarkerAlt, FaTools, 
  FaCheckCircle, FaPhone, FaEnvelope, FaMoneyBillWave,
  FaLeaf, FaCalendarAlt, FaClock, FaCertificate
} from 'react-icons/fa';
import { MdWork, MdEmail, MdPhone } from 'react-icons/md';

const WorkerProfilePage = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/workers/${id}`);
        setWorker(response.data);
      } catch (err) {
        console.error('Error fetching worker:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorker();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
    </div>
  );

  if (!worker) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Worker not found</h2>
        <p className="text-gray-600 mt-2">The requested profile could not be loaded</p>
      </div>
    </div>
  );

  // Calculate statistics
  const averageRating = worker.reviews.reduce((sum, review) => sum + review.rating, 0) / worker.reviews.length || 0;
  const positiveReviews = worker.reviews.filter(r => r.rating >= 4).length;
  const completionRate = worker.reviews.length > 0 ? Math.round((positiveReviews / worker.reviews.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-600 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src={worker.customer.profile_photo !== 'default.png' 
                  ? worker.customer.profile_photo 
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(worker.customer.name)}&background=fff&color=F97316&size=150`}
                alt={worker.customer.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <div className="text-white">
              <h1 className="text-3xl font-bold">{worker.customer.name}</h1>
              <p className="text-xl opacity-90 mb-2">{worker.category.name}</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(averageRating) ? 
                    <FaStar key={i} className="text-amber-300 text-lg" /> : 
                    <FaRegStar key={i} className="text-amber-300 text-lg" />
                ))}
                <span className="ml-2 font-medium">
                  {averageRating.toFixed(1)} ({worker.reviews.length} reviews)
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{worker.customer.location || 'Available in your area'}</span>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-full flex items-center">
                  <FaClock className="mr-2" />
                  <span>Available now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 -mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MdPhone className="text-orange-500 text-xl mr-3" />
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MdEmail className="text-orange-500 text-xl mr-3" />
                  <span className="text-gray-700">{worker.customer.email}</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center">
                  <FaPhone className="mr-2" /> Call Now
                </button>
                <button className="w-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-lg font-semibold flex items-center justify-center">
                  <FaEnvelope className="mr-2" /> Send Message
                </button>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Worker Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-500">{worker.reviews.length}</div>
                  <div className="text-gray-600 text-sm">Jobs Completed</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-500">{completionRate}%</div>
                  <div className="text-gray-600 text-sm">Completion Rate</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-500">{averageRating.toFixed(1)}</div>
                  <div className="text-gray-600 text-sm">Average Rating</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold text-orange-500">8+</div>
                  <div className="text-gray-600 text-sm">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Verification Card */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Verification</h3>
              <div className="space-y-3">
                <div className="flex items-center text-green-600">
                  <FaCheckCircle className="mr-2" />
                  <span>Identity Verified</span>
                </div>
                <div className="flex items-center text-green-600">
                  <FaCertificate className="mr-2" />
                  <span>Professional License</span>
                </div>
                <div className="flex items-center text-green-600">
                  <MdWork className="mr-2" />
                  <span>Background Checked</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* Navigation Tabs */}
            <div className="bg-white rounded-xl shadow-md mb-6">
              <div className="flex border-b">
                <button 
                  onClick={() => setActiveTab('about')}
                  className={`px-6 py-4 font-medium ${activeTab === 'about' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
                >
                  About
                </button>
                <button 
                  onClick={() => setActiveTab('services')}
                  className={`px-6 py-4 font-medium ${activeTab === 'services' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
                >
                  Services & Rates
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-4 font-medium ${activeTab === 'reviews' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600'}`}
                >
                  Reviews ({worker.reviews.length})
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              {activeTab === 'about' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">About Me</h3>
                  <p className="text-gray-700 mb-6">{worker.bio}</p>
                  
                  <h4 className="text-lg font-semibold mb-3">Work Experience</h4>
                  <div className="space-y-4">
                    <div className="border-l-2 border-orange-500 pl-4 py-1">
                      <div className="font-medium">Senior {worker.category.name}</div>
                      <div className="text-gray-600 text-sm">Self Employed · 2015 - Present</div>
                      <p className="text-gray-700 mt-1">Specialized in residential and commercial services with a focus on quality and customer satisfaction.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h3 className="text-xl font-bold mb-4">Services & Rates</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Basic {worker.category.name} Service</h4>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">$50/hr</span>
                      </div>
                      <p className="text-gray-600">Standard service including consultation and basic work.</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Advanced {worker.category.name} Work</h4>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">$75/hr</span>
                      </div>
                      <p className="text-gray-600">Specialized services requiring advanced skills.</p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Emergency Service</h4>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">$100/hr</span>
                      </div>
                      <p className="text-gray-600">24/7 availability for urgent situations.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h3 className="text-xl font-bold">Customer Reviews</h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          i < Math.floor(averageRating) ? 
                            <FaStar key={i} className="text-amber-400" /> : 
                            <FaRegStar key={i} className="text-amber-400" />
                        ))}
                        <span className="ml-2 text-gray-700">
                          {averageRating.toFixed(1)} out of 5 ({worker.reviews.length} reviews)
                        </span>
                      </div>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Leave a Review
                    </button>
                  </div>

                  {worker.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {worker.reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold">Customer #{review.customer_id}</h4>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  i < review.rating ? 
                                    <FaStar key={i} className="text-amber-400 text-sm" /> : 
                                    <FaRegStar key={i} className="text-amber-400 text-sm" />
                                ))}
                              </div>
                            </div>
                            <span className="text-gray-500 text-sm">
                              {new Date(review.created_at).toLocaleDateString('en-US', {
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <p className="text-gray-700 mt-2">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500">No reviews yet. Be the first to review this worker!</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Portfolio Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Portfolio</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Project {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfilePage;