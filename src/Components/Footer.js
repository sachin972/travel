import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-10 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between text-gray-700 w-full">
        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h2 className="text-lg font-bold">OUTDOORZZZ</h2>
          <p>Address line 1</p>
          <p>Address line 2</p>
          <p>India </p>
          <p>
            <a href="mailto:info@outdoor.ch" className="text-blue-600">
              info@OUTDOORZZZ.ch
            </a>
          </p>
          <p>0091 1234567890</p>
        </div>

        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h2 className="text-lg font-bold">Legal Information</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Safety
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Imprint
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h2 className="text-lg font-bold">Resources</h2>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Trip Photos
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Photo and Video Packages
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                The OUTDOORZZZ Academy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Millet Expert Store
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Outdoor Awards
              </a>
            </li> */}
            <li>
              <a href="#" className="hover:underline">
                OUTDOORZZZ Blogs
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Swisstainable
              </a>
            </li> */}
            <li>
              <a href="#" className="hover:underline">
                Media
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Jobs
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">
                Geschäftsbericht 2021
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Geschäftsbericht 2022
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Geschäftsbericht 2023
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reportage: General Assembly Outdoor
              </a>
            </li> */}
          </ul>
        </div>

        <div className="mb-6 md:mb-0 w-full md:w-1/4">
          <h2 className="text-lg font-bold">Follow us on:</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <FaYoutube />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <FaPinterestP />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 mt-6">
        <p>© 2024 OUTDOORZZZ India</p>
        <p>Language selection: English</p>
      </div>
    </footer>
  );
};

export default Footer;
