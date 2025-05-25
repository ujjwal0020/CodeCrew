import React from "react";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
        
        {/* CodeCrew Title & Tagline (Left) */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">CodeCrew</h2>
          <p className="text-gray-500 mt-2">
            A Platform for Developers to Connect and Collaborate
          </p>
        </div>

        {/* Company Links (Left-Center) */}
        <div>
          <h6 className="font-semibold text-gray-700 mb-2">Company</h6>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-600 hover:underline">About</a></li>
            <li><a href="#" className="hover:text-blue-600 hover:underline">Contact</a></li>
            <li><a href="#" className="hover:text-blue-600 hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:text-blue-600 hover:underline">Press Kit</a></li>
          </ul>
        </div>

        {/* Legal Links (Right-Center) */}
        <div>
          <h6 className="font-semibold text-gray-700 mb-2">Legal</h6>
          <ul className="space-y-1">
            <li><Link to="/termsofuse" className="hover:text-blue-600 hover:underline">Terms of Use</Link></li>
            <li><a href="#" className="hover:text-blue-600 hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 hover:underline">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Contact Info (Right) */}
        <div>
          <h6 className="font-semibold text-gray-700 mb-2">Contact Us</h6>
          <p>
            <a href="mailto:codecrewpvt@gmail.com" className="text-blue-600 hover:underline">
              codecrewpvt@gmail.com
            </a>
          </p>
          <p>📞 +91 7985642356</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} CodeCrew. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
