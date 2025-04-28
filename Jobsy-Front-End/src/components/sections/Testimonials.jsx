const Testimonials = () => {
    const reviews = [
      {
        stars: 5,
        quote: "I found the perfect plumber in just 1 hour! Thank you Jopsy!",
        author: "Emma S., Paris"
      },
      {
        stars: 4,
        quote: "Moving was stress-free thanks to David and his team. Highly recommend!",
        author: "Thomas L., Lyon"
      },
      {
        stars: 5,
        quote: "Electrical work completed same day with perfect results. Will use again!",
        author: "Sophie M., Marseille"
      }
    ];
  
    return (
      <section className="py-16 bg-[#1E293B] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-[#334155] p-6 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < review.stars ? 'text-[#FBBF24]' : 'text-gray-400'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">"{review.quote}"</blockquote>
                <p className="text-[#FBBF24] font-medium">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Testimonials