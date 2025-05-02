import React from 'react';

const services = [
  {
    title: 'Solar Plant Generation',
    description: 'Our solar plant solutions offer sustainable and efficient energy generation tailored to your needs.',
  },
  {
    title: 'Revenue Models',
    description: 'Explore various revenue models that maximize your investment in renewable energy sources.',
  },
  {
    title: 'Consulting Services',
    description: 'Our expert consultants provide insights and strategies for optimizing energy use and sustainability.',
  },
  {
    title: 'Support Services',
    description: 'Comprehensive support services to ensure smooth operation and maintenance of energy systems.',
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section py-16 px-8 text-gray-900">
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-500">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div key={index} className="service-card rounded-lg shadow-lg overflow-hidden border border-gray-300 bg-white p-6">
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}