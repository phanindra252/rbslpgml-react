import { Routes, Route } from "react-router-dom";
import Header from "./header";
import Home from "./Home";
import AboutUspage from "./aboutsuspage";
import Navbar from "./navbar";
import AboutUs from "./aboutus";
import Customers from "./customers";
import Blog from "./blog";
import BlogDetail from "./blogdetail"; // Create this component
import Contactpage from "./contact";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUspage />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-detail/:id" element={<BlogDetail />} />{" "}
            <Route path="/contact" element={<Contactpage />} />
            {/* Route for blog details */}
          </Routes>
        </div>
        <AboutUs />
      </div>
    </>
  );
};

export default App;
