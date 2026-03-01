import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
    {
        id: 1,
        name: 'Sarah M.',
        role: 'Home Gardener · Seattle',
        avatar: '👩‍🌾',
        quote: 'GreenThumb completely transformed my backyard. The companion planting feature alone has doubled my vegetable yield this season!',
        stars: 5,
    },
    {
        id: 2,
        name: 'James K.',
        role: 'Landscape Designer · Austin',
        avatar: '🧑‍🌾',
        quote: 'I recommend GreenThumb to all my clients. The plant care guides are accurate, beautifully presented, and easy to follow.',
        stars: 5,
    },
    {
        id: 3,
        name: 'Priya S.',
        role: 'Urban Farmer · London',
        avatar: '👩‍🌿',
        quote: 'The smart watering schedules have saved me so much time. My balcony herb garden has never looked better!',
        stars: 5,
    },
    {
        id: 4,
        name: 'Carlos R.',
        role: 'Retired Teacher · Barcelona',
        avatar: '👨‍🌱',
        quote: "I started gardening at 65 and GreenThumb made it welcoming. The community forum is so kind and helpful.",
        stars: 5,
    },
    {
        id: 5,
        name: 'Emily T.',
        role: 'Florist · Melbourne',
        avatar: '💐',
        quote: 'The seasonal planting calendar is a game changer. I always know exactly what to grow and when for peak bloom.',
        stars: 5,
    },
]

export default function Testimonials() {
    const [active, setActive] = useState(0)

    const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
    const next = () => setActive((a) => (a + 1) % testimonials.length)

    const t = testimonials[active]

    return (
        <section className="testimonials" id="reviews">
            <div className="container">
                <div className="testimonials__header reveal">
                    <span className="section-tag">💬 Loved by Growers</span>
                    <h2 className="section-title">What our community<br />is saying</h2>
                </div>

                <div className="testimonials__carousel reveal">
                    <button className="carousel-btn prev" onClick={prev} aria-label="Previous">‹</button>

                    <div className="testimonials__card" key={t.id}>
                        <div className="stars">{'⭐'.repeat(t.stars)}</div>
                        <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                        <div className="testimonial-author">
                            <span className="author-avatar">{t.avatar}</span>
                            <div>
                                <div className="author-name">{t.name}</div>
                                <div className="author-role">{t.role}</div>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-btn next" onClick={next} aria-label="Next">›</button>
                </div>

                {/* Dots */}
                <div className="carousel-dots reveal">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`dot ${i === active ? 'active' : ''}`}
                            onClick={() => setActive(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
