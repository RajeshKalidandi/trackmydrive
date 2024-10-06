import React from 'react'
import { Users, Clock, Star, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const InstructorDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-uber-green">Instructor Dashboard</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <Users className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Active Students</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">15</p>
        </div>
        <div className="card p-4">
          <Clock className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Hours This Week</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">32.5</p>
        </div>
        <div className="card p-4">
          <Star className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Average Rating</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">4.8</p>
        </div>
        <div className="card p-4">
          <Calendar className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Upcoming Lessons</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">7</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-uber-green">Today's Schedule</h2>
        <ul className="space-y-4">
          <li className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="bg-gray-700 p-2 rounded-full mr-4 mb-2 sm:mb-0">
              <Clock className="text-uber-green" size={20} />
            </div>
            <div className="flex-grow mb-2 sm:mb-0">
              <p className="font-semibold">9:00 AM - 10:30 AM</p>
              <p className="text-sm text-gray-400">City Driving with Sarah M.</p>
            </div>
            <button className="btn-secondary w-full sm:w-auto">View Details</button>
          </li>
          <li className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="bg-gray-700 p-2 rounded-full mr-4 mb-2 sm:mb-0">
              <Clock className="text-uber-green" size={20} />
            </div>
            <div className="flex-grow mb-2 sm:mb-0">
              <p className="font-semibold">11:00 AM - 12:30 PM</p>
              <p className="text-sm text-gray-400">Highway Driving with Alex K.</p>
            </div>
            <button className="btn-secondary w-full sm:w-auto">View Details</button>
          </li>
          <li className="flex flex-col sm:flex-row items-start sm:items-center">
            <div className="bg-gray-700 p-2 rounded-full mr-4 mb-2 sm:mb-0">
              <Clock className="text-uber-green" size={20} />
            </div>
            <div className="flex-grow mb-2 sm:mb-0">
              <p className="font-semibold">2:00 PM - 3:30 PM</p>
              <p className="text-sm text-gray-400">Parking Practice with Emily R.</p>
            </div>
            <button className="btn-secondary w-full sm:w-auto">View Details</button>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/instructor-schedule" className="btn-primary w-full sm:w-auto text-center">Manage Schedule</Link>
        <Link to="/student-progress" className="btn-secondary w-full sm:w-auto text-center">View Student Progress</Link>
      </div>
    </div>
  )
}

export default InstructorDashboard