import HomePage from "./components/Content/HomePage";
import Contact from "./components/Content/Contact";
import About from "./components/Content/About";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import WorkersPage from "./components/workers/WorkersPage";
import WorkerProfile from "./components/workers/WorkerProfile";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import React, { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import DashboardPage from "./components/workers/DashboardPage";
import JobRequestsPage from "./components/workers/JobRequestsPage";
import WorkerProfilePage from "./components/workers/WorkerProfilePage";
import MessagesPage from "./components/Message/messagesPage";
import ChatPage from "./components/Message/ChatPage";
import NotFoundPage from "./NotFoundPage";
import UserDashboardPage from "./components/Clients/UserDashboardPage";


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div>
      <Routes>
        {/* Public routes with layout */}
        <Route element={
          <>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="flex-grow">
              <Outlet />
            </div>
            <Footer />
          </>
        }>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/workers" element={<WorkersPage />} />
          <Route path="/worker/job-requests" element={<JobRequestsPage />} />
          <Route path="/worker/:id" element={<WorkerProfilePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/messages/:conversationId" element={<ChatPage />} />
          
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user-dashboard" element={<UserDashboardPage />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>

          </Route>
        </Route>

        {/* Auth routes without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        {/* 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;