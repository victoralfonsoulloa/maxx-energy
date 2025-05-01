import React, { useState } from 'react';
import Map from "../Map/Map"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Email is not valid';
    }
    if (!formData.message) errors.message = 'Message is required';
    if (formData.message && formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <section className="pt-20 py-8 px-4 mx-auto max-w-screen-md">
      <h2 className="text-4xl tracking-tight font-extrabold text-white mb-8">
        Contact Maxx Energy
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
            placeholder="Your Name"
          />
          {formErrors.name && (
            <p className="text-red-500 text-sm">{formErrors.name}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
            placeholder="your.email@example.com"
          />
          {formErrors.email && (
            <p className="text-red-500 text-sm">{formErrors.email}</p>
          )}
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-white">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-800 text-white"
            placeholder="Your message here..."
            rows="4"
          />
          {formErrors.message && (
            <p className="text-red-500 text-sm">{formErrors.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Send Message
        </button>
      </form>
      {isSubmitted && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 border border-green-400 rounded">
          Thank you for your message! We will get back to you soon.
        </div>
      )}
      <Map address="14321 Winter Breeze Dr, Midlothian, VA 23113" />
    </section>
  );
};

export default ContactForm;