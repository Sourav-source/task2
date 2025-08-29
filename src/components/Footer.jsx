import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
                alt="LeadCRM"
                width="120px"
                height="42px"
              />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              LeadCRM is a LinkedIn integration tool for your CRM.
            </p>

            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">yt</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Integrations</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>HubSpot</li>
              <li>Salesforce</li>
              <li>Pipedrive</li>
              <li>
                Close.io{" "}
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs ml-2">
                  Coming Soon
                </span>
              </li>
              <li>
                Integromat{" "}
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs ml-2">
                  Coming Soon
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Alternative</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Sales VS LeadCRM</li>
              <li>LinkedHelper Alternative</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>

            <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>📧 support@leadcrm.io</li>
              <li>📞 +1 281-210-7468</li>
              <li>🎧 Help Center</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg">
            <span className="text-sm mr-2">Available in</span>
            <span className="font-semibold">Chrome</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            Disclaimer: LeadCRM is not sponsored or certified by LinkedIn. All
            LeadCRM logos and trademarks displayed on this site are property
            of LeadCRM. LeadCRM is disclosed: As part of our LeadCRM in your
            own risk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;