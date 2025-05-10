import React from "react";
import { FaDumbbell, FaRunning, FaClock, FaUserAlt } from "react-icons/fa";

const faqData = [
  {
    icon: <FaDumbbell className="text-2xl text-red-600" />,
    question: "What are your gym timings?",
    answer: "We are open from 5 AM to 11 AM and Evening 6PM to 9PM on all days including weekends.",
  },
  {
    icon: <FaRunning className="text-2xl text-red-600" />,
    question: "Do you offer personal training?",
    answer: "Yes, we have certified trainers available for personal coaching.",
  },
  {
    icon: <FaClock className="text-2xl text-red-600" />,
    question: "Is there a trial period available?",
    answer: "Yes, we offer a free 3-day trial for all new members.",
  },
  {
    icon: <FaUserAlt className="text-2xl text-red-600" />,
    question: "Are there any female trainers?",
    answer: "Absolutely! We have experienced female trainers for all sessions.",
  },
];

export const Faq = () => {
  return (
    <div className="bg-gray-100 py-12 px-6" id="faq">
      <h2 className="text-3xl font-bold text-center mb-10">
        <span className="text-red-600">Frequently</span> Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transition-all duration-300 hover:shadow-xl"
          >
            <div>{faq.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{faq.question}</h3>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
