import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Scholastics from './components/Scholastics'
import Contact from './components/Contact'
import About from './components/About'
import Experience from './components/Experience'
import Login from './components/Admin/Login'
import Dashboard from './components/Admin/Dashboard'
import ProtectedRoute from './components/Admin/ProtectedRoute'

const Portfolio = () => (
  <div className="bg-bg-main selection:bg-accent/30 selection:text-white">
    <Navbar />
    <main className="pt-20">
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Scholastics />
      <Contact />
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.1)',
            fontFamily: 'monospace',
            fontSize: '12px'
          }
        }} 
      />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  )
}

export default App
