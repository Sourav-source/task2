import React from 'react';

const MarqueeFeatures = () => {
  const features = [
    {
      id: 1,
      icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113540/feature-leadcrm-6.webp",
      text: (
        <span className="text-sm text-gray-600 font-medium">
          Access to <span className="text-base text-gray-950 font-bold">700M+ Contacts</span>
        </span>
      )
    },
    {
      id: 2,
      icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113542/feature-leadcrm-1.webp",
      text: (
        <span className="text-base text-gray-950 font-bold">
          One Click Push <span className="text-sm text-gray-600 font-medium">to CRM</span>
        </span>
      )
    },
    {
      id: 3,
      icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113543/feature-leadcrm-2.webp",
      text: (
        <span className="text-base text-gray-950 font-bold">
          Custom Field <span className="text-sm text-gray-600 font-medium">Mapping</span>
        </span>
      )
    },
    {
      id: 4,
      icon: "https://img.leadcrm.io/wp-content/uploads/2025/07/10113545/feature-leadcrm-4.webp",
      text: (
        <span className="text-sm text-gray-600">
          Advanced Waterfall <span className="text-base text-gray-950 font-bold">Enrichment</span>
        </span>
      )
    }
  ];

  const FeatureItem = ({ icon, text }) => (
    <div className="flex items-center justify-center gap-3 flex-shrink-0 whitespace-nowrap">
      <img src={icon} className="w-8 h-8" alt="Feature icon" />
      {text}
    </div>
  );

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden whitespace-nowrap">
          <div 
            className="inline-flex gap-8 animate-marquee"
            style={{
              animation: 'marquee 30s linear infinite'
            }}
          >
            {/* First set of features */}
            {features.map((feature) => (
              <FeatureItem key={feature.id} icon={feature.icon} text={feature.text} />
            ))}
            
            {/* Duplicate set for seamless loop */}
            {features.map((feature) => (
              <FeatureItem key={`duplicate-${feature.id}`} icon={feature.icon} text={feature.text} />
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default MarqueeFeatures;