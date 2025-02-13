"use client";
import React from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="row mb-2 px-md-5 px-3">
      <details open={isOpen} className="details-custom py-4 text-start px-4">
        <summary className="summary-custom" onClick={onClick}>
          <h2
            className="mb-2"
            style={{
              fontSize: "1.2rem",
              color: "#333",
            }}
          >
            {question}
          </h2>
          <svg
            className="icon-custom rotate"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        <span className="mt-4 text-start me-5">{answer}</span>
      </details>
    </div>
  );
};

const FAQs = ({ heading }) => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What is Lanstitut, and what services do you provide?",
      answer:
        "Lanstitut specializes in German language learning programs and facilitates free recruitment for nurses to Germany. We assist with language training, placement, and the complete relocation process.",
    },
    {
      question: "Who is eligible to apply for this program?",
      answer:
        "This program is ideal for BSc and GNM nurses aged up to 45 years who wish to work as registered nurses in Germany.",
    },
    {
      question: "Why should Indian nurses choose Germany?",
      answer:
        "Germany offers attractive career opportunities, high pay scales (up to ₹3,00,000/month), permanent job offers, and numerous benefits such as free education, insurance, and a path to citizenship.",
    },
  ];

  const germanFAQs = [
    {
      question: "Do I need to know German to apply?",
      answer:
        "No prior German knowledge is required. We provide 100% support for language training from A1 to B2 levels to help you meet the requirements.",
    },
    {
      question: "How long does it take to complete the language training?",
      answer:
        "On average, language training takes 6-9 months, depending on your pace and dedication.",
    },
    {
      question:
        "Is there a guarantee of job placement after completing the language course?",
      answer:
        "Yes, we provide guaranteed placement support with direct recruitment to German hospitals.",
    },
  ];

  const RecruitmentFAQs = [
    {
      question:
        "Do I need to pass IELTS, OET, CBT, or OSCE to qualify for a nursing job in Germany?",
      answer:
        "No, Germany does not require IELTS, OET, CBT, or OSCE for nursing roles. Proficiency in German (up to B2 level) is the main requirement.",
    },
    {
      question: "How long does the recruitment and relocation process take?",
      answer:
        "The process typically takes 6-9 months, depending on how quickly you complete your language training and documentation.",
    },
    {
      question: "What types of jobs are available for nurses in Germany?",
      answer:
        "Jobs are available in both government and private hospitals, with permanent job offers and opportunities for career growth.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mt-4">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQs;
