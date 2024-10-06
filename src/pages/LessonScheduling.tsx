import React, { useState } from 'react'
import { Calendar, Clock, MapPin, User } from 'lucide-react'

const LessonScheduling: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [selectedLocation, setSelectedLocation] = useState<string>('')
  const [selectedInstructor, setSelectedInstructor] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ selectedDate, selectedTime, selectedLocation, selectedInstructor })
    alert('Lesson scheduled successfully!')
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-uber-green">Schedule a Lesson</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
            <Calendar className="inline-block mr-2 text-uber-green" size={16} />
            Select Date
          </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="input-field w-full"
            required
          />
        </div>

        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
            <Clock className="inline-block mr-2 text-uber-green" size={16} />
            Select Time
          </label>
          <select
            id="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="input-field w-full"
            required
          >
            <option value="">Choose a time</option>
            <option value="09:00">09:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="13:00">01:00 PM</option>
            <option value="15:00">03:00 PM</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-1">
            <MapPin className="inline-block mr-2 text-uber-green" size={16} />
            Select Location
          </label>
          <select
            id="location"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="input-field w-full"
            required
          >
            <option value="">Choose a location</option>
            <option value="city-center">City Center</option>
            <option value="suburban-area">Suburban Area</option>
            <option value="highway">Highway</option>
            <option value="parking-lot">Parking Lot</option>
          </select>
        </div>

        <div>
          <label htmlFor="instructor" className="block text-sm font-medium text-gray-300 mb-1">
            <User className="inline-block mr-2 text-uber-green" size={16} />
            Select Instructor
          </label>
          <select
            id="instructor"
            value={selectedInstructor}
            onChange={(e) => setSelectedInstructor(e.target.value)}
            className="input-field w-full"
            required
          >
            <option value="">Choose an instructor</option>
            <option value="john-doe">John Doe</option>
            <option value="jane-smith">Jane Smith</option>
            <option value="mike-johnson">Mike Johnson</option>
          </select>
        </div>

        <button
          type="submit"
          className="btn-primary w-full"
        >
          Schedule Lesson
        </button>
      </form>
    </div>
  )
}

export default LessonScheduling