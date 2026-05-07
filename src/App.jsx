import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Scholastics from './components/Scholastics'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Expertise />
        <Projects />
        <Achievements />
        <Scholastics />
        <Contact />
      </main>
    </>
  )
}

export default App
