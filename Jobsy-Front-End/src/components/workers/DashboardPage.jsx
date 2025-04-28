// pages/DashboardPage.jsx
import { useState } from 'react';
import { FaEdit, FaCheck, FaTimes, FaBell, FaChartLine, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock data
  const profile = {
    name: "Ahmed Ali",
    category: "Electrician",
    description: "Professional electrician with 8 years experience",
    rate: "$50/hour"
  };
  
  const jobRequests = [
    { id: 1, client: "Marie D.", service: "Wiring repair", date: "2023-06-15", status: "pending" },
    { id: 2, client: "Jean P.", service: "Light installation", date: "2023-06-10", status: "accepted" }
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-[#1E293B] mb-8">Worker Dashboard</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex flex-col items-center mb-6">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt={profile.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-[#F97316] mb-3"
                />
                <h2 className="text-xl font-bold text-[#1E293B]">{profile.name}</h2>
                <p className="text-[#64748B]">{profile.category}</p>
              </div>
              
              <nav className="space-y-2">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'profile' ? 'bg-[#E0F2FE] text-[#1E40AF]' : 'hover:bg-gray-100'}`}
                >
                  <FaUser className="mr-3" />
                  My Profile
                </button>
                <button
                  onClick={() => setActiveTab('jobs')}
                  className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'jobs' ? 'bg-[#E0F2FE] text-[#1E40AF]' : 'hover:bg-gray-100'}`}
                >
                  <FaBell className="mr-3" />
                  Job Requests
                </button>
                <button
                  onClick={() => setActiveTab('stats')}
                  className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'stats' ? 'bg-[#E0F2FE] text-[#1E40AF]' : 'hover:bg-gray-100'}`}
                >
                  <FaChartLine className="mr-3" />
                  Statistics
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-[#1E293B]">Profile Information</h2>
                  <button 
                    onClick={() => setIsEditing(!isEditing)}
                    className="flex items-center text-[#1E40AF] hover:text-[#1E3A8A]"
                  >
                    <FaEdit className="mr-2" />
                    {isEditing ? 'Cancel' : 'Edit'}
                  </button>
                </div>
                
                {isEditing ? (
                  <form className="space-y-4">
                    <div>
                      <label className="block text-[#1E293B] mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue={profile.name}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1E293B] mb-2">Service Category</label>
                      <select className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]">
                        <option>Electrician</option>
                        <option>Plumber</option>
                        <option>Cleaner</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#1E293B] mb-2">Hourly Rate</label>
                      <input
                        type="text"
                        defaultValue={profile.rate}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1E293B] mb-2">Description</label>
                      <textarea
                        rows="4"
                        defaultValue={profile.description}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                      ></textarea>
                    </div>
                    <button
                      type="button"
                      className="bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-2 rounded-md font-medium transition"
                    >
                      Save Changes
                    </button>
                  </form>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600">Name</p>
                      <p className="text-[#1E293B] font-medium">{profile.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Service Category</p>
                      <p className="text-[#1E293B] font-medium">{profile.category}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Hourly Rate</p>
                      <p className="text-[#1E293B] font-medium">{profile.rate}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Description</p>
                      <p className="text-[#1E293B]">{profile.description}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'jobs' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold text-[#1E293B]">Job Requests</h2>
                      <Link 
                        to="/worker/job-requests"
                        className="text-[#1E40AF] hover:text-[#1E3A8A] font-medium flex items-center"
                      >
                        View All Job Requests
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                
                <div className="space-y-4">
                  {jobRequests.map((job) => (
                    <div key={job.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-[#1E293B]">{job.client}</h3>
                        <span className={`px-2 py-1 rounded text-xs ${
                          job.status === 'accepted' ? 'bg-green-100 text-green-800' : 
                          job.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {job.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{job.service}</p>
                      <p className="text-sm text-gray-500 mb-3">Requested for: {job.date}</p>
                      {job.status === 'pending' && (
                        <div className="flex space-x-2">
                          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">
                            <FaCheck className="mr-1" /> Accept
                          </button>
                          <button className="flex items-center bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                            <FaTimes className="mr-1" /> Decline
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'stats' && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-[#1E293B] mb-6">Statistics</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-[#E0F2FE] p-4 rounded-lg">
                    <p className="text-3xl font-bold text-[#1E40AF] mb-2">24</p>
                    <p className="text-gray-600">Completed Jobs</p>
                  </div>
                  <div className="bg-[#FEE2E2] p-4 rounded-lg">
                    <p className="text-3xl font-bold text-[#DC2626] mb-2">4.8</p>
                    <p className="text-gray-600">Average Rating</p>
                  </div>
                  <div className="bg-[#DCFCE7] p-4 rounded-lg">
                    <p className="text-3xl font-bold text-[#16A34A] mb-2">$1,240</p>
                    <p className="text-gray-600">Earnings</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;