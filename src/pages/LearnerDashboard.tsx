import React from 'react'
import { Calendar, Clock, TrendingUp, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const LearnerDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-uber-green">Learner Dashboard</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <Calendar className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Upcoming Lessons</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">3</p>
        </div>
        <div className="card p-4">
          <Clock className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Total Hours</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">24.5</p>
        </div>
        <div className="card p-4">
          <TrendingUp className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Progress</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">75%</p>
        </div>
        <div className="card p-4">
          <Award className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Achievements</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">12</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-uber-green">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="bg-gray-700 p-2 rounded-full mr-4">
              <Calendar className="text-uber-green" size={20} />
            </div>
            <div className="flex-grow">
              <p className="font-semibold">Lesson Completed</p>
              <p className="text-sm text-gray-400">Highway Driving with Instructor John</p>
            </div>
            <span className="text-sm text-gray-400">2 days ago</span>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-700 p-2 rounded-full mr-4">
              <Award className="text-uber-green" size={20} />
            </div>
            <div className="flex-grow">
              <p className="font-semibold">Achievement Unlocked</p>
              <p className="text-sm text-gray-400">Perfect Parallel Parking</p>
            </div>
            <span className="text-sm text-gray-400">1 week ago</span>
          </li>
          <li className="flex items-center">
            <div className="bg-gray-700 p-2 rounded-full mr-4">
              <TrendingUp className="text-uber-green" size={20} />
            </div>
            <div className="flex-grow">
              <p className="font-semibold">Progress Update</p>
              <p className="text-sm text-gray-400">Reached 75% overall progress</p>
            </div>
            <span className="text-sm text-gray-400">2 weeks ago</span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/lesson-scheduling" className="btn-primary w-full sm:w-auto text-center">Schedule Lesson</Link>
        <Link to="/progress-tracking" className="btn-secondary w-full sm:w-auto text-center">View Progress</Link>
      </div>
    </div>
  )
}

export default LearnerDashboard