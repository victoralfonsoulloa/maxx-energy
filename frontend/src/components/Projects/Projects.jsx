import React from 'react';
import './Projects.scss'; // Import the SCSS file for custom styles

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
    <section
      className="projects-section min-h-screen flex items-center justify-center pt-24 pb-16 px-8 text-gray-100"
      style={{
        backgroundImage: "url('/projects-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container max-w-screen-xl mx-auto relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-500">
          Our Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card rounded-lg shadow-lg overflow-hidden border border-gray-700 bg-gray-800 border-animated">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
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