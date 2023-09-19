// Routes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// Components
import React from 'react'
import Navbar from './Navbar'
import ProjectBox from './ProjectBox'
import Footer from './Footer'

// CSS
import './styles.css'

// Images
import wepaImage from './images/WEPA.png'
import snekImage from './images/Snek.png'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <div id="main">
                <div className="inner">
                  <div className="thumbnails">
                    <ProjectBox
                      link="https://www.labcrabs.com"
                      imageSrc={wepaImage}
                      altText="WEPA Tracker"
                      title="WEPAnow Cloud-Printing Tracker"
                      description="A real world use application designed for and used daily by the NMSU ICT department. It automates the manual process of inspecting our NMSU Main Campus WEPAnow cloud-based printers."
                    />

                    <ProjectBox
                      link="/snakeGame"
                      imageSrc={snekImage}
                      altText="Snek"
                      title="Snake Game"
                      description="A retro inspired snake game built with HTML5, CSS3, and JavaScript. It uses conditional statements to power self and wall collisions, dynamic speed & growth progression, and event listeners to trigger sounds."
                    />
                  </div>
                </div>
              </div>
            }
          />

          {/* Snake Game Route */}
          <Route path="/snakeGame" element={<SnakeGamePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

// Placeholder for SnakeGamePage
function SnakeGamePage() {
  return <div>This will be the Snake Game page!</div>;
}

export default App
