import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaClock, FaCheck, FaTimes, FaTools, FaComments, FaEdit, FaSave, FaTimesCircle, FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserDashboardPage = () => {
  // State for user data and editing mode
  const [user, setUser] = useState({
    name: "Jean Dupont",
    email: "jean@example.com",
    phone: "+33 6 12 34 56 78",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    jobRequests: [
      {
        id: 1,
        workerName: "Ahmed Ali",
        service: "Electrical Wiring",
        date: "2023-06-15",
        status: "accepted",
        workerId: 123
      },
      {
        id: 2,
        workerName: "Marie Curie",
        service: "Plumbing Repair",
        date: "2023-06-10",
        status: "pending",
        workerId: 456
      },
      {
        id: 3,
        workerName: "Pierre Blanc",
        service: "Painting Service",
        date: "2023-05-28",
        status: "rejected",
        workerId: 789
      }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({...user});
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleEditClick = () => {
    setEditedUser({...user});
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveProfile = () => {
    setUser({
      ...editedUser,
      avatar: previewImage || user.avatar
    });
    setIsEditing(false);
    setSelectedFile(null);
    setPreviewImage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({...editedUser, [name]: value});
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#1E293B] mb-8">My Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#1E293B] flex items-center">
                <FaUser className="mr-2 text-[#1E40AF]" />
                Profile Information
              </h2>
              {!isEditing ? (
                <button 
                  onClick={handleEditClick}
                  className="text-[#1E40AF] hover:text-[#1E3A8A] flex items-center"
                >
                  <FaEdit className="mr-1" /> Edit
                </button>
              ) : (
                <div className="flex space-x-2">
                  <button 
                    onClick={handleSaveProfile}
                    className="text-green-600 hover:text-green-800 flex items-center"
                  >
                    <FaSave className="mr-1" /> Save
                  </button>
                  <button 
                    onClick={handleCancelEdit}
                    className="text-red-600 hover:text-red-800 flex items-center"
                  >
                    <FaTimesCircle className="mr-1" /> Cancel
                  </button>
                </div>
              )}
            </div>
            
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <img
                    src={previewImage || user.avatar}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#1E40AF]"
                  />
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-md cursor-pointer">
                      <FaCamera className="text-[#1E40AF]" />
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
              </div>
              
              {/* Editable Fields */}
              <div>
                <label className="block text-gray-500 text-sm mb-1">Full Name</label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={editedUser.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                ) : (
                  <p className="text-[#1E293B] font-medium">{user.name}</p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-500 text-sm mb-1">Email</label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={editedUser.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                ) : (
                  <p className="text-[#1E293B] font-medium flex items-center">
                    <FaEnvelope className="mr-2 text-[#1E40AF]" />
                    {user.email}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-gray-500 text-sm mb-1">Phone</label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={editedUser.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  />
                ) : (
                  <p className="text-[#1E293B] font-medium flex items-center">
                    <FaPhone className="mr-2 text-[#1E40AF]" />
                    {user.phone}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Job Requests */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-[#1E293B] mb-6 flex items-center">
              <FaTools className="mr-2 text-[#1E40AF]" />
              My Job Requests
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Worker</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {user.jobRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                            <img 
                              className="h-full w-full object-cover"
                              src={`https://i.pravatar.cc/150?img=${request.workerId}`}
                              alt={request.workerName}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-[#1E293B]">{request.workerName}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-[#1E293B]">{request.service}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{request.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          request.status === 'accepted' ? 'bg-green-100 text-green-800' :
                          request.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {request.status === 'pending' && <FaClock className="inline mr-1" />}
                          {request.status === 'accepted' && <FaCheck className="inline mr-1" />}
                          {request.status === 'rejected' && <FaTimes className="inline mr-1" />}
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <Link 
                          to={`/messages/${request.workerId}`}
                          className="text-[#1E40AF] hover:text-[#1E3A8A] flex items-center"
                        >
                          <FaComments className="mr-1" /> Message
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;