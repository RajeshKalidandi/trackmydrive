import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import LearnerDashboard from './pages/LearnerDashboard'
import InstructorDashboard from './pages/InstructorDashboard'
import LessonScheduling from './pages/LessonScheduling'
import ProgressTracking from './pages/ProgressTracking'
import Login from './pages/Login'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function App() {
  const [userType, setUserType] = useState<'learner' | 'instructor' | null>(null)

  const handleLogin = (type: 'learner' | 'instructor') => {
    setUserType(type)
  }

  const handleLogout = () => {
    setUserType(null)
  }

  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-900">
          <Header userType={userType} onLogout={handleLogout} />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route 
                path="/dashboard" 
                element={
                  userType === 'learner' ? <LearnerDashboard /> :
                  userType === 'instructor' ? <InstructorDashboard /> :
                  <Navigate to="/login" replace />
                } 
              />
              <Route 
                path="/lesson-scheduling" 
                element={userType === 'learner' ? <LessonScheduling /> : <Navigate to="/login" replace />} 
              />
              <Route 
                path="/progress-tracking" 
                element={userType === 'learner' ? <ProgressTracking /> : <Navigate to="/login" replace />} 
              />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App