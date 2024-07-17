import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <img src="/Images/SPORT3.png" alt="Logo" className="h-10 mb-4 mx-auto md:mx-0" />
            <p className="max-w-xs mx-auto md:mx-0">Making the world a better place through constructing elegant hierarchies.</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="hover:text-primary"><FaFacebookF className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><FaInstagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><FaTwitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><FaGithub className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary"><FaYoutube className="h-6 w-6" /></a>
            </div>
          </div>
          <div className="flex flex-wrap justify-around w-full md:w-auto">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h6 className="font-semibold mb-4">Solutions</h6>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-primary">Marketing</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Analytics</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Commerce</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Insights</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left mb-6 md:mb-0 mx-8">
              <h6 className="font-semibold mb-4">Support</h6>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-primary">Pricing</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Documentation</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Guides</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">API Status</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h6 className="font-semibold mb-4">Company</h6>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-primary">About</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Blog</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Jobs</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Press</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Partners</a></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h6 className="font-semibold mb-4">Legal</h6>
              <ul>
                <li className="mb-2"><a href="#" className="hover:text-primary">Claim</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Privacy</a></li>
                <li className="mb-2"><a href="#" className="hover:text-primary">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
