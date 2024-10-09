const AboutUspage = () => {
  return (
    <>
      <header className="bg-cyan-600 py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <section className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg">
            We are dedicated to providing the best solutions for our clients by
            focusing on quality, innovation, and integrity.
          </p>
        </section>

        <section className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Company Values */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">
              Our Values
            </h3>
            <ul className="text-gray-600 text-lg list-disc list-inside">
              <li>Customer Commitment</li>
              <li>Quality and Excellence</li>
              <li>Innovation and Creativity</li>
              <li>Integrity and Transparency</li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="md:w-1/2 text-center">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3">
              Meet Our Team
            </h3>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Lakshmana Boyapati"
                  className="w-32 h-32 rounded-full mx-auto mb-2"
                />
                <h4 className="text-lg font-bold">Lakshmana Boyapati</h4>
                <p className="text-sm text-gray-600">CEO</p>
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Sudha Lakshman"
                  className="w-32 h-32 rounded-full mx-auto mb-2"
                />
                <h4 className="text-lg font-bold">Sudha Lakshman</h4>
                <p className="text-sm text-gray-600">HR</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUspage;
