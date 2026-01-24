// src/components/PortfolioGrid/PortfolioGrid.js
import React from 'react';

const PortfolioGrid = ({ works }) => {
    return (
        <section
            style={{
                padding: '5rem 2rem',
                backgroundColor: '#ffffff',
                marginTop: '10rem',
                borderRadius: '16px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2
                    style={{
                        fontSize: '2.25rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '2.5rem',
                        color: '#ff4d4d',
                    }}
                >
                    Highlights
                </h2>

                <div className="portfolio-grid-container">

                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="portfolio-card"
                            style={{
                                background: 'linear-gradient(to bottom right, #f9fafc, #f0f4ff)',
                                borderRadius: '14px',
                                overflow: 'hidden',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                                border: '1px solid rgba(101, 167, 178, 0.25)',
                                maxWidth: '380px',
                                width: '100%',
                                margin: '0 auto',
                            }}
                        >

                            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, backgroundColor: '#000' }}>
                                {work.type === 'video' ? (
                                    <video
                                        src={work.src}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',

                                        }}
                                        controls
                                        preload="metadata"
                                    />
                                ) : (
                                    <img
                                        src={work.src}
                                        alt={work.title}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        loading="lazy"
                                    />
                                )}

                                <span
                                    style={{
                                        position: 'absolute',
                                        top: '12px',
                                        right: '12px',
                                        padding: '4px 10px',
                                        fontSize: '0.75rem',
                                        fontWeight: 'bold',
                                        borderRadius: '20px',
                                        color: '#fff',
                                        backgroundColor: work.type === 'video' ? '#dc2626cc' : '#65a7b2cc',
                                    }}
                                >
                                    {work.type === 'video' ? 'Video' : 'Image'}
                                </span>
                            </div>


                            <div style={{ padding: '2.25rem', borderRadius: '14px' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1e293b', margin: '0 0 0.5rem' }}>
                                    {work.title}
                                </h3>
                                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.5', margin: 0 }}>
                                    {work.description}
                                </p>
                                {work.tags && (
                                    <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {work.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                style={{
                                                    padding: '0.25rem 0.75rem',
                                                    fontSize: '0.8rem',
                                                    borderRadius: '20px',
                                                    backgroundColor: 'rgba(114, 12, 182, 0.1)',
                                                    color: '#720cb6',
                                                    transform: 'scale(1)',
                                                    transition: 'transform 0.2s',
                                                    translateY: '10',
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;