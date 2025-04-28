const AuthForm = ({ type, onSubmit }) => {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#1E293B] mb-6 text-center">
          {type === 'login' ? 'Login' : 'Sign Up'}
        </h2>
        
        <form onSubmit={onSubmit}>
          {type === 'signup' && (
            <div className="mb-4">
              <label className="block text-[#1E293B] mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
                required
              />
            </div>
          )}
  
          <div className="mb-4">
            <label className="block text-[#1E293B] mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              required
            />
          </div>
  
          <div className="mb-6">
            <label className="block text-[#1E293B] mb-2">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#F97316]"
              required
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-3 rounded-lg font-semibold transition"
          >
            {type === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>
  
        <div className="mt-6 text-center">
          <p className="text-[#1E293B]">
            {type === 'login' 
              ? "Don't have an account? " 
              : "Already have an account? "}
            <a 
              href={type === 'login' ? '/signup' : '/login'} 
              className="text-[#1E40AF] hover:text-[#1E3A8A] font-medium"
            >
              {type === 'login' ? 'Sign up' : 'Login'}
            </a>
          </p>
        </div>
      </div>
    );
  };

export default AuthForm;