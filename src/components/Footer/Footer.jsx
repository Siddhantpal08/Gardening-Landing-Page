import './Footer.css'

const footerLinks = {
    Explore: ['Plant Library', 'Garden Planner', 'Seasonal Calendar', 'Soil Calculator'],
    Resources: ['Care Guides', 'Community Forum', 'Blog', 'Newsletter'],
    Company: ['About Us', 'Sustainability', 'Careers', 'Press'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div className="footer__brand">
                    <span className="footer__logo">🌿 GreenThumb</span>
                    <p className="footer__tagline">
                        Growing together, one plant at a time. Helping passionate gardeners
                        cultivate beautiful, thriving green spaces since 2019.
                    </p>
                    <div className="footer__socials">
                        {['🐦', '📸', '🎬', '💼'].map((icon, i) => (
                            <a key={i} href="#" className="social-btn" aria-label={`Social ${i}`}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {Object.entries(footerLinks).map(([group, links]) => (
                    <div key={group} className="footer__col">
                        <h4 className="footer__col-title">{group}</h4>
                        <ul className="footer__col-links">
                            {links.map((link) => (
                                <li key={link}>
                                    <a href="#" className="footer__link">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p>© 2024 GreenThumb. Made with 💚 for gardeners everywhere.</p>
                    <p className="footer__bottom-right">Grow something beautiful today.</p>
                </div>
            </div>
        </footer>
    )
}
