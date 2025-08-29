import React, { useState } from "react";
import { Menu, X, Star, LogIn } from "lucide-react";

const LeadCRMLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}

            <img
              src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
              alt="LeadCRM"
              width="240px"
              height="84px"
            />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Product
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                Pricing
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Resources
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Company
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-[#12B1DC] text-white px-5 py-2 rounded-md hover:bg-[#1797CA] transition-colors font-medium text-sm">
                Get Free Trial/Demo
              </button>
              <button className="text-[#12B1DC] hover:text-[#1797CA] transition-colors font-medium text-sm border-[1px] border-[#12B1DC] hover:border-[#1797CA] px-5 py-2 rounded-md flex items-center gap-2.5">
                <LogIn />
                Login
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <div className="space-y-4">
                <a href="#" className="block text-gray-600 hover:text-gray-900">
                  Product
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">
                  Pricing
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">
                  Resources
                </a>
                <a href="#" className="block text-gray-600 hover:text-gray-900">
                  Company
                </a>
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors font-medium mb-2 text-sm">
                    Get Free Trial/Demo
                  </button>
                  <button className="w-full text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    Login
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center border-[1px] border-[#12B1DC] text-gray-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <img
                src="https://img.leadcrm.io/wp-content/uploads/2025/07/08045258/rocket-icon.svg"
                alt="rocket"
                className="w-4 h-4 mr-2"
              />
              Thousands of Professional using LeadCRM
            </div>

            {/* Main Headline */}
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

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automatically sync LinkedIn prospects to your CRM and overlay
              existing CRM contacts on LinkedIn profiles. Integrated
              bi-directional integrations with HubSpot, Salesforce, and
              Pipedrive.
            </p>

            {/* Integration Icons */}

            <div className="flex items-center justify-between bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl px-8 py-6 max-w-[500px] mx-auto shadow-lg">
              {/* Works with text */}
              <div className="text-gray-800 text-3xl font-semibold">
                Works with
              </div>

              {/* Logo container */}
              <div className="flex items-center space-x-6">
                {/* HubSpot Logo */}
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="https://img.leadcrm.io/wp-content/uploads/2025/01/24122951/HubSpot.webp"
                    alt="HubSpot"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Second Logo (Pipe drive logo) */}
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="https://img.leadcrm.io/wp-content/uploads/2025/01/24122946/Pipedrive.webp"
                    alt="P Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                {/* Salesforce Logo */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="https://img.leadcrm.io/wp-content/uploads/2025/01/24122947/Salesforce.webp"
                    alt="Salesforce"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Star Ratings */}
            <img
              src="https://img.leadcrm.io/wp-content/uploads/2025/07/08062823/ratings-section-1024x103.webp"
              alt=""
              className="mb-12 mt-12 m-auto"
              width="340"
              height="65"
            />

            {/* CTA Buttons */}
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

        {/* Trust Indicators */}
        <MarqueeFeatures />
      </section>

      {/* Challenges Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every LinkedIn Prospector faces these daily challenges
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Problems */}
            <div className="space-y-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 h-[640px]">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/07/08084651/Without-LeadCRM-768x299.webp"
                  alt=""
                  width="640"
                  height="249"
                />
                <h3 className="font-bold text-[#D34F6B] mb-4 text-2xl mt-4">
                  Without LeadCRM
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="https://img.leadcrm.io/wp-content/uploads/2025/07/08091339/cross.webp"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Manual Data Entry{" "}
                        <span className="font-normal text-red-500 bg-red-200 py-1 px-2.5 rounded-2xl text-sm ml-2">
                          3+ Hours wasted daily
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Copying LinkedIn contacts to CRM manually plus losing
                        conversation history
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="https://img.leadcrm.io/wp-content/uploads/2025/07/08091339/cross.webp"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Incomplete Data{" "}
                        <span className="font-normal text-red-500 bg-red-200 py-1 px-2.5 rounded-2xl text-sm ml-2">
                          60% Data Incomplete
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        LinkedIn profiles missing Email and Phones from 700M+
                        Database
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="https://img.leadcrm.io/wp-content/uploads/2025/07/08091339/cross.webp"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        No CRM Visibility{" "}
                        <span className="font-normal text-red-500 bg-red-200 py-1 px-2.5 rounded-2xl text-sm ml-2">
                          Zero context available
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Can’t see existing CRM contacts when browsing LinkedIn
                        profiles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="https://img.leadcrm.io/wp-content/uploads/2025/07/08091339/cross.webp"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Limited Productivity{" "}
                        <span className="font-normal text-red-500 bg-red-200 py-1 px-2.5 rounded-2xl text-sm ml-2">
                          No smart assistance
                        </span>
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Writing messages manually plus no AI assistant for
                        reply, Invite or comments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Solutions */}
            <div className="space-y-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/07/08100321/With-LeadCRM-768x299.webp"
                  alt=""
                  width="640"
                  height="249"
                />
                <h3 className="font-bold text-gray-900 mb-4 text-2xl mt-4">
                  With LeadCRM
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="https://img.leadcrm.io/wp-content/uploads/2025/07/16081050/with-leadcrm-section-1.webp"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Complete Bi-Directional Sync
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Automatically sync contacts, messages, and notes between
                        LinkedIn and your CRM in real time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="https://img.leadcrm.io/wp-content/uploads/2025/07/16081051/with-leadcrm-section-2.webp"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        700M+ Contacts + Enrichment
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Get verified emails and phone numbers from a vast global
                        database.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="https://img.leadcrm.io/wp-content/uploads/2025/07/16081052/with-leadcrm-section-3.webp"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        CRM Overlay on LinkedIn
                      </h4>
                      <p className="text-gray-600 text-sm">
                        See full CRM insights directly on LinkedIn profiles
                        without switching tabs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                      <img
                        src="https://img.leadcrm.io/wp-content/uploads/2025/07/16081049/with-leadcrm-section-4.webp"
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        AI Response + Templates + Bulk Exports
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Save time with AI-crafted replies, pre-built templates,
                        and one-click data exports.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className=" p-8 max-w-md mx-auto">
              {/* <h3 className="font-bold text-gray-900 text-lg mb-2">
                One-Click Setup
              </h3> */}
              {/* <p className="text-gray-600 mb-4">Away 10+ hours every Month</p> */}
              <button className="w-full bg-[#B3FC6A] text-[#0A0E06] px-3 py-3 rounded-lg hover:bg-[#8DC753] transition-colors font-medium">
                Start Using LeadCRM Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
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
            {/* Step 1 */}
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Step Number */}
              <div className="bg-gray-50 p-4 text-center">
                <div className="text-6xl font-bold text-teal-500 mb-4">1</div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Install the Extension
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure
                  and seamless.
                </p>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src="https://img.leadcrm.io/wp-content/uploads/2025/07/08131216/install-the-extension.webp"
                    alt="Install the Extension"
                    className="w-full max-w-[295px] h-[212px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Step Number */}
              <div className="bg-gray-50 p-4 text-center">
                <div className="text-6xl font-bold text-teal-500 mb-4">2</div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Browse LinkedIn
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Use LinkedIn normally, our extension auto-captures data and
                  reveals CRM contacts instantly.
                </p>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132934/Browse-LinkedIn-768x533.webp"
                    alt="Install the Extension"
                    className="w-full max-w-[295px] h-[212px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Step Number */}
              <div className="bg-gray-50 p-4 text-center">
                <div className="text-6xl font-bold text-teal-500 mb-4">3</div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Enriched Data
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Enrich profiles with verified emails, phones, and company data
                  with 95%+ accuracy guaranteed.
                </p>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132935/Get-Enriched-Data-768x551.webp"
                    alt="Install the Extension"
                    className="w-full max-w-[295px] h-[212px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Step 4 */}
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Step Number */}
              <div className="bg-gray-50 p-4 text-center">
                <div className="text-6xl font-bold text-teal-500 mb-4">4</div>
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Sync to CRM Instantly
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  Prospect data syncs to your CRM instantly with history,
                  tracking, and AI powered insights for better follow ups.
                </p>

                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src="https://img.leadcrm.io/wp-content/uploads/2025/07/08132933/Sync-to-CRM-Instantly-768x418.webp"
                    alt="Install the Extension"
                    className="w-full max-w-[295px] h-[212px] rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
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

      {/* Testimonials Section */}
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
            {/* Testimonial 1 */}
            <div className="bg-[#F9F0F8] rounded-2xl p-8 h-[350px]">
              <div className="mb-6">
                <p className="text-[#434243] leading-relaxed font-bold text-sm">
                  "Reliable Data Sync I've only had to refresh the extension a
                  couple of times. The multi-contact enrichment is still a huge
                  plus, and support is very responsive."
                </p>
              </div>
              <div className="flex items-center mb-16">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/02/18104714/capterra-icon.png"
                  alt=""
                  srcset=""
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
                    src="https://img.leadcrm.io/wp-content/uploads/2025/02/18121000/Avatar-Users2_17.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div>
                  <h4 className="text-[#434243] font-bold text-lg">
                    David Fincher
                  </h4>
                  <p className="text-gray-500 text-sm">6 reviews</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F9F0F8] rounded-2xl p-8 h-[350px]">
              <div className="mb-6">
                <p className="text-[#434243] leading-relaxed font-bold text-sm">
                  "My experience with LeadCRM has been excellent. It has
                  streamlined my workflow, improved lead tracking, and made
                  follow-ups more efficient. The responsive customer support is
                  a big plus. Highly recommend for personal lead management."
                </p>
              </div>
              <div className="flex items-center mb-8">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/02/18104715/google-icon.png"
                  alt=""
                  srcset=""
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
                    src="https://img.leadcrm.io/wp-content/uploads/2025/02/18121000/Avatar-Users2_17.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div>
                  <h4 className="text-[#434243] font-bold text-lg">
                    Lillian Williams
                  </h4>
                  <p className="text-gray-500 text-sm">15 reviews</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F9F0F8] rounded-2xl p-8 h-[350px]">
              <div className="mb-6">
                <p className="text-[#434243] leading-relaxed font-bold text-sm">
                  "Reliable Data Sync I've only had to refresh the extension a
                  couple of times. The multi-contact enrichment is still a huge
                  plus, and support is very responsive."
                </p>
              </div>
              <div className="flex items-center mb-16">
                <img
                  src="https://img.leadcrm.io/wp-content/uploads/2025/02/18104714/capterra-icon.png"
                  alt=""
                  srcset=""
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
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4">
                  <img
                    src="https://img.leadcrm.io/wp-content/uploads/2025/02/18121000/Avatar-Users2_17.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div>
                  <h4 className="text-[#434243] font-bold text-lg">Michael</h4>
                  <p className="text-gray-500 text-sm">3 reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete LinkedIn Sales Solutions Section */}
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
            {/* Tabs */}
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

            {/* Image View (same for desktop + mobile) */}
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
        </div>
        <img
          src="https://img.leadcrm.io/wp-content/uploads/2025/07/11082644/leadcrm-supported-1536x636.png"
          alt=""
          srcset=""
          width="1536"
          height="636"
          className="mx-auto px-4 sm:px-6 lg:px-8"
        />
      <div className="text-center">
            <button className="bg-[#B3FC6A] text-[#0A0E06] px-8 py-4 rounded-lg hover:bg-[#8DC753] transition-colors font-semibold text-lg inline-flex items-center">
              Lets interate your CRM Now!
            </button>
          </div>
      </section>

     <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
             Turn Your LinkedIn into a Revenue Engine.
            </h2>
           <h2 className="text-3xl md:text-2xl sm:text-xl font-bold text-white relative z-10 -mb-28 md:-mb-32">
                    Your LinkedIn Powerhouse for Smarter Lead Management
                </h2>
          </div>
        </div>
               <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
                src="https://img.leadcrm.io/wp-content/uploads/2025/07/11083207/Product-hunt-banner-image.webp"
                alt="LinkedIn Revenue Engine Dashboard"
                width="1536"
                height="636"
                className="w-full h-auto rounded-lg shadow-xl"
            />
        </div>

      <div className="text-center mt-5">
            <button className="bg-[#B3FC6A] text-[#0A0E06] px-8 py-4 rounded-lg hover:bg-[#8DC753] transition-colors font-semibold text-lg inline-flex items-center">
             Get Started 
             Today
            </button>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Description */}
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

              {/* Social Links */}
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

            {/* Integrations */}
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

            {/* Alternatives */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Alternative</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Sales VS LeadCRM</li>
                <li>LinkedHelper Alternative</li>
              </ul>
            </div>

            {/* Legal & Contact */}
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

          {/* Chrome Extension Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg">
              <span className="text-sm mr-2">Available in</span>
              <span className="font-semibold">Chrome</span>
            </div>
          </div>

          {/* Bottom Text */}
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
    </div>
  );
};

export default LeadCRMLandingPage;
