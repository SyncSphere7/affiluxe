import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './style.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <span className="text-xl font-bold">Affiluxe</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/marketplace" className="text-gray-700 hover:text-gray-900">Marketplace</Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
              <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Login</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Affiluxe</h1>
      <p className="text-xl text-gray-600">Your Premier Affiliate Marketing Network</p>
    </div>
  )
}

function Marketplace() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
      <p>Browse available affiliate programs</p>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p>View your affiliate statistics and earnings</p>
    </div>
  )
}

function Login() {
  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label className="block text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Sign In
        </button>
      </form>
    </div>
  )
}

export default App