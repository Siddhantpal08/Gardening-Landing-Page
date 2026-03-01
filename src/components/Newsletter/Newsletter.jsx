import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            setSubmitted(true)
            setEmail('')
        }
    }

    return (
        <section className="newsletter" id="newsletter">
            <div className="newsletter__bg" aria-hidden="true">
                <div className="nl-blob nl-blob-1" />
                <div className="nl-blob nl-blob-2" />
            </div>
            <div className="container newsletter__inner">
                <div className="newsletter__content reveal">
                    <span className="section-tag" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }}>
                        🌻 Free Weekly Tips
                    </span>
                    <h2 className="section-title" style={{ color: 'white' }}>
                        Get gardening wisdom<br />delivered to your inbox
                    </h2>
                    <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '480px' }}>
                        Join 50,000+ gardeners who receive our weekly newsletter packed with planting calendars,
                        seasonal tips, and exclusive plant care guides.
                    </p>

                    {submitted ? (
                        <div className="newsletter__success">
                            <span>🌱</span> Welcome to the GreenThumb family! Check your inbox.
                        </div>
                    ) : (
                        <form className="newsletter__form reveal" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Enter your email address..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="newsletter__input"
                            />
                            <button type="submit" className="btn btn-primary newsletter__submit">
                                Subscribe Free
                            </button>
                        </form>
                    )}

                    <p className="newsletter__note">
                        ✓ No spam ever &nbsp;·&nbsp; ✓ Unsubscribe anytime &nbsp;·&nbsp; ✓ Free forever
                    </p>
                </div>

                {/* Decorative plant emojis */}
                <div className="newsletter__deco" aria-hidden="true">
                    <span className="deco-plant">🌿</span>
                    <span className="deco-plant">🌺</span>
                    <span className="deco-plant">🌵</span>
                    <span className="deco-plant">🍀</span>
                </div>
            </div>
        </section>
    )
}
