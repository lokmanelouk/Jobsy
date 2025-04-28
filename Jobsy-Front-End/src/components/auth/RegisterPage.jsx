import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaUserTie, FaTools, FaBriefcase, FaMoneyBillAlt } from 'react-icons/fa';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    // Worker-specific fields (initially empty)
    profession: '',
    experience: '',
    hourlyRate: '',
    skills: [],
    bio: ''
  });

  const [currentSkill, setCurrentSkill] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Add registration logic here
  };

  const addSkill = () => {
    if (currentSkill && !formData.skills.includes(currentSkill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, currentSkill]
      });
      setCurrentSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#1E293B] mb-6">
          Create Account
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Basic Fields (for all users) */}
          <div>
            <label className="block text-[#1E293B] mb-2">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[#1E293B] mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>
              <input
                type="email"
                className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-[#1E293B] mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                required
                minLength="6"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>
          </div>
          
          {/* Role Selection */}
          <div>
            <label className="block text-[#1E293B] mb-2">I am a</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className={`flex items-center justify-center p-3 rounded-md border ${formData.role === 'user' ? 'border-[#F97316] bg-orange-50' : 'border-gray-300'}`}
                onClick={() => setFormData({...formData, role: 'user'})}
              >
                <FaUser className="mr-2" />
                Customer
              </button>
              <button
                type="button"
                className={`flex items-center justify-center p-3 rounded-md border ${formData.role === 'worker' ? 'border-[#F97316] bg-orange-50' : 'border-gray-300'}`}
                onClick={() => setFormData({...formData, role: 'worker'})}
              >
                <FaUserTie className="mr-2" />
                Worker
              </button>
            </div>
          </div>
          
          {/* Worker-Specific Fields (Conditional) */}
          {formData.role === 'worker' && (
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-[#1E293B] mb-2">Profession</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaTools className="text-gray-400" />
                  </div>
                  <select
                    className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    value={formData.profession}
                    onChange={(e) => setFormData({...formData, profession: e.target.value})}
                    required
                  >
                    <option value="">Select your profession</option>
                    <option value="Electrician">Electrician</option>
                    <option value="Plumber">Plumber</option>
                    <option value="Cleaner">Cleaner</option>
                    <option value="Handyman">Handyman</option>
                    <option value="Painter">Painter</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-[#1E293B] mb-2">Years of Experience</label>
                <input
                  type="number"
                  min="0"
                  max="50"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  required
                />
              </div>
              
              <div>
                <label className="block text-[#1E293B] mb-2">Hourly Rate ($)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaMoneyBillAlt className="text-gray-400" />
                  </div>
                  <input
                    type="number"
                    min="5"
                    className="w-full pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    value={formData.hourlyRate}
                    onChange={(e) => setFormData({...formData, hourlyRate: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-[#1E293B] mb-2">Skills</label>
                <div className="flex mb-2">
                  <input
                    type="text"
                    className="flex-grow p-3 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                    placeholder="Add a skill"
                    value={currentSkill}
                    onChange={(e) => setCurrentSkill(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-4 py-3 rounded-r"
                    onClick={addSkill}
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-[#E0F2FE] text-[#1E40AF] px-3 py-1 rounded-full text-sm flex items-center"
                    >
                      {skill}
                      <button 
                        type="button"
                        className="ml-1 text-red-500"
                        onClick={() => removeSkill(skill)}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-[#1E293B] mb-2">Bio/Description</label>
                <textarea
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                  placeholder="Tell clients about your experience and skills..."
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                ></textarea>
              </div>
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-lg font-semibold transition mt-4"
          >
            Register
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-[#1E293B]">
            Already have an account?{' '}
            <Link to="/login" className="text-[#1E40AF] hover:text-[#1E3A8A] font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;