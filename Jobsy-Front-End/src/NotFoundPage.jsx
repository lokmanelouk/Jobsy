import { Link } from 'react-router-dom';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-4">
      <div className="max-w-md text-center">
        <div className="text-8xl text-[#F97316] mb-4">
          <FaExclamationTriangle className="inline" />
        </div>
        <h1 className="text-4xl font-bold text-[#1E293B] mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-[#1E40AF] hover:bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-medium transition"
        >
          <FaHome className="mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;