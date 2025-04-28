// components/Layout.jsx
import ScrollProgress from './ScrollProgress';

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <ScrollProgress /> {/* ← Add this line */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};