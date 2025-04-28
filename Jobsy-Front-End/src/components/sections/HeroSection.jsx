import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-[#1E293B] text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Find Trusted Workers for Any Job
        </h1>
        <p className="text-md text-gray-300 mb-2 uppercase tracking-widest">
          Fast • Reliable • Secure
        </p>
        <p className="text-xl mb-8">
          Connect with skilled professionals and get your work done quickly and
          safely.
        </p>
        <div className="space-x-4">
          <Link to="/login">
            <button className="bg-[#F97316] cursor-pointer hover:bg-[#EA580C] text-white px-6 py-3 rounded-lg font-semibold transition">
              Request a Worker
            </button>
          </Link>
          <Link to="/about">
            <button className="bg-[#1E40AF] cursor-pointer hover:bg-[#1E3A8A] text-white px-6 py-3 rounded-lg font-semibold transition">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
