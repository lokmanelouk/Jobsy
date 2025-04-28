import { useState } from "react";

const FAQSection = () => {
    const faqs = [
      {
        question: "How do I find a worker?",
        answer: "Simply post your job with details, and our system will match you with suitable professionals in your area."
      },
      {
        question: "How are workers verified?",
        answer: "We manually check IDs, qualifications, and customer reviews before approving any worker profiles."
      },
      {
        question: "Is payment secure?",
        answer: "Yes! All payments are processed through our secure platform. You only pay when the job is completed to your satisfaction."
      },
      {
        question: "What if I'm not satisfied?",
        answer: "We offer a 100% satisfaction guarantee. Contact us within 24 hours and we'll help resolve the issue."
      }
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-medium text-[#1E293B] hover:text-[#F97316] transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition ${activeIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default FAQSection