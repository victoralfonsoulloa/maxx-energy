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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
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