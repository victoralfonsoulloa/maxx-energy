import React from 'react';

const projects = [
  {
    title: 'Solar Farm Installation',
    image: 'projects-images/solar-farm.webp',
    description: 'A state-of-the-art solar farm providing clean energy to over 10,000 homes in the region.',
    location: 'California, USA',
    completionDate: 'March 2024',
  },
  {
    title: 'Wind Turbine Park',
    image: 'projects-images/wind-turbine-park.jpg',
    description: 'An innovative wind turbine park generating sustainable energy for local industries.',
    location: 'Texas, USA',
    completionDate: 'June 2023',
  },
  {
    title: 'Energy Efficiency Program',
    image: 'projects-images/energy-efficiency-program.jpg',
    description: 'A comprehensive program aimed at reducing energy consumption for urban businesses.',
    location: 'New York, USA',
    completionDate: 'December 2023',
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section pt-24 pb-16 px-8 text-gray-100"> {/* Changed text color to gray-100 for better contrast */}
      <div className="container max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-500">
          Our Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg shadow-lg overflow-hidden border border-gray-700 bg-gray-800"> {/* Changed background to gray-800 and border to gray-700 */}
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3> {/* Changed to white text */}
                <p className="text-gray-300 mb-4">{project.description}</p> {/* Changed to gray-300 for better readability */}
                <p className="text-sm text-gray-400">
                  <strong>Location:</strong> {project.location}
                </p>
                <p className="text-sm text-gray-400">
                  <strong>Completion Date:</strong> {project.completionDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}