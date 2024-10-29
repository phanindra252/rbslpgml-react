import { Link } from "react-router-dom"; // Import Link

const AboutUs = () => {
  return (
    <section className="bg-neutral-600 py-12 text-white ">
      <div className="flex flex-col md:flex-row items-start mx-auto max-w-6xl p-4 md:px-6 lg:px-8">
        {/* Text Section */}
        <div className="mb-6 md:mb-0 md:mr-8 flex flex-col justify-center w-8/12">
          <h5 className="font-semibold mb-0 uppercase">About Us</h5>
          <p className="mb-2">
            RBSL is a leading IT consultancy specializing in Datacenter
            management and cloud migration. Our expert team delivers tailored
            solutions across financial services, telecom, utility, and energy
            sectors, leveraging both Agile and Waterfall methodologies.
          </p>
        </div>

        <div className="flex flex-col items-start uppercase">
          <h5 className="font-semibold">CONTACT</h5>
          <p className="flex flex-col text-sm">
            <span>14,</span>
            <span>Poplar Avenue,</span>
            <span>Orpington, BR6 8LA,</span>
            <span>Orpington.</span>
            {/* Use Link for navigation to the contact page */}
            <Link to="/contact" className="mt-2">
              <h5 className="font-semibold p-1 border-teal-500 border-2 inline bg-white text-teal-500 hover:text-white hover:bg-teal-500 uppercase">
                Go to CONTACT Page
              </h5>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
