import React from 'react';
import heroimg from '../components/assets/heroimg.webp';
const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">About Shopper's Stop</h1>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xl mb-6">
              Welcome to Shopper's Stop, your ultimate destination for the latest fashion trends and stylish collections for everyone.
            </p>
            <p className="text-lg mb-6">
              Since our inception, we've been dedicated to bringing you new arrivals and exciting collections that cater to all tastes and preferences.
            </p>
            <p className="text-lg mb-6">
              Our mission is to make fashion accessible and enjoyable for all, offering a diverse range of clothing and accessories for men, women, and kids.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={heroimg}
              alt="Fashion Collection" 
              className="rounded-lg shadow-xl"
            />
            {/* <div className="absolute -bottom-4 -left-4 bg-red-600 text-white py-2 px-4 rounded-full text-sm font-bold">
              New Collections
            </div> */}
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Quality', 'Diversity', 'Innovation'].map((value, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{value}</h3>
                <p>We believe in offering the best {value.toLowerCase()} to our customers, ensuring satisfaction with every purchase.</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Latest Collection →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;