import React from 'react'
import { TrendingUp, Award, Clock, Star } from 'lucide-react'

const ProgressTracking: React.FC = () => {
  const skills = [
    { name: 'City Driving', progress: 85 },
    { name: 'Highway Driving', progress: 70 },
    { name: 'Parking', progress: 90 },
    { name: 'Night Driving', progress: 60 },
    { name: 'Defensive Driving', progress: 75 },
  ]

  const recentLessons = [
    { date: '2023-05-15', topic: 'Highway Driving', duration: '1.5 hours', rating: 4.5 },
    { date: '2023-05-12', topic: 'Parallel Parking', duration: '1 hour', rating: 5 },
    { date: '2023-05-08', topic: 'City Navigation', duration: '2 hours', rating: 4 },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-uber-green">Your Progress</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <TrendingUp className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Overall Progress</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">76%</p>
        </div>
        <div className="card p-4">
          <Award className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Skills Mastered</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">3/5</p>
        </div>
        <div className="card p-4">
          <Clock className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Total Hours</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">24.5</p>
        </div>
        <div className="card p-4">
          <Star className="text-uber-green mb-2" size={24} />
          <h3 className="text-sm md:text-lg font-semibold mb-1">Average Rating</h3>
          <p className="text-xl md:text-2xl font-bold text-uber-green">4.5</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-uber-green">Skill Breakdown</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-uber-green bg-gray-700">
                    {skill.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-uber-green">
                    {skill.progress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                <div style={{ width: `${skill.progress}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-uber-green"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4 text-uber-green">Recent Lessons</h2>
        <table className="min-w-full table-auto">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-uber-green">Date</th>
              <th className="px-4 py-2 text-left text-uber-green">Topic</th>
              <th className="px-4 py-2 text-left text-uber-green">Duration</th>
              <th className="px-4 py-2 text-left text-uber-green">Rating</th>
            </tr>
          </thead>
          <tbody>
            {recentLessons.map((lesson, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : ''}>
                <td className="px-4 py-2">{lesson.date}</td>
                <td className="px-4 py-2">{lesson.topic}</td>
                <td className="px-4 py-2">{lesson.duration}</td>
                <td className="px-4 py-2">
                  <div className="flex items-center">
                    <Star className="text-uber-green mr-1" size={16} />
                    <span>{lesson.rating}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4 text-uber-green">Instructor Feedback</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-uber-green pl-4">
            <p className="text-gray-300 italic">"Great improvement in city driving skills. Handles traffic and intersections with confidence."</p>
            <p className="text-sm text-gray-400 mt-2">- John Doe, Senior Instructor</p>
          </div>
          <div className="border-l-4 border-uber-green pl-4">
            <p className="text-gray-300 italic">"Excellent progress in highway driving. Maintains proper speed and distance, with smooth lane changes."</p>
            <p className="text-sm text-gray-400 mt-2">- Jane Smith, Highway Specialist</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTracking