import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Install the Extension",
      description: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
      image: "https://img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp"
    },
    {
      number: 2,
      title: "Browse LinkedIn",
      description: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
      image: "https://img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn-768x533.webp"
    },
    {
      number: 3,
      title: "Get Enriched Data",
      description: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
      image: "https://img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data-768x551.webp"
    },
    {
      number: 4,
      title: "Sync to CRM Instantly",
      description: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
      image: "https://img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly-768x418.webp"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          <p className="text-lg text-gray-600">
            From setup to success in{" "}
            <span className="font-semibold">4 simple steps</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step) => (
            <div key={step.number} className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 p-4 text-center">
                <div className="text-6xl font-bold text-teal-500 mb-4">{step.number}</div>
              </div>

              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">{step.description}</p>

                <div className="flex justify-center">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full max-w-[295px] h-[212px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#B3FC6A] text-[#0A0E06] px-8 py-4 rounded-lg hover:bg-[#8DC753] transition-colors font-semibold text-lg inline-flex items-center">
            Try LeadCRM Now
            <svg
              className="w-5 h-5 ml-2"
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
    </section>
  );
};

export default HowItWorks;