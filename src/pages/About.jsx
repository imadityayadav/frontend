import React from "react";

const About = () => {
  return (
    <div className="about-page text-gray-800">
      {/* Hero Section */}
      <section
        className="hero-section bg-cover bg-center h-[500px] flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?fashion')",
        }}
      >
        <div className="text-center text-white p-6 bg-black bg-opacity-50 rounded">
          <h1 className="text-4xl font-bold mb-2">Crafting Timeless Fashion</h1>
          <p className="text-xl">Where Style Meets Sustainability</p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="brand-story my-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGy9ULg73dDFsleLPd-5YX5ztOU9n7qywXig&s"
          alt="Our Story"
          className="rounded-lg shadow-lg w-full md:w-1/2"
        />
        <div className="text-content">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg leading-7">
            Our journey started in 2015 with a vision to create fashion that
            blends elegance and comfort. From the beginning, we focused on
            sustainability, using materials that are kind to the environment.
            Over the years, we've grown into a brand known for unique designs
            and high-quality fabrics, all while staying true to our mission of
            responsible fashion.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision my-12 px-6 md:px-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-lg leading-7 mb-4">
            Our mission is to provide ethically made clothing that combines
            style, comfort, and sustainability. We envision a future where
            fashion is not only a means of self-expression but also a force for
            positive change in society and the environment.
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="team-section my-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="team-member text-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHx8fDA%3D"
              alt="Jane Doe"
              className="rounded-full w-40 h-40 mb-4 mx-auto object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p>Lead Designer</p>
          </div>
          <div className="team-member text-center">
            <img
              src="https://images.unsplash.com/photo-1557862921-37829c790f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
              alt="John Smith"
              className="rounded-full w-40 h-40 mb-4 mx-auto object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p>Creative Director</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us / USPs */}
      <section className="why-choose-us my-12 px-6 md:px-20 bg-[#f8f8f8] py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="usp-card p-6 bg-white shadow-md rounded-md w-80 text-center">
            <img
              src="https://webtools.europa.eu/crs/iframe/?oriurl=https%3A%2F%2Facademy.europa.eu%2Fpluginfile.php%2F326438%2Fmod_label%2Fintro%2Fsustainability_course_featuring_visual.png"
              alt="Sustainability"
              className="w-30 h-20 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p>
              We use organic and recycled materials in 80% of our collection to
              minimize environmental impact.
            </p>
          </div>
          <div className="usp-card p-6 bg-white shadow-md rounded-md w-80 text-center">
            <img
              src="https://media.greenmatters.com/brand-img/yaZGvHpzB/0x0/fair-trade-symbol-1603915502843.jpg"
              alt="Fair Trade"
              className="w-30 h-20 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Fair Trade</h3>
            <p>
              Our workers are paid fair wages and work in safe conditions to
              create your favorite garments.
            </p>
          </div>
          <div className="usp-card p-6 bg-white shadow-md rounded-md w-80 text-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5a45ad10f9a61e9df83485bf/1521265843421-7EKAANJG5ENXSTJJBYX8/Unique_Design_LOGO_HJ_001WEB_TUMB+copy.jpg"
              alt="Exclusive Designs"
              className="w-30 h-20 mb-4 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-2">Exclusive Designs</h3>
            <p>
              Limited-edition collections created by emerging designers that are
              exclusive to our brand.
            </p>
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="community-engagement my-12 px-6 md:px-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Community Engagement</h2>
          <p className="text-lg leading-7">
            We're committed to giving back through various initiatives like
            supporting local artisans and donating a percentage of profits to
            environmental causes. Our goal is to make a meaningful difference in
            the communities we serve.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section my-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Experience Quality Fashion?
        </h2>
        <button className="bg-black text-white text-lg py-3 px-8 rounded hover:bg-gray-800 transition">
          <a href="/">Shop Our Collection</a>
        </button>
      </section>
    </div>
  );
};

export default About;
