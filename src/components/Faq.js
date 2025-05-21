import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'What types of products do you offer at SG Inc.?',
    answer:
      'We offer high-quality refurbished laptops, desktops, and IT equipment, available at affordable prices. All of our products undergo rigorous testing to ensure optimal performance and reliability.',
  },
  {
    question: 'Are your refurbished laptops and desktops covered by a warranty?',
    answer:
      'Yes, all our refurbished laptops and desktops come with a warranty to ensure your peace of mind and product reliability.',
  },
  {
    question: 'What is the process for receiving technical support?',
    answer:
      'You can receive technical support by contacting our support team via phone, email, or through our website’s support portal.',
  },
  {
    question: 'What does the Annual Maintenance Contract (AMC) cover?',
    answer:
      'The AMC covers regular maintenance, repairs, and technical support for your IT equipment throughout the contract period.',
  },
  {
    question: 'How can I purchase a refurbished laptop or desktop?',
    answer:
      'You can purchase by contacting our sales team or ordering directly through our website.',
  },
  {
    question: 'Do you provide emergency IT support?',
    answer:
      'Yes, we offer emergency IT support services to address urgent technical issues.',
  },
  {
    question: 'How can I get a quote for your services or products?',
    answer:
      'You can request a quote by contacting our sales department via phone or email.',
  },
  {
    question: 'How do I contact SG Inc. for support or inquiries?',
    answer:
      'You can contact us via phone, email, or through the contact form on our website.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQ'S</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className="question"
            role="button"
            tabIndex={0}
            aria-expanded={activeIndex === index}
            onClick={() => toggleAnswer(index)}
            onKeyDown={(e) =>
              (e.key === 'Enter' || e.key === ' ') && toggleAnswer(index)
            }
          >
            <div className="question-text">
              <span className="q-icon">Q</span>
              <span>{item.question}</span>
            </div>
            {activeIndex === index ? (
              <FaMinus className="icon" />
            ) : (
              <FaPlus className="icon" />
            )}
          </div>

          {/* Smooth transition wrapper */}
          <div className={`answer-wrapper ${activeIndex === index ? 'open' : ''}`}>
            <p className="answer">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
