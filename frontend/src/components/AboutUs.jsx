import React from 'react';
import './AboutUs.scss'; // Import the CSS file for custom styles

export default function AboutUs() {
  return (
    <div className="about-us bg-[#0a0a0a] text-white py-16 px-8 flex flex-col justify-center items-center">
      <div className="container max-w-4xl mx-auto">

        <section className="intro mb-12 mt-16 p-6 rounded-lg border border-animated transition ease-in-out duration-300 hover:bg-[rgba(70,130,180,0.2)]">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">About Us</h1>
          <p className="text-lg leading-relaxed">
            Welcome to Maxx Energy, where cutting-edge technology meets sustainable solutions.
            Founded with a vision to revolutionize the energy industry, we are committed to delivering clean, efficient, 
            and renewable energy solutions that power a brighter future.
          </p>
        </section>

        <section className="mission mb-12 p-6 rounded-lg border border-animated transition ease-in-out duration-300 hover:bg-[rgba(70,130,180,0.2)]">
          <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At Maxx Energy, our mission is to empower communities and businesses with innovative energy solutions 
            that drive sustainability and efficiency. We strive to reduce carbon footprints and promote a green environment 
            for generations to come.
          </p>
        </section>

        <section className="what-we-do mb-12 p-6 rounded-lg border border-animated transition ease-in-out duration-300 hover:bg-[rgba(70,130,180,0.2)]">
          <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">What We Do</h3>
          <p className="text-lg leading-relaxed">
            Maxx Energy offers a comprehensive suite of renewable energy solutions, including solar, wind, 
            and energy efficiency consulting. Our team of experts collaborates with clients to design and implement 
            customized energy plans that maximize savings and minimize environmental impact.
          </p>
        </section>

        <section className="approach mb-12 p-6 rounded-lg border border-animated transition ease-in-out duration-300 hover:bg-[rgba(70,130,180,0.2)]">
          <h4 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">Our Approach</h4>
          <p className="text-lg leading-relaxed">
            We take a holistic approach to energy management, focusing on innovation, sustainability, and community engagement. 
            Our solutions are tailored to meet the unique needs of each client, ensuring optimal performance and long-term benefits.
          </p>
        </section>

        <section className="impact mb-12 p-6 rounded-lg border border-animated transition ease-in-out duration-300 hover:bg-[rgba(70,130,180,0.2)]">
          <h5 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">Our Impact</h5>
          <p className="text-lg leading-relaxed">
            Since our inception, Maxx Energy has helped countless businesses and homes transition to renewable energy, 
            significantly reducing their carbon footprint and energy costs. Our projects contribute to a cleaner, greener planet.
          </p>
        </section>

        <section className="team mb-12 p-6 rounded-lg border border-animated transition ease-in-out duration-300 hover:bg-[rgba(70,130,180,0.2)]">
          <h5 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">Meet the Team</h5>
          <div className="team-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="team-member text-center">
              <img src="/images/usericon.png" alt="Jane Doe" className="w-16 h-16 mx-auto rounded-full mb-4" />
              <h6 className="text-xl font-bold">Andrei Novozhilov</h6>
              <p className="font-semibold">Founder & CEO</p>
              <p>Andrei is a visionary leader with over 20 years of experience in the energy sector. He is dedicated to advancing sustainable energy practices and fostering innovation.</p>
            </div>
            <div className="team-member text-center">
              <img src="/images/usericon.png" alt="John Smith" className="w-16 h-16 mx-auto rounded-full mb-4" />
              <h6 className="text-xl font-bold">Victor Ulloa</h6>
              <p className="font-semibold">Lead Engineer</p>
              <p>Victor is a seasoned engineer with a passion for renewable energy. He leads our technical team, ensuring the highest quality in every project we undertake.</p>
            </div>
          </div>
        </section>

        <section className="join-us mb-12 p-6 rounded-lg border border-animated transition ease-in-out duration-300 hover:bg-[rgba(70,130,180,0.2)]">
          <h6 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">Join Us</h6>
          <p className="text-lg leading-relaxed">
            Whether you’re looking to transition to clean energy or seeking a partner for your energy needs, Maxx Energy is here to help. 
            Join us in our mission to create a sustainable future. Contact us today to learn more about our services and how we can work together.
          </p>
        </section>
      </div>
    </div>
  );
}