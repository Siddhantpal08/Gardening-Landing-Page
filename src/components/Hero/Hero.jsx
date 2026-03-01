import { useState, useEffect, useRef } from 'react'
import './Hero.css'

const heroWords = ['Beautiful', 'Thriving', 'Lush', 'Vibrant']

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0)
    const [fade, setFade] = useState(true)
    const statsRef = useRef(null)
    const [countersStarted, setCountersStarted] = useState(false)
    const [counts, setCounts] = useState({ gardens: 0, plants: 0, members: 0 })

    // Word cycling animation
    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setWordIndex((i) => (i + 1) % heroWords.length)
                setFade(true)
            }, 400)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    // Counter animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !countersStarted) {
                    setCountersStarted(true)
                    animateCounter('gardens', 12000)
                    animateCounter('plants', 500)
                    animateCounter('members', 98)
                }
            },
            { threshold: 0.5 }
        )
        if (statsRef.current) observer.observe(statsRef.current)
        return () => observer.disconnect()
    }, [countersStarted])

    const animateCounter = (key, target) => {
        let start = 0
        const duration = 1800
        const step = target / (duration / 16)
        const timer = setInterval(() => {
            start += step
            if (start >= target) {
                start = target
                clearInterval(timer)
            }
            setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }))
        }, 16)
    }

    return (
        <section className="hero" id="home">
            {/* Background image */}
            <div className="hero__bg">
                <img src="/garden_hero.png" alt="Beautiful garden" className="hero__bg-img" />
                <div className="hero__overlay" />
            </div>

            {/* Floating particles */}
            <div className="hero__particles" aria-hidden="true">
                {[...Array(12)].map((_, i) => (
                    <span key={i} className={`particle particle-${i + 1}`}>
                        {['🍃', '🌿', '🌸', '✿', '🌱'][i % 5]}
                    </span>
                ))}
            </div>

            <div className="container hero__content">
                <div className="hero__text">
                    <span className="hero__tag">🌱 Est. 2024 · Nature's Partner</span>
                    <h1 className="hero__title">
                        Grow Something<br />
                        <span className={`hero__word ${fade ? 'fade-in' : 'fade-out'}`}>
                            {heroWords[wordIndex]}
                        </span>
                    </h1>
                    <p className="hero__desc">
                        Your all-in-one companion for creating stunning gardens. Get expert guidance,
                        curated plant collections, and join a community of passionate growers.
                    </p>
                    <div className="hero__actions">
                        <a href="#plants" className="btn btn-primary hero__btn-main">
                            Explore Plants
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        <a href="#about" className="btn btn-secondary">
                            Our Story
                        </a>
                    </div>
                </div>

                {/* Stats */}
                <div className="hero__stats" ref={statsRef}>
                    <div className="stat-card">
                        <span className="stat-value">{counts.gardens.toLocaleString()}+</span>
                        <span className="stat-label">Gardens Created</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{counts.plants}+</span>
                        <span className="stat-label">Plant Varieties</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-value">{counts.members}%</span>
                        <span className="stat-label">Happy Members</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <a href="#features" className="hero__scroll-cue" aria-label="Scroll down">
                <span className="scroll-dot" />
            </a>
        </section>
    )
}
