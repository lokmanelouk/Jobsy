import { useState } from 'react';
import { FaFilter, FaSearch, FaClock, FaCheck, FaTimes } from 'react-icons/fa';

const JobRequestsPage = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data - replace with API call
  const jobRequests = [
    { id: 1, client: "Marie D.", service: "Wiring repair", date: "2023-06-15", status: "pending" },
    { id: 2, client: "Jean P.", service: "Light installation", date: "2023-06-10", status: "accepted" },
    { id: 3, client: "Sophie M.", service: "Electrical inspection", date: "2023-06-05", status: "rejected" },
    { id: 4, client: "Thomas L.", service: "Outlet installation", date: "2023-05-28", status: "accepted" }
  ];

  const filteredJobs = jobRequests.filter(job => {
    const matchesStatus = statusFilter === 'all' || job.status === statusFilter;
    const matchesSearch = job.client.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.service.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#1E293B]">Job Requests</h1>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Status Filter */}
            <div>
              <label className="block text-[#1E293B] mb-2">Filter by Status</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaFilter className="text-gray-400" />
                </div>
                <select
                  className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                </select>
              </div>
            </div>

            {/* Search */}
            <div>
              <label className="block text-[#1E293B] mb-2">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search clients or services..."
                  className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Job Requests List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="p-6 hover:bg-gray-50 transition">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="font-semibold text-[#1E293B]">{job.service}</h3>
                      <p className="text-gray-600">Client: {job.client}</p>
                      <p className="text-sm text-gray-500">Requested: {job.date}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        job.status === 'accepted' ? 'bg-green-100 text-green-800' :
                        job.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {job.status === 'pending' && <FaClock className="inline mr-1" />}
                        {job.status === 'accepted' && <FaCheck className="inline mr-1" />}
                        {job.status === 'rejected' && <FaTimes className="inline mr-1" />}
                        {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                      </span>
                      <button className="text-[#1E40AF] hover:text-[#1E3A8A] font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-gray-500">
                No job requests found matching your criteria
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobRequestsPage;