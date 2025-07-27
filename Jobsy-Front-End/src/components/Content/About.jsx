import { FaUsers, FaHandshake, FaChartLine, FaLightbulb, FaShieldAlt, FaSmile, FaMedal, FaHeart, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";

const About = () => {
  const features = [
    {
      icon: <FaUsers className="text-4xl text-[#F97316] mb-4" />,
      title: "10,000+ Skilled Professionals",
      description: "Our growing network includes electricians, plumbers, cleaners, movers, and hundreds of other service categories. Each professional is vetted through our rigorous verification process."
    },
    {
      icon: <FaHandshake className="text-4xl text-[#F97316] mb-4" />,
      title: "Trusted by 50,000+ Clients",
      description: "From small home repairs to major renovations, we've facilitated over 100,000 successful jobs with a 97% satisfaction rate across all completed projects."
    },
    {
      icon: <FaChartLine className="text-4xl text-[#F97316] mb-4" />,
      title: "Transparent & Fair Pricing",
      description: "No more guessing games! See upfront costs, compare quotes, and choose the best option for your budget with our price transparency guarantee."
    },
    {
      icon: <FaLightbulb className="text-4xl text-[#F97316] mb-4" />,
      title: "Smart Matching Technology",
      description: "Our AI-powered system analyzes your needs and matches you with the perfect professional in seconds, saving you hours of research and phone calls."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-[#F97316] mb-4" />,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely happy with the service, we'll work to make it right. Your peace of mind is our top priority."
    },
    {
      icon: <FaMedal className="text-4xl text-[#F97316] mb-4" />,
      title: "Top-Rated Professionals",
      description: "Only 15% of applicants pass our screening process. We maintain high standards so you get exceptional service every time."
    }
  ];

  const stats = [
    { value: "100K+", label: "Completed Jobs" },
    { value: "97%", label: "Satisfaction Rate" },
    { value: "4.9★", label: "Average Rating" },
    { value: "15min", label: "Average Response Time" }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E40AF] to-[#1E293B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story: More Than Just a Service Platform</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Jobsy began in 2018 when our founder struggled to find a reliable plumber on short notice. 
            Today, we're revolutionizing how France connects with local service professionals.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team working together"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#1E293B] mb-6">Why We Exist</h2>
              <p className="text-gray-600 text-lg mb-6">
                In a world where time is precious and quality service is hard to find, Jobsy bridges the gap between 
                skilled professionals and clients who need their expertise. We're not just a platform - we're a 
                community built on trust, quality, and mutual respect.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Our mission is to eliminate the stress of finding reliable help while creating meaningful 
                opportunities for skilled workers to grow their businesses. Whether you're a homeowner with 
                a leaky faucet or a professional electrician looking for clients, we've designed Jobsy to 
                make your life easier.
              </p>
              <div className="bg-[#E0F2FE] p-4 rounded-lg border-l-4 border-[#1E40AF]">
                <p className="text-[#1E293B] italic">
                  "We believe everyone deserves access to quality services, and every skilled professional 
                  deserves a fair chance to showcase their work."
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-[#F9FAFB] rounded-xl p-8 mb-16">
            <h3 className="text-2xl font-semibold text-center text-[#1E293B] mb-8">Jobsy in Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <p className="text-4xl font-bold text-[#F97316] mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center text-[#1E293B] mb-8">How Jobsy Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-5xl font-bold text-[#1E40AF] mb-4">1</div>
                <h4 className="text-xl font-semibold mb-3">Describe Your Need</h4>
                <p className="text-gray-600">
                  Simply tell us what service you need, when you need it, and any specific requirements. 
                  Our smart system will guide you through the process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-5xl font-bold text-[#1E40AF] mb-4">2</div>
                <h4 className="text-xl font-semibold mb-3">Get Matched</h4>
                <p className="text-gray-600">
                  Within minutes, receive personalized quotes from available professionals in your area. 
                  Compare profiles, ratings, and prices.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-5xl font-bold text-[#1E40AF] mb-4">3</div>
                <h4 className="text-xl font-semibold mb-3">Hire with Confidence</h4>
                <p className="text-gray-600">
                  Choose your preferred professional and book instantly. Payment is only released when 
                  you're completely satisfied with the work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-4">The Jobsy Difference</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            What sets us apart from traditional service marketplaces
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-center text-[#1E293B] mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">What Our Community Says</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#F97316]">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/65.jpg" 
                  alt="Sophie Martin"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Sophie Martin</h4>
                  <div className="flex text-[#FBBF24]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a single mom, finding reliable help was always stressful. Jobsy changed that! 
                The electrician they matched me with was professional, affordable, and even fixed 
                an issue I didn't know about. I'll never go back to random Google searches again."
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#F97316]">
              <div className="flex items-center mb-4">
                <img 
                  src="https://randomuser.me/api/portraits/men/42.jpg" 
                  alt="Thomas Lefevre"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">Thomas Lefevre</h4>
                  <div className="flex text-[#FBBF24]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I've been a carpenter for 15 years but struggled to find consistent work. 
                Since joining Jobsy, my schedule stays booked months in advance. The platform 
                handles payments and scheduling so I can focus on my craft. It's been life-changing."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E40AF] to-[#1E293B] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <FaHeart className="text-4xl mx-auto mb-6 text-[#F97316]" />
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Jobsy Difference?</h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied clients and professionals who are transforming the way services 
              are delivered in France.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to='/login' className="bg-white hover:bg-gray-100 text-[#1E40AF] px-8 py-3 rounded-lg font-semibold transition">
                Find a Professional
              </Link>
              <Link to='/login' className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-lg font-semibold transition">
                Join as Professional
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;