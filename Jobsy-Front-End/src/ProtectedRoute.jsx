// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useAuth } from './components/auth/AuthContext';


const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Your auth context/hook

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;