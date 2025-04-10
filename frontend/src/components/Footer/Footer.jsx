import './Footer.scss';
export default function Footer() {
    return (
      <footer className="footer">
        <div className='footerTop'>
          <div className='footerContainer'> 
            <div className='footerSection'>
              <h3>Contact Us</h3>
              <ul>
              <li>Email: <a href="mailto:info@maxxpotential.com">info@maxxpotential.com</a></li>
              <li>Phone: (xxx) xxx-xxxx</li>
              <li>Address: 123 Maxx Lane, Suite 100, YourCity, Country</li>
            </ul>
            </div>
          </div>

          <div className="social-container">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <img src="images/facebook.png" alt="Facebook" className="social-icon" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img src="images/twitter.png" alt="Twitter" className="social-icon" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <img src="images/instagram.png" alt="Instagram" className="social-icon" />
  </a>
</div>


          <div className='footerLinks'>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
      </div>
        <div className='footerBottom'>
          <p>&copy; {new Date().getFullYear()} Maxx Potential. All rights reserved.</p>
        </div>
      </footer>
    );
  }
