// import React from 'react';
// import footer_logo from './assets/logo_big.png';
// import insticon from './assets/instagram_icon.png';
// import pintrest from './assets/pintester_icon.png';
// import whatsapp from './assets/whatsapp_icon.png';
// import { Link } from 'react-router-dom';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// const Footer = () => {
//   return (
//     <div
//       className='flex flex-col justify-center items-center gap-10 pt-24 px-5'
//       style={{
//         background: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))',
//       }}
//     >
//       <Link to='/'>
//         <div className='flex items-center gap-5 cursor-pointer'>
//           <img className='w-16 h-auto' src={footer_logo} alt="Footer Logo" />
//           <p className='text- text-3xl md:text-4xl font-bold'>Shopper's Stop</p>
//         </div>
//       </Link>

//       <ul className='footer-links flex flex-wrap justify-center gap-5 md:gap-10 text- list-none text-base md:text-lg'>
//         <li className='cursor-pointer'>Company</li>
//         <li className='cursor-pointer'>Products</li>
//         <li className='cursor-pointer'>Offices</li>
//         <li className='cursor-pointer'>About</li>
//         <li className='cursor-pointer'>Contact</li>
//       </ul>

//       <div className='flex justify-center gap-5'>
//         <div className='p-2 cursor-pointer'>
//           <InstagramIcon fontSize="large" />
//         </div>
//         <div className='p-2 cursor-pointer'>
//           <PinterestIcon fontSize="large" />
//         </div>
//         <div className='p-2 cursor-pointer'>
//           <WhatsAppIcon fontSize="large" />
//         </div>
//       </div>

//       <div className='flex flex-col items-center gap-6 w-full mb-8 text-[#1a1a1a] text-base md:text-lg'>
//         <div className="w-[90%] md:w-[80%] h-[3px] bg-[#57697b99] mt-6"></div>
//         <hr className='w-[90%] md:w-[80%] border-none rounded-[10px] h-[3px] text-[#000000cc]' />
//         <p className='text-center'>Copyright @ 2024 - All Right Reserved</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';
import footer_logo from './assets/logo_big.png';
import insticon from './assets/instagram_icon.png';
import pintrest from './assets/pintester_icon.png';
import whatsapp from './assets/whatsapp_icon.png';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const Footer = () => {
  const footerSections = [
    {
      title: "Shop",
      links: ["Men", "Women", "Kids", "New Arrivals", "Sale"]
    },
    {
      title: "Customer Service",
      links: ["Contact Us", "FAQs", "Shipping & Returns", "Size Guide", "Track Order"]
    },
    {
      title: "About Us",
      links: ["Our Story", "Careers", "Press", "Corporate Responsibility", "Investor Relations"]
    }
  ];

  const socialIcons = [
    { name: "facebook", icon: "fab fa-facebook" },
    { name: "instagram", icon: "fab fa-instagram" },
    { name: "pinterest", icon: "fab fa-pinterest" },
    { name: "whatsapp", icon: "fab fa-whatsapp" }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'
    }} className="text-black py-8">
  
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-red-500">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialIcons.map((social, index) => (
                <a key={index} href="#" className="text-2xl hover:text-red-500">
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
            <h4 className="font-semibold mb-2">Sign up for our newsletter</h4>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="p-2 w-full border border-gray-300 rounded-l-md"
              />
              <button 
                type="submit" 
                className="bg-red-500 text-white px-4 rounded-r-md hover:bg-red-600"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className='flex justify-center gap-5'>
       <div className='p-2 cursor-pointer'>
         <InstagramIcon fontSize="large" />
     </div>
         <div className='p-2 cursor-pointer'>
           <PinterestIcon fontSize="large" />
         </div>
        <div className='p-2 cursor-pointer'>
          <WhatsAppIcon fontSize="large" />
       </div>
    </div> 
        <div className="mt-8 pt-8 border-t border-gray-300 text-center">
          <p>&copy; 2024 Shopper's Stop - All Rights Reserved</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-red-500">Privacy Policy</a>
            <a href="#" className="hover:text-red-500">Terms of Service</a>
            <a href="#" className="hover:text-red-500">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
