const plants = [
    {
        id: 1,
        name: 'Lavender',
        latin: 'Lavandula angustifolia',
        badge: 'Easy Care',
        badgeColor: '#dcfce7',
        tags: ['Fragrant', 'Drought-Tolerant', 'Pollinator'],
        emoji: '💜',
        bg: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
    },
    {
        id: 2,
        name: 'Cherry Tomato',
        latin: 'Solanum lycopersicum',
        badge: 'Edible',
        badgeColor: '#fee2e2',
        tags: ['Full Sun', 'Prolific', 'Beginner'],
        emoji: '🍅',
        bg: 'linear-gradient(135deg, #fef2f2 0%, #fecaca 100%)',
    },
    {
        id: 3,
        name: 'Peace Lily',
        latin: 'Spathiphyllum wallisii',
        badge: 'Indoor',
        badgeColor: '#dbeafe',
        tags: ['Low Light', 'Air Purifier', 'Elegant'],
        emoji: '🌸',
        bg: 'linear-gradient(135deg, #eff6ff 0%, #bfdbfe 100%)',
    },
    {
        id: 4,
        name: 'Sunflower',
        latin: 'Helianthus annuus',
        badge: 'Fast Growing',
        badgeColor: '#fef9c3',
        tags: ['Full Sun', 'Edible Seeds', 'Cheerful'],
        emoji: '🌻',
        bg: 'linear-gradient(135deg, #fefce8 0%, #fef08a 100%)',
    },
    {
        id: 5,
        name: 'Basil',
        latin: 'Ocimum basilicum',
        badge: 'Herb',
        badgeColor: '#dcfce7',
        tags: ['Culinary', 'Fast Growth', 'Aromatic'],
        emoji: '🌿',
        bg: 'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)',
    },
    {
        id: 6,
        name: 'Rose',
        latin: 'Rosa × hybrida',
        badge: 'Classic',
        badgeColor: '#fce7f3',
        tags: ['Fragrant', 'Perennial', 'Showstopper'],
        emoji: '🌹',
        bg: 'linear-gradient(135deg, #fff1f2 0%, #fecdd3 100%)',
    },
]

export default function PlantShowcase() {
    return (
        <section className="plants" id="plants">
            <div className="container">
                <div className="plants__header reveal">
                    <span className="section-tag">🌿 Plant Library</span>
                    <h2 className="section-title">Discover & grow with<br />our curated collection</h2>
                    <p className="section-subtitle">
                        Browse hundreds of hand-selected plants with detailed care guides,
                        growing tips, and companion planting suggestions.
                    </p>
                </div>

                <div className="plants__grid">
                    {plants.map((plant, i) => (
                        <div
                            key={plant.id}
                            className={`plant-card reveal reveal-delay-${(i % 3) + 1}`}
                            style={{ '--plant-bg': plant.bg }}
                        >
                            <div className="plant-card__top">
                                <div className="plant-card__emoji">{plant.emoji}</div>
                                <span className="plant-card__badge" style={{ background: plant.badgeColor }}>
                                    {plant.badge}
                                </span>
                            </div>
                            <div className="plant-card__body">
                                <h3 className="plant-card__name">{plant.name}</h3>
                                <p className="plant-card__latin">{plant.latin}</p>
                                <div className="plant-card__tags">
                                    {plant.tags.map((tag) => (
                                        <span key={tag} className="plant-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <button className="plant-card__btn">
                                View Care Guide →
                            </button>
                        </div>
                    ))}
                </div>

                <div className="plants__more reveal">
                    <a href="#" className="btn btn-outline">
                        Browse All 500+ Plants
                    </a>
                </div>
            </div>
        </section>
    )
}
