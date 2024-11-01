import Axa from "/src/assets/images/Customers_Logos/AXA-Logo-PNG7.png";
import Shell from "/src/assets/images/Customers_Logos/Shell-Logo-PNG4.png";
import Centrica from "/src/assets/images/Customers_Logos/Centrica-Logo.wine.png";
import nationalGrid from "/src/assets/images/Customers_Logos/National_Grid_plc-Logo.wine.png";
import commerzBank from "/src/assets/images/Customers_Logos/Commerzbank-Logo.png";
import Lloyds from "/src/assets/images/Customers_Logos/Lloyds-logo.png";
import Vodafone from "/src/assets/images/Customers_Logos/Vodafone-Logo.png";
import Threeuk from "/src/assets/images/Customers_Logos/Three-UK-logo.png";

const customersData = [
  {
    title: "Insurance",
    logos: [{ src: Axa, alt: "Axa" }],
  },
  {
    title: "Energy",
    logos: [
      { src: Shell, alt: "Shell" },
      { src: Centrica, alt: "Centrica" },
      { src: nationalGrid, alt: "National Grid" },
    ],
  },
  {
    title: "Banking",
    logos: [
      { src: commerzBank, alt: "Commerz Bank" },
      { src: Lloyds, alt: "Lloyds" },
    ],
  },
  {
    title: "Telecom",
    logos: [
      { src: Vodafone, alt: "Vodafone" },
      { src: Threeuk, alt: "H3G" },
    ],
  },
];

const Customers = () => {
  return (
    <section className="bg-gray-100 py-16" id="customers">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Customers</h2>
        <div className="flex flex-col items-center lg:flex-row justify-center">
          {customersData.map((customer, index) => (
            <div key={index} className="mb-12 w-full md:w-1/4 px-4">
              <h3 className="text-2xl font-bold mb-4">{customer.title}</h3>
              <div className="flex justify-center space-x-4">
                {customer.logos.map((logo, logoIndex) => (
                  <img
                    key={logoIndex}
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
