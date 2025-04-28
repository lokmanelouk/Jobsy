import HeroSection from "../sections/HeroSection";
import Sidebar from "../layouts/SideBar";
import HowItWorks from "../sections/HowItWorks";
import TopCategories from "../sections/TopCategories";
import FeaturedWorkers from "../sections/FeaturedWorkers";
import Testimonials from "../sections/Testimonials";
import FinalCTA from "../sections/FinalCTA";
import Statistics from "../sections/Statistics";
import BlogSection from "../sections/BlogSection";
import Newsletter from "../sections/Newsletter";
import FAQSection from "../sections/FAQSection";
import { motion } from "framer-motion";
import ScrollProgress from "../layouts/ScrollProgress";

function HomePage() {
  return (
    <>
      <main className="relative">
        <Sidebar />
        <ScrollProgress />
        {/* Hero Section - No animation needed (first visible element) */}
        <section id="hero">
          <HeroSection />
        </section>
        {/* Animated Sections */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          id="how-it-works"
        >
          <HowItWorks />
        </motion.section>
        <Statistics /> {/* No animation for stats (small component) */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          id="categories"
        >
          <TopCategories />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          id="featured-workers"
        >
          <FeaturedWorkers />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          id="testimonials"
        >
          <Testimonials />
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          id="faq"
        >
          <FAQSection />
        </motion.section>
        {/* Blog - Optional (no animation if content is heavy) */}
        <section id="blog">
          <BlogSection />
        </section>
        {/* Final CTA - Strong visual impact */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          id="cta"
        >
          <FinalCTA />
        </motion.section>
      </main>
    </>
  );
}

export default HomePage;
