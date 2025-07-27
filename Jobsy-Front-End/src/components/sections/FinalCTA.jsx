import { Link } from "react-router-dom";

const FinalCTA = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-[#1E40AF] to-[#1E293B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to find your worker?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Post your job today and get matched with top-rated professionals in minutes!
          </p>
          <Link
            to="/workers"
            className="inline-block bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    );
  };

export default FinalCTA