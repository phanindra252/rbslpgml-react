import Carousel from "./carousel";
import Testimonials from "./testimonials";
import Services from "./services";
import Customers from "./customers";

const Home = () => {
  return (
    <div>
      <Carousel />
      <section id="services">
        <Services />
      </section>
      <Testimonials />
      <section id="customers">
        <Customers />
      </section>
    </div>
  );
};

export default Home;
