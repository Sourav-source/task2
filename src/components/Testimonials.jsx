import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "\"Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.\"",
      platformIcon: "https://img.leadcrm.io/wp-content/uploads/2025/02/18104714/capterra-icon.png",
      name: "David Fincher",
      reviews: "6 reviews",
      avatar: "https://img.leadcrm.io/wp-content/uploads/2025/02/18121000/Avatar-Users2_17.png"
    },
    {
      text: "\"My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend for personal lead management.\"",
      platformIcon: "https://img.leadcrm.io/wp-content/uploads/2025/02/18104715/google-icon.png",
      name: "Lillian Williams",
      reviews: "15 reviews",
      avatar: "https://img.leadcrm.io/wp-content/uploads/2025/02/18121000/Avatar-Users2_17.png"
    },
    {
      text: "\"Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.\"",
      platformIcon: "https://img.leadcrm.io/wp-content/uploads/2025/02/18104714/capterra-icon.png",
      name: "Michael",
      reviews: "3 reviews",
      avatar: "https://img.leadcrm.io/wp-content/uploads/2025/02/18121000/Avatar-Users2_17.png"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What people are saying about LeadCRM
          </h2>
          <div className="flex space-x-2">
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 bg-[#090F4E] rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F9F0F8] rounded-2xl p-8 h-[350px]">
              <div className="mb-6">
                <p className="text-[#434243] leading-relaxed font-bold text-sm">
                  {testimonial.text}
                </p>
              </div>
              <div className="flex items-center mb-16">
                <img
                  src={testimonial.platformIcon}
                  alt=""
                  className="w-4 h-4"
                />
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 fill-[#434243] text-[#434243]"
                  />
                ))}
              </div>
              <div className="flex items-center border-t-2 border-[#EBE3EA] pt-1.5">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <h4 className="text-[#434243] font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.reviews}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;