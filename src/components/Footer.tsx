import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-uber-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-uber-green">TrackMyDrive</h3>
            <p className="text-sm">Tracking Smart, Driving Smarter</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-uber-green">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li><Link to="/about" className="hover:text-uber-green transition duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-uber-green transition duration-300">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-uber-green transition duration-300">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-uber-green transition duration-300">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2 text-uber-green">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-uber-green transition duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-uber-green transition duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-uber-green transition duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
          &copy; {new Date().getFullYear()} TrackMyDrive. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer