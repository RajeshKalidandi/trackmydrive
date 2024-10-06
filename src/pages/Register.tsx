import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { User, Lock, Mail, UserPlus } from 'lucide-react'

const Register: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userType, setUserType] = useState('learner')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    console.log('Register:', { name, email, password, userType })
    // TODO: Implement actual registration logic
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-uber-green text-center">Register</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            <User className="inline-block mr-2 text-uber-green" size={16} />
            Full Name
          </label>
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
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            <Mail className="inline-block mr-2 text-uber-green" size={16} />
            Email
          </label>
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
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
            <Lock className="inline-block mr-2 text-uber-green" size={16} />
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
            <Lock className="inline-block mr-2 text-uber-green" size={16} />
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input-field w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">User Type</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="learner"
                checked={userType === 'learner'}
                onChange={() => setUserType('learner')}
                className="form-radio text-uber-green"
              />
              <span className="ml-2">Learner</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="instructor"
                checked={userType === 'instructor'}
                onChange={() => setUserType('instructor')}
                className="form-radio text-uber-green"
              />
              <span className="ml-2">Instructor</span>
            </label>
          </div>
        </div>
        <button type="submit" className="btn-primary w-full">
          Register
        </button>
      </form>
      <p className="mt-4 text-center text-gray-400">
        Already have an account?{' '}
        <Link to="/login" className="text-uber-green hover:underline">
          Login here
        </Link>
      </p>
    </div>
  )
}

export default Register