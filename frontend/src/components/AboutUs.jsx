import './AboutUs.scss'

export default function AboutUs () {
    return (
        <div className="about-us">
            <div className="container"> {/* Added container for centering content */}
                <section className="intro">
                    <h1>About Us</h1>
                    <p>Welcome to Maxx Potential, where innovation meets opportunity. <br/>Founded with a vision to bridge the gap between aspiring tech talent and the dynamic needs of the modern workforce, we are committed to fostering growth, learning, and success for both individuals and organizations.</p>
                </section>

                <section className="mission">
                    <h2>Mission</h2>
                    <p>At Maxx Potential, our mission is to empower the next generation of technology professionals by providing real-world experience, mentorship, and a pathway to meaningful careers.<br/> We believe in the potential of every individual to excel and make a significant impact in the tech industry.</p>
                </section>

                <section className="what-we-do">
                    <h3>What We Do</h3>
                    <p>Maxx Potential operates as a unique hybrid of a tech consultancy and a workforce development organization. <br/>We partner with businesses to deliver high-quality tech solutions while simultaneously mentoring and developing emerging talent through hands-on experience.<br/> Our program participants work alongside seasoned professionals, gaining practical skills and confidence to thrive in today’s fast-paced digital environment.</p>
                </section>

                <section className="approach">
                    <h4>Our Approach</h4>
                    <p>We take a personalized approach to development, recognizing that each individual brings a unique set of skills and aspirations. By offering tailored mentorship, continuous learning opportunities, and real-world projects, we ensure our team members are equipped with the tools they need to succeed. Our collaborative culture encourages creativity, curiosity, and a passion for technology.</p>
                </section>

                <section className="impact">
                    <h5>Our Impact</h5>
                    <p>Since our inception, Maxx Potential has successfully launched countless careers, transforming lives and contributing to the growth of the tech industry. Our graduates go on to work with leading companies, bringing fresh perspectives and innovative solutions to the table.</p>
                </section>

                <section className="team">
                    <h5>Meet the Team</h5>
                    <div className="team-grid">
                        <div className="team-member">
                            <img src="/images/usericon.png" alt="Jane Doe" style={{ width: '50px', height: '50px', borderRadius: '50%' }}  // Inline style for small icon
                            />
                            <h6>Jane Doe</h6>
                            <p style={{ fontWeight: 700 }}>Founder & CEO</p>
                            <p>Jane brings over two decades of experience in the tech industry, with a passion for nurturing talent and fostering innovation. Her vision for Maxx Potential is to create a supportive environment where aspiring tech professionals can thrive and make a meaningful impact.</p>
                        </div>
                        <div className="team-member">
                            <img src="/images/usericon.png" alt="John Smith" style={{ width: '50px', height: '50px', borderRadius: '50%' }}/>
                            <h6>John Smith</h6>
                            <p style={{ fontWeight: 700 }}>Lead Coach</p>
                            <p>John is a seasoned software engineer with a knack for teaching and mentoring. With a background in both development and leadership, he helps guide our team members through their professional journeys with expert advice and hands-on training.</p>
                        </div>
                    </div>
                </section>

                <section className="join-us">
                    <h6>Join Us</h6>
                    <p>Whether you’re an aspiring tech professional looking to kickstart your career or a company seeking agile and skilled tech solutions, Maxx Potential is here to help you achieve your goals. Together, we can unlock your potential and drive technological advancement. Connect with us today to learn more about how we can work together to build a brighter future.</p>
                </section>

                <footer className="connect">
                    <h3>Contact Us</h3>
                    <ul className="contact-info">
                        <li>Email: <a href="mailto:info@maxxpotential.com">info@maxxpotential.com</a></li>
                        <li>Phone: (xxx) xxx-xxxx</li>
                        <li>Address: 123 Maxx Lane, Suite 100, YourCity, Country</li>
                    </ul>
                </footer>
            </div>
        </div>
    )
}
