import React, { useState } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProgramDetails from './components/ProgramDetails'
import ApplicationForm from './components/ApplicationForm'
import ApplicationPage from './components/ApplicationPage'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Header onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <div key="home" style={{ animation: 'fadeSlideIn 0.4s ease' }}>
            <HeroSection />
            <ProgramDetails />
            <ApplicationForm onNavigate={setCurrentPage} />
          </div>
        ) : (
          <div key="apply" style={{ animation: 'fadeSlideIn 0.4s ease' }}>
            <ApplicationPage onNavigate={setCurrentPage} />
          </div>
        )}
      </main>
      <Footer />
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </>
  )
}

export default App
