import React, { useState } from 'react';

export default function PromotionalBanner() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      className="promotional-banner relative flex items-center justify-center py-20 px-8 text-gray-100"
      style={{
        backgroundImage: "url('/promo-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container max-w-screen-xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-yellow-500">
          Join the Renewable Energy Revolution!
        </h2>
        <p className="text-xl mb-6 text-gray-300">
          Discover how MAXX Energy is leading the charge in sustainable solutions with innovative projects and cutting-edge technology.
        </p>
        <button
          onClick={handleToggle}
          className="mt-4 px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300"
        >
          {isExpanded ? 'Show Less' : 'Learn More'}
        </button>

        {isExpanded && (
          <div className="mt-8 bg-white bg-opacity-90 rounded-lg shadow-2xl p-6 text-gray-900">
            <h3 className="text-2xl font-bold mb-4">About Our Initiatives</h3>
            <p className="mb-4">
              At MAXX Energy, we are committed to advancing renewable energy solutions to create a sustainable future. Our projects focus on harnessing the power of solar and wind energy, driving energy efficiency, and supporting communities with clean energy solutions.
            </p>
            <p>
              Join us as we innovate and implement strategies that not only reduce carbon footprints but also offer economic benefits and energy security. Together, we can make a significant impact on our planet's future.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}