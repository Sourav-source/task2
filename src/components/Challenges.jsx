import React from "react";

const Challenges = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Every LinkedIn Prospector faces these daily challenges
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                      Can't see existing CRM contacts when browsing LinkedIn
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
            <button className="w-full bg-[#B3FC6A] text-[#0A0E06] px-3 py-3 rounded-lg hover:bg-[#8DC753] transition-colors font-medium">
              Start Using LeadCRM Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;