import './Features.css'

const features = [
    {
        icon: '🌱',
        title: 'Plant Care Guides',
        desc: 'Step-by-step seasonal guides for over 500 plants, tailored to your climate zone and soil type.',
        color: '#dcfce7',
    },
    {
        icon: '💧',
        title: 'Smart Watering Schedules',
        desc: 'AI-powered watering reminders that adapt to local weather forecasts and plant needs.',
        color: '#dbeafe',
    },
    {
        icon: '🔬',
        title: 'Soil Health Analysis',
        desc: 'Understand your soil composition and get personalised amendment recommendations.',
        color: '#fef9c3',
    },
    {
        icon: '🌿',
        title: 'Companion Planting',
        desc: 'Discover which plants thrive together. Boost yield and naturally deter pests.',
        color: '#f0fdf4',
    },
    {
        icon: '📅',
        title: 'Planting Calendar',
        desc: 'Never miss the ideal planting window with our location-aware seasonal calendar.',
        color: '#fce7f3',
    },
    {
        icon: '🤝',
        title: 'Community Forum',
        desc: 'Connect with 50,000+ gardeners. Share tips, photos, and get advice from experts.',
        color: '#ede9fe',
    },
]

export default function Features() {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features__header reveal">
                    <span className="section-tag">✨ Everything You Need</span>
                    <h2 className="section-title">Tools that make your garden<br />flourish, effortlessly</h2>
                    <p className="section-subtitle">
                        From seed to harvest, GreenThumb provides everything a modern gardener needs
                        in one beautifully designed platform.
                    </p>
                </div>

                <div className="features__grid">
                    {features.map((feature, i) => (
                        <div
                            key={feature.title}
                            className={`feature-card reveal reveal-delay-${(i % 3) + 1}`}
                            style={{ '--card-bg': feature.color }}
                        >
                            <div className="feature-card__icon">{feature.icon}</div>
                            <h3 className="feature-card__title">{feature.title}</h3>
                            <p className="feature-card__desc">{feature.desc}</p>
                            <span className="feature-card__arrow">→</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
