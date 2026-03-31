import insta from '../assets/Instagram.png'
import facebook from '../assets/Facebook.png'
import linkedin from '../assets/linkedin.png'
const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-gray-400 py-16">
      
      <div className="max-w-4xl mx-auto  flex flex-col md:flex-row p-10 md:p-0 justify-between items-start gap-12">
        
        
        <div className="md:col-span-2">
          <h2 className="text-white text-2xl font-bold">DigiTools</h2>
          <p className="mt-4 text-sm ">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm text-[#FFFFFF]">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-[#FFFFFF]">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-[#FFFFFF]">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-3">Social Links</h3>
          <div className="flex gap-3 mt-2">
            
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white hover:text-black transition">
              <img src={insta} alt="" />
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ">
              <img src={facebook} alt="" />
            </div>

            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center ">
              <img src={linkedin} alt="" />
            </div>

          </div>
        </div>

      </div>

      
      <div className="max-w-6xl mx-auto px-4 mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between text-sm">
        
        <p className="text-white">© 2026 Digitools. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0 text-white">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;