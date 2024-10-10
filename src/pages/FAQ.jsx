import React, { useState } from 'react';

const FAQ = () => {
  // State to hold FAQ data
  const [faqs, setFaqs] = useState([
    {
      question: "What is your return policy?",
      answer: "Our return policy is designed to ensure your satisfaction with every purchase. You can return any item within 30 days of purchase for a full refund, provided the item is in its original condition, unworn, and with all tags attached. To initiate a return, simply log into your account, go to the orders section, and select the item you wish to return. Print out the return label and attach it to your package. Once we receive the returned item, we will process your refund within 5-7 business days. If you encounter any issues or have questions, our customer service team is here to help.",
      open: false
    },
    {
      question: "What payment methods do you accept?",
      answer: "We offer a variety of payment methods to ensure a convenient shopping experience. You can pay for your order using major credit and debit cards such as Visa, MasterCard, American Express, and Discover. We also accept PayPal, Apple Pay, and Google Pay for secure, quick transactions. For added security, all payments are processed using encrypted connections. If you encounter any issues during payment, please contact our customer service team for assistance",
      open: false
    },
    {
        question: "Where can I track my order status?",
        answer: "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.",
        open: false
    },
    {
        question: "Can I cancel my order?",
        answer: "Orders can be canceled within 24 hours of placing them. After that, we might have already started processing your order, and it cannot be canceled.",
        open: false
    },
    {
        question: "What should I do if I receive a damaged item?",
        answer: "If you receive a damaged item, please contact our customer service team within 7 days of receiving the package. Provide details about the damage and, if possible, include photos. We will arrange for a replacement or a refund based on your preference. You may be required to return the damaged item using a prepaid return label that we will provide. Our goal is to resolve the issue promptly to ensure your satisfaction.",
        open: false
    },
    // More FAQ items can be added here
  ]);

  // Function to toggle FAQ open/close state
  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }

      return faq;
    }));
  };

  return (
    <div className="faq-section">
      <h2 className='heading'>Frequently Asked Questions</h2>
      {faqs.map((faq, i) => (
        <div key={i} className="faq">
          <div className="faq-question" onClick={() => toggleFAQ(i)}>
            {faq.question}
          </div>
          <div className={`faq-answer ${faq.open ? 'open' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
