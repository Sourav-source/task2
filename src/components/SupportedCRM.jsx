import React from "react";

const SupportedCRM = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Supported CRM
          </h2>
          <p className="text-lg text-gray-600">
            Sync complete LinkedIn profiles and use our flexible field mapping
            to ensure every detail, from job history to contact info,
            populates exactly where you need it, creating a perfectly
            organized CRM automatically.
          </p>
        </div>
        
        <img
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-1536x636.png"
          alt="Supported CRMs"
          width="1536"
          height="636"
          className="mx-auto px-4 sm:px-6 lg:px-8"
        />
        
        <div className="text-center mt-8">
          <button className="bg-[#B3FC6A] text-[#0A0E06] px-8 py-4 rounded-lg hover:bg-[#8DC753] transition-colors font-semibold text-lg inline-flex items-center">
            Lets integrate your CRM Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SupportedCRM;