import React from 'react'
import { Link } from 'react-router-dom'
import { Car, Users, BarChart } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>TrackMyDrive - Smart Driving School Management Platform</title>
        <meta name="description" content="TrackMyDrive revolutionizes driving education with smart matching, 360-degree feedback, and data-driven progress tracking. Start your journey to becoming a confident driver today!" />
      </Helmet>
      <div className="space-y-12">
        <section className="text-center py-20 bg-gradient-to-r from-uber-black to-uber-gray">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-uber-green">Welcome to TrackMyDrive</h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">Tracking Smart, Driving Smarter</p>
          <Link to="/lesson-scheduling" className="btn-primary text-lg">
            Schedule Your First Lesson
          </Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <Car className="mx-auto mb-4 text-uber-green" size={48} aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2 text-uber-green">Smart Matching</h2>
            <p className="text-gray-300">Find the perfect instructor based on your learning style and preferences.</p>
          </div>
          <div className="card">
            <Users className="mx-auto mb-4 text-uber-green" size={48} aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2 text-uber-green">360-Degree Feedback</h2>
            <p className="text-gray-300">Get comprehensive feedback from instructors and provide your own after each lesson.</p>
          </div>
          <div className="card">
            <BarChart className="mx-auto mb-4 text-uber-green" size={48} aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2 text-uber-green">Data-Driven Progress</h2>
            <p className="text-gray-300">Track your improvement with detailed analytics and personalized insights.</p>
          </div>
        </section>

        <section className="card">
          <h2 className="text-2xl font-bold mb-4 text-uber-green">Why Choose TrackMyDrive?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Real-time lesson scheduling and tracking</li>
            <li>Gamification to make learning more engaging</li>
            <li>AR-based pre-drive lessons for enhanced learning</li>
            <li>Automated test booking integrated with local DMV systems</li>
            <li>Vehicle health monitoring for safer driving experiences</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Home