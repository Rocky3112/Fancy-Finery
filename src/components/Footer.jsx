import Logo from "../../public/logo.png";
import "./Header.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-gray-800 text-white p-8 md:px-16 md:py-12">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center mb-2 md:mb-0 gap-3">
          <img className="h-16 w-16 rounded-full" src={Logo} alt="" />
          <h1 className="text-3xl font-bold italic text-green-500">
          Fancy Finery
          </h1>
        </div>
        <div className="mt-4 md:mb-0">
          <h5 className="text-lg font-medium text-green-500 mb-3">COMPANY</h5>
          <ul className="flex flex-col gap-2">
            <li>About us</li>
            <li>Careers</li>
            <li>Affiliates</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="mt-4 md:mb-0">
          <h5 className="text-lg font-medium text-green-500 mb-3">SHOP</h5>
          <ul className="flex flex-col gap-2">
            <li>New Arrivals</li>
            <li>Accessories</li>
            <li>sets & Single</li>
          </ul>
        </div>
        <div className="mt-4 md:mb-0">
          <h5 className="text-lg font-medium text-green-500 mb-3">SUPPORT</h5>
          <ul className="flex flex-col gap-2">
            <li>Contact Us</li>
            <li>Returns</li>
            <li>FAQ</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="mt-4 md:mb-0">
          <h5 className="text-lg font-medium text-green-500 mb-3">LEGAL</h5>
          <ul className="flex flex-col gap-2">
            <li>Terms & Conditions</li>
            <li>Privacy & Cookies</li>
            <li>Legal Issues</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 mb-3">
      <hr />
      </div>
      <p className="text-center mt-6">
      &copy; {currentYear} Fancy Finery. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
