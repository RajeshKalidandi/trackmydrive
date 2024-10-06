import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact form submitted:', { name, email, message })
    // TODO: Implement actual form submission logic
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-uber-green">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <p className="text-gray-300">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-uber-green mr-4" size={24} />
              <span className="text-gray-300">support@trackmydrive.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-uber-green mr-4" size={24} />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-uber-green mr-4" size={24} />
              <span className="text-gray-300">123 Driving Lane, Car City, DR 12345</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field w-full"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input-field w-full h-32"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary w-full flex items-center justify-center">
            <Send className="mr-2" size={20} />
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact