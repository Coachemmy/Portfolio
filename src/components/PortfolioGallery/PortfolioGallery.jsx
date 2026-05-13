import React from 'react';

const PortfolioGallery = ({ works }) => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 mt-40 rounded-2xl shadow-xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-10 text-red-500">
                    Highlights
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {works.map((work, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm mx-auto w-full"
                        >
                            <div className="relative pb-[56.25%] bg-black">
                                {work.type === 'video' ? (
                                    <video
                                        src={work.src}
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        controls
                                        preload="metadata"
                                    />
                                ) : (
                                    <img
                                        src={work.src}
                                        alt={work.title}
                                        className="absolute top-0 left-0 w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                )}

                                <span
                                    className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full text-white ${
                                        work.type === 'video' ? 'bg-red-600/80' : 'bg-primary/80'
                                    }`}
                                >
                                    {work.type === 'video' ? 'Video' : 'Image'}
                                </span>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                                    {work.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {work.description}
                                </p>
                                {work.tags && (
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {work.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 transition-transform duration-200 hover:scale-105"
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

export default PortfolioGallery;