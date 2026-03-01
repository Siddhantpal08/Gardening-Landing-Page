import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import About from './components/About/About'
import PlantShowcase from './components/PlantShowcase/PlantShowcase'
import Testimonials from './components/Testimonials/Testimonials'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
    // Intersection Observer for scroll reveals
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const revealElements = document.querySelectorAll('.reveal')
        revealElements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <Features />
                <About />
                <PlantShowcase />
                <Testimonials />
                <Newsletter />
            </main>
            <Footer />
        </div>
    )
}

export default App
