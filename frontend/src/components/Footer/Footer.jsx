import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="flex flex-col md:flex-row justify-center md:justify-around w-full gap-8">
        {/* Contact Us Section */}
        <nav className="text-center flex-1">
          <h6 className="text-xl font-bold mb-4 text-yellow-500">Contact Us</h6>
          <ul className="space-y-2">
            <li>Email: <a href="mailto:info@maxxpotential.com" className="hover:text-blue-500">info@maxxpotential.com</a></li>
            <li>Phone: 1-800-555-ENERGY</li>
            <li>Address: 14321 Winter Breeze Dr, Midlothian, VA 23113</li>
          </ul>
        </nav>

        {/* Quick Links Section */}
        <nav className="text-center flex-1">
          <h6 className="text-xl font-bold mb-4 text-yellow-500">Quick Links</h6>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-500">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>

        {/* Social Media Section */}
        <nav className="text-center flex-1">
          <h6 className="text-xl font-bold mb-4 text-yellow-500">Social</h6>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="fill-current"
            >
              <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41a4.92 4.92 0 011.78 1.17 4.92 4.92 0 011.17 1.78c.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43a4.92 4.92 0 01-1.17 1.78 4.92 4.92 0 01-1.78 1.17c-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41a4.92 4.92 0 01-1.78-1.17 4.92 4.92 0 01-1.17-1.78c-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43A4.92 4.92 0 014.35 3.14a4.92 4.92 0 011.78-1.17c.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.513.012-4.75.07-.993.047-1.535.21-1.89.35a3.12 3.12 0 00-1.14.74 3.12 3.12 0 00-.74 1.14c-.14.355-.303.897-.35 1.89-.058 1.237-.07 1.6-.07 4.75s.012 3.513.07 4.75c.047.993.21 1.535.35 1.89.168.434.427.825.74 1.14.314.313.706.572 1.14.74.355.14.897.303 1.89.35 1.237.058 1.6.07 4.75.07s3.513-.012 4.75-.07c.993-.047 1.535-.21 1.89-.35.434-.168.825-.427 1.14-.74.313-.314.572-.706.74-1.14.14-.355.303-.897.35-1.89.058-1.237.07-1.6.07-4.75s-.012-3.513-.07-4.75c-.047-.993-.21-1.535-.35-1.89a3.12 3.12 0 00-.74-1.14 3.12 3.12 0 00-1.14-.74c-.355-.14-.897-.303-1.89-.35-1.237-.058-1.6-.07-4.75-.07zm0 3.8a5 5 0 110 10 5 5 0 010-10zm0 1.8a3.2 3.2 0 100 6.4 3.2 3.2 0 000-6.4zm5.25-1.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
            </svg>
          </a>

          </div>
        </nav>
      </div>
      <div className="border-t border-accent mt-8 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Maxx Potential. All rights reserved.</p>
      </div>
    </footer>
  );
}
