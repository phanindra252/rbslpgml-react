import bgimage from "/src/assets/images/testimonials/texture-bw.png";

const testimonialsData = [
  {
    quote:
      "RBSL has been an instrumental partner in transforming our IT infrastructure. Their expertise is unmatched, and they delivered results beyond our expectations.",
  },
  {
    quote:
      "Their team is incredibly knowledgeable and helped us smoothly migrate to the cloud. We’re grateful for their support during our digital transformation journey.",
  },
  {
    quote:
      "Working with RBSL was a game-changer for our operations. Their project management skills ensured smooth execution and seamless delivery.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="bg-gray-100 py-12"
      style={{ background: `url(${bgimage})` }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          TESTIMONIALS
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
