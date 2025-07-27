import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { 
  FaStar, FaRegStar, FaMapMarkerAlt, FaTools, 
  FaPhone, FaEnvelope, FaCalendarAlt, FaClock,
  FaCheckCircle, FaCertificate
} from 'react-icons/fa';
import { MdWork, MdEmail, MdPhone } from 'react-icons/md';

const WorkerProfilePage = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('about');

  // Mock status - replace with actual data from your API
  const [status, setStatus] = useState({
    available: true,
    lastActive: '2 hours ago',
    responseRate: '98%',
    statusMessage: 'Available for immediate work'
  });

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/workers/${id}`);
        setWorker(response.data);
        
        // In a real app, you would get this from the API
        setStatus({
          available: true,
          lastActive: '2 hours ago',
          responseRate: '98%',
          statusMessage: 'Available for immediate work'
        });
      } catch (err) {
        console.error('Error fetching worker:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchWorker();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-32 w-32 rounded-full bg-gray-200 mb-4"></div>
        <div className="h-6 w-48 bg-gray-200 rounded mb-2"></div>
        <div className="h-4 w-32 bg-gray-200 rounded"></div>
      </div>
    </div>
  );

  if (!worker) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-xl shadow-sm max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Profile Not Found</h2>
        <p className="text-gray-600 mb-6">The worker profile you're looking for doesn't exist or may have been removed.</p>
        <button 
          onClick={() => window.history.back()} 
          className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );

  // Calculate statistics
  const averageRating = worker.reviews.reduce((sum, review) => sum + review.rating, 0) / worker.reviews.length || 0;
  const positiveReviews = worker.reviews.filter(r => r.rating >= 4).length;
  const completionRate = worker.reviews.length > 0 ? Math.round((positiveReviews / worker.reviews.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Status */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={worker.customer.profile_photo !== 'default.png' 
                  ? worker.customer.profile_photo 
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(worker.customer.name)}&background=fff&color=F97316&size=150`}
                alt={worker.customer.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
              {/* Status Indicator */}
              <div className={`absolute bottom-0 right-0 h-6 w-6 rounded-full border-2 border-white ${status.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">{worker.customer.name}</h1>
                  <p className="text-xl text-orange-600">{worker.category.name}</p>
                </div>
                
                {/* Status Badge */}
                <div className={`px-4 py-2 rounded-full ${status.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} flex items-center gap-2`}>
                  <div className={`w-2 h-2 rounded-full ${status.available ? 'bg-green-500' : 'bg-gray-500'}`}></div>
                  <span className="font-medium">{status.statusMessage}</span>
                </div>
              </div>

              {/* Rating and Location */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    i < Math.floor(averageRating) ? 
                      <FaStar key={i} className="text-amber-400 text-lg" /> : 
                      <FaRegStar key={i} className="text-amber-400 text-lg" />
                  ))}
                  <span className="ml-2 font-medium text-gray-700">
                    {averageRating.toFixed(1)} ({worker.reviews.length} reviews)
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{worker.customer.location || 'Available in your area'}</span>
                </div>

                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  <span>Response rate: {status.responseRate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <MdPhone className="text-orange-500 text-xl mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MdEmail className="text-orange-500 text-xl mr-3" />
                  <span>{worker.customer.email}</span>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center transition transform hover:-translate-y-0.5">
                  <FaPhone className="mr-2" /> Call Now
                </button>
                <button className="w-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 py-3 rounded-lg font-semibold flex items-center justify-center transition">
                  <FaEnvelope className="mr-2" /> Send Message
                </button>
              </div>
            </div>

            {/* Status Details Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Availability</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className={`font-medium ${status.available ? 'text-green-600' : 'text-gray-600'}`}>
                    {status.available ? 'Available' : 'Not Available'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Active:</span>
                  <span className="text-gray-800">{status.lastActive}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Rate:</span>
                  <span className="text-gray-800">{status.responseRate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Response Time:</span>
                  <span className="text-gray-800">Within 1 hour</span>
                </div>
              </div>
            </div>

            {/* Verification Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Verification</h3>
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
            <div className="bg-white rounded-xl shadow-sm mb-6 border border-gray-100 overflow-hidden">
              <div className="flex border-b border-gray-100">
                <button 
                  onClick={() => setActiveTab('about')}
                  className={`px-6 py-4 font-medium text-sm uppercase tracking-wider ${activeTab === 'about' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  About
                </button>
                <button 
                  onClick={() => setActiveTab('services')}
                  className={`px-6 py-4 font-medium text-sm uppercase tracking-wider ${activeTab === 'services' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Services
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-4 font-medium text-sm uppercase tracking-wider ${activeTab === 'reviews' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Reviews
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-sm p-8 border border-gray-100 mb-6">
              {activeTab === 'about' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Bio</h3>
                    <p className="text-gray-700 leading-relaxed">{worker.bio}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Experience</h3>
                    <div className="space-y-6">
                      <div className="relative pl-8 pb-6 border-l-2 border-orange-500">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-orange-500 border-2 border-white"></div>
                        <div className="text-gray-900 font-medium">Senior {worker.category.name}</div>
                        <div className="text-sm text-gray-500 mb-2">2018 - Present · 5+ years</div>
                        <p className="text-gray-600">Specialized in high-quality residential and commercial services with focus on customer satisfaction.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-800">Service Packages</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-gray-200 rounded-xl p-6 hover:border-orange-300 transition">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-800">Basic Service</h4>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">$50/hr</span>
                      </div>
                      <ul className="space-y-2 text-gray-600 mb-4">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                          <span>Standard consultation</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                          <span>Basic repairs</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                          <span>1-year warranty</span>
                        </li>
                      </ul>
                      <button className="w-full mt-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
                        Select Package
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6 hover:border-orange-300 transition">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-800">Premium Service</h4>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">$80/hr</span>
                      </div>
                      <ul className="space-y-2 text-gray-600 mb-4">
                        <li className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                          <span>Detailed consultation</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                          <span>Advanced repairs</span>
                        </li>
                        <li className="flex items-center">
                          <FaCheckCircle className="text-green-500 mr-2 text-sm" />
                          <span>3-year warranty</span>
                        </li>
                      </ul>
                      <button className="w-full mt-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                        Select Package
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">Customer Reviews</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            i < Math.floor(averageRating) ? 
                              <FaStar key={i} className="text-amber-400" /> : 
                              <FaRegStar key={i} className="text-amber-400" />
                          ))}
                        </div>
                        <span className="ml-2 text-gray-700">
                          {averageRating.toFixed(1)} from {worker.reviews.length} reviews
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition text-sm font-medium">
                      Leave a Review
                    </button>
                  </div>

                  {worker.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {worker.reviews.map((review) => (
                        <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-800">Customer #{review.customer_id}</h4>
                              <div className="flex items-center mt-1">
                                {[...Array(5)].map((_, i) => (
                                  i < review.rating ? 
                                    <FaStar key={i} className="text-amber-400 text-sm" /> : 
                                    <FaRegStar key={i} className="text-amber-400 text-sm" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(review.created_at).toLocaleDateString('en-US', {
                                year: 'numeric', 
                                month: 'short', 
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfilePage;