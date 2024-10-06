import React from 'react'
import { Car, Users, Award } from 'lucide-react'

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-uber-green">About TrackMyDrive</h1>
      
      <div className="space-y-6">
        <p className="text-gray-300">
          TrackMyDrive is a cutting-edge driving school management platform designed to revolutionize the way driving education is delivered and tracked. Our mission is to create safer roads by empowering learners with comprehensive, data-driven training and providing instructors with powerful tools to enhance their teaching methods.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <Car className="text-uber-green mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-uber-green">Smart Learning</h3>
            <p className="text-gray-300">Personalized learning paths adapting to each student's progress and needs.</p>
          </div>
          <div className="card">
            <Users className="text-uber-green mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-uber-green">Expert Instructors</h3>
            <p className="text-gray-300">A network of certified and experienced driving instructors committed to your success.</p>
          </div>
          <div className="card">
            <Award className="text-uber-green mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2 text-uber-green">Proven Results</h3>
            <p className="text-gray-300">Higher pass rates and more confident drivers through our comprehensive approach.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">Our Story</h2>
        <p className="text-gray-300">
          Founded in 2023, TrackMyDrive was born from a passion for road safety and a vision to modernize driving education. Our team of tech enthusiasts and experienced driving instructors came together to create a platform that bridges the gap between traditional driving lessons and modern technology.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4 text-uber-green">Our Vision</h2>
        <p className="text-gray-300">
          We envision a world where every new driver is equipped with the skills, knowledge, and confidence to navigate roads safely. Through continuous innovation and data-driven insights, we're committed to raising the standard of driving education globally.
        </p>
      </div>
    </div>
  )
}

export default AboutUs