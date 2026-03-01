import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Plants', href: '#plants' },
    { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleNav = (href) => {
        setActiveLink(href)
        setMenuOpen(false)
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar__inner">
                <a href="#home" className="navbar__logo">
                    <span className="logo-leaf">🌿</span>
                    <span className="logo-text">GreenThumb</span>
                </a>

                <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className={`navbar__link ${activeLink === link.href ? 'active' : ''}`}
                                onClick={() => handleNav(link.href)}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="navbar__actions">
                    <a href="#newsletter" className="btn btn-primary navbar__cta">
                        Get Started
                    </a>
                    <button
                        className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </div>
        </nav>
    )
}
