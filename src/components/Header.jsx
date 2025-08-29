import React, { useState } from "react";
import { Menu, X, LogIn } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <img
            src="https://www.leadcrm.io/wp-content/uploads/2024/12/LeadCRM-removebg-preview-1.webp"
            alt="LeadCRM"
            width="240px"
            height="84px"
          />

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

          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-[#12B1DC] text-white px-5 py-2 rounded-md hover:bg-[#1797CA] transition-colors font-medium text-sm">
              Get Free Trial/Demo
            </button>
            <button className="text-[#12B1DC] hover:text-[#1797CA] transition-colors font-medium text-sm border-[1px] border-[#12B1DC] hover:border-[#1797CA] px-5 py-2 rounded-md flex items-center gap-2.5">
              <LogIn />
              Login
            </button>
          </div>

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
  );
};

export default Header;