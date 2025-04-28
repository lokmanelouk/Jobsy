import { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? 'Login' : 'Signup', 'submitted');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-6 py-2 font-medium ${isLogin ? 'bg-[#1E293B] text-white' : 'text-[#1E293B]'}`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-6 py-2 font-medium ${!isLogin ? 'bg-[#1E293B] text-white' : 'text-[#1E293B]'}`}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <AuthForm type="login" onSubmit={handleSubmit} />
        ) : (
          <AuthForm type="signup" onSubmit={handleSubmit} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;