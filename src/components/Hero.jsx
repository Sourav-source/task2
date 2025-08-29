import React from "react";
import MarqueeFeatures from "./MarqueeFeatures ";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center border-[1px] border-[#12B1DC] text-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08045258/rocket-icon.svg"
              alt="rocket"
              className="w-4 h-4 mr-2"
            />
            Thousands of Professional using LeadCRM
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            LinkedIn CRM Integration
            <br />
            Capture, Sync and Enrich in{" "}
            <span className="text-[#12B1DC]">
              Both Ways{" "}
              <img
                src="https://img.leadcrm.io/wp-content/uploads/2025/07/08050121/line-1.webp"
                alt=""
                className="ml-auto w-[250px]"
              />
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Automatically sync LinkedIn prospects to your CRM and overlay
            existing CRM contacts on LinkedIn profiles. Integrated
            bi-directional integrations with HubSpot, Salesforce, and
            Pipedrive.
          </p>

          <div className="flex items-center justify-between bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl px-8 py-6 max-w-[500px] mx-auto shadow-lg">
            <div className="text-gray-800 text-3xl font-semibold">
              Works with
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/01/24122951/HubSpot.webp"
                  alt="HubSpot"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center shadow-md">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/01/24122946/Pipedrive.webp"
                  alt="P Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/01/24122947/Salesforce.webp"
                  alt="Salesforce"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>

          <img
            src="https://img.leadcrm.io/wp-content/uploads/2025/07/08062823/ratings-section-1024x103.webp"
            alt=""
            className="mb-12 mt-12 m-auto"
            width="340"
            height="65"
          />

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg flex items-center gap-3">
              Chrome Web Store
              <img
                src="https://static.vecteezy.com/system/resources/previews/022/484/505/non_2x/google-chrome-icon-logo-symbol-free-png.png"
                alt="chrome"
                className="h-8 w-8 rounded-full"
              />
            </button>
            <button className="bg-green-500 text-gray-800 px-8 py-4 rounded-lg hover:bg-green-600 transition-colors font-medium text-lg">
              Get a Free Trial Now!
            </button>
          </div>
        </div>
      </div>

      <MarqueeFeatures />
    </section>
  );
};

export default Hero;