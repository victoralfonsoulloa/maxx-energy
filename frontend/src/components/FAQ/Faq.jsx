import React, { useState } from 'react';

const FAQSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is Maxx Energy?',
          answer: 'Maxx Energy is a leading provider of sustainable energy solutions for both residential and commercial properties.',
        },
        {
          question: 'Why should I choose renewable energy?',
          answer: 'Renewable energy solutions reduce your carbon footprint, lower energy costs, and contribute to a healthier planet.',
        },
      ],
    },
    {
      category: 'Pricing',
      questions: [
        {
          question: 'How much can I save by switching to Maxx Energy?',
          answer: 'Savings vary based on your current energy usage and plan. Our specialists can provide you with a personalized savings estimate.',
        },
        {
          question: 'Are there any upfront costs?',
          answer: 'Maxx Energy offers flexible plans with no upfront costs. Contact us to learn more about our pricing options.',
        },
      ],
    },
    {
      category: 'Installation',
      questions: [
        {
          question: 'How long does the installation process take?',
          answer: 'The installation process typically takes 1-3 days, depending on the size and complexity of the system.',
        },
        {
          question: 'Do you offer installation services in my area?',
          answer: 'Maxx Energy services are available in most regions. Please contact us to confirm availability in your area.',
        },
      ],
    },
    {
      category: 'Support',
      questions: [
        {
          question: 'How can I contact customer support?',
          answer: 'You can reach our customer support team via phone at 1-800-555-ENERGY or email at support@maxxenergy.com.',
        },
        {
          question: 'What should I do if I experience a power outage?',
          answer: 'In the event of a power outage, please contact our emergency hotline at 1-800-555-OUTAGE for immediate assistance.',
        },
      ],
    },
  ];

  const filteredFaqs = faqs.map((category) => ({
    ...category,
    questions: category.questions.filter((faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Maxx Energy FAQ
        </h2>
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {filteredFaqs.map((category, index) =>
            category.questions.length > 0 ? (
              <div key={index} className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {category.category}
                </h3>
                <div className="grid gap-8">
                  {category.questions.map((faq, idx) => (
                    <FAQItem key={idx} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mb-10 border-b border-gray-200 pb-4">
      <h3
        onClick={toggleExpansion}
        className="flex items-center justify-between cursor-pointer mb-4 text-lg font-medium text-yellow-500"
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </h3>
      {isExpanded && <p className="text-gray-500 dark:text-gray-400">{answer}</p>}
    </div>
  );
};

export default FAQSection;