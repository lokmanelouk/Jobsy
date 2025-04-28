const BlogSection = () => {
    const posts = [
      {
        title: "Top 5 Tips to Hire the Best Plumber",
        excerpt: "Learn how to identify qualified plumbing professionals...",
        date: "May 15, 2023"
      },
      {
        title: "How to Stay Safe When Hiring Online",
        excerpt: "Essential safety checklist for hiring service workers...",
        date: "April 28, 2023"
      }
    ];
  
    return (
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
            Helpful Articles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-[#1E40AF] hover:text-[#1E3A8A] font-medium">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default BlogSection