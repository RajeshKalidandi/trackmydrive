import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Car, Menu, X, LogIn, UserPlus, LogOut } from 'lucide-react'

interface HeaderProps {
  userType: 'learner' | 'instructor' | null
  onLogout: () => void
}

const Header: React.FC<HeaderProps> = ({ userType, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-uber-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Car size={32} className="text-uber-green" aria-hidden="true" />
            <span className="text-xl font-bold">TrackMyDrive</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {userType === 'learner' && (
              <>
                <Link to="/dashboard" className="hover:text-uber-green transition duration-300">Dashboard</Link>
                <Link to="/lesson-scheduling" className="hover:text-uber-green transition duration-300">Schedule</Link>
                <Link to="/progress-tracking" className="hover:text-uber-green transition duration-300">Progress</Link>
              </>
            )}
            {userType === 'instructor' && (
              <>
                <Link to="/dashboard" className="hover:text-uber-green transition duration-300">Dashboard</Link>
                <Link to="/instructor-schedule" className="hover:text-uber-green transition duration-300">Schedule</Link>
                <Link to="/student-progress" className="hover:text-uber-green transition duration-300">Student Progress</Link>
              </>
            )}
            {userType ? (
              <button onClick={onLogout} className="flex items-center hover:text-uber-green transition duration-300">
                <LogOut size={20} className="mr-1" aria-hidden="true" />
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="flex items-center hover:text-uber-green transition duration-300">
                  <LogIn size={20} className="mr-1" aria-hidden="true" />
                  Login
                </Link>
                <Link to="/register" className="flex items-center hover:text-uber-green transition duration-300">
                  <UserPlus size={20} className="mr-1" aria-hidden="true" />
                  Register
                </Link>
              </>
            )}
          </nav>
          <button className="md:hidden text-uber-green" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            {/* ... (rest of the mobile menu code remains the same) ... */}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header