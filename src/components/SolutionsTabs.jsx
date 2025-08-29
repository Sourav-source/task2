import React, { useState } from "react";

const SolutionsTabs = () => {
  const [activeTab, setActiveTab] = useState("enrichment");

  const tabs = [
    {
      id: "enrichment",
      label: "CRM Data Enrichment",
      img1: "https://img.leadcrm.io/wp-content/uploads/2025/07/09101433/CRM-Data-Enrichment-d-1024x619.png",
      img2: "https://img.leadcrm.io/wp-content/uploads/2025/07/09101012/CRM-Data-Enrichment-1024x632.webp",
      logo: "https://img.leadcrm.io/wp-content/uploads/2025/07/11073852/tab-icon-3.webp",
    },
    {
      id: "sync",
      label: "CRM Data Sync",
      img1: "https://img.leadcrm.io/wp-content/uploads/2025/07/11075917/CRM-Data-Sync.png",
      img2: "https://img.leadcrm.io/wp-content/uploads/2025/07/11080104/CRM-Data-Sync-1.png",
      logo: "https://img.leadcrm.io/wp-content/uploads/2025/07/11073853/tab-icon-4.webp",
    },
    {
      id: "bulk",
      label: "Bulk Export & Enrichment",
      img1: "https://img.leadcrm.io/wp-content/uploads/2025/07/11075922/Bulk-Export-Enrichment.png",
      img2: "https://img.leadcrm.io/wp-content/uploads/2025/07/11075921/Bulk-Export-Enrichment-1.png",
      logo: "https://img.leadcrm.io/wp-content/uploads/2025/07/11073851/tab-icon-2.webp",
    },
    {
      id: "ai",
      label: "AI Productivity",
      img1: "https://img.leadcrm.io/wp-content/uploads/2025/05/28111308/AI-Comment-image-1-1024x804.webp",
      img2: "https://img.leadcrm.io/wp-content/uploads/2025/05/29113839/Template-imges-2-1024x705.webp",
      logo: "https://img.leadcrm.io/wp-content/uploads/2025/07/11073854/tab-icon-1.webp",
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Complete LinkedIn Sales Solutions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need for professional LinkedIn prospecting
          </p>
        </div>

        <div className="w-full bg-white">
          <div className="flex justify-center gap-4 md:gap-8 py-4 text-sm md:text-base font-medium text-gray-600 border-b flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-1 flex items-center gap-1 ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "hover:text-blue-600"
                }`}
              >
                <img src={tab.logo} alt="" />  <p>{tab.label}</p>
              </button>
            ))}
          </div>

          <div className="flex justify-center px-4 py-6 gap-2.5">
            <img
              src={tabs.find((t) => t.id === activeTab)?.img1}
              alt={activeTab}
              className=" rounded-xl shadow-lg"
              width='40%'
            />
            <img
              src={tabs.find((t) => t.id === activeTab)?.img2}
              alt={activeTab}
              className=" rounded-xl shadow-lg"
              width='40%'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsTabs;