import './About.css'

const milestones = [
    { year: '2019', text: 'Founded with a love of community gardening' },
    { year: '2021', text: 'Reached 10,000 active gardeners' },
    { year: '2023', text: 'Launched AI-powered plant care features' },
    { year: '2024', text: '50,000+ members growing strong' },
]

export default function About() {
    return (
        <section className="about" id="about">
            <div className="container about__inner">
                {/* Image side */}
                <div className="about__visual reveal">
                    <div className="about__img-main-wrap">
                        <img src="/garden_planting.png" alt="Gardener planting seedlings" className="about__img-main" />
                    </div>
                    <div className="about__img-accent-wrap">
                        <img src="/garden_tools.png" alt="Garden tools" className="about__img-accent" />
                    </div>
                    <div className="about__badge">
                        <span className="badge-icon">🏆</span>
                        <div>
                            <div className="badge-num">Award</div>
                            <div className="badge-label">Best Garden App 2024</div>
                        </div>
                    </div>
                </div>

                {/* Text side */}
                <div className="about__text">
                    <span className="section-tag reveal">🌍 Our Story</span>
                    <h2 className="section-title reveal">Rooted in a passion<br />for nature</h2>
                    <p className="about__desc reveal">
                        GreenThumb was born from a simple belief: everyone deserves a garden they love.
                        We combine horticultural expertise with modern technology to make gardening
                        accessible, joyful, and sustainable for all.
                    </p>

                    <div className="about__milestones reveal">
                        {milestones.map((m) => (
                            <div key={m.year} className="milestone">
                                <span className="milestone__year">{m.year}</span>
                                <span className="milestone__text">{m.text}</span>
                            </div>
                        ))}
                    </div>

                    <a href="#newsletter" className="btn btn-primary reveal">
                        Join Our Community
                    </a>
                </div>
            </div>
        </section>
    )
}
