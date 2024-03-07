import { PiMapPin } from "react-icons/pi";
import { FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
  <div className="bg-blue-400 mt-32">
      <div className="max-w-screen-xl mx-auto">
      <footer className="footer p-10 bg-blue-400 text-base-content">
        <aside>
          <h1 className="text-white">Address: <br />
          House-75 Ka, Main <br />
          Rd, Dhaka 1216</h1>
          <div className="flex text-white gap-2">
            <PiMapPin></PiMapPin>
            <p>View On Maps</p>
          </div>
        </aside>
        <nav className="text-white">
          <h6 className="footer-title">About Us</h6>
          <a className="link link-hover">Stories</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Airlines</a>
          <a className="link link-hover">Testimonials</a>
        </nav>
        <nav className="text-white">
          <h6 className="footer-title">Join Us</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Support</a>
        
        </nav>
        <nav className="text-white">
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">+880 1234562890</a>
          <a className="link link-hover">+8801345628980</a>
          <a className="link link-hover">+880 1234562890</a>
          <a className="link link-hover">info@airbook.com</a>
        </nav>
      </footer>
      <div className="w-full h-[1px] bg-white"></div>
      <div className="grid lg:gap-36 gap-4 lg:grid-cols-3 py-8">
        <div>
            <img className="pl-8 lg:pl-0" src="/src/assets/Image/Logo/LOGO.png" alt="" />
        </div>
        <div><h1 className="text-white pl-8 lg:pl-0">@Copyright AIRBOOK</h1></div>
        <div className="flex gap-6 pl-8 lg:pl-0 text-white lg:text-2xl">
            <FaYoutube></FaYoutube>
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
