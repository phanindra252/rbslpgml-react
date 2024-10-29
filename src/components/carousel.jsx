import { useEffect, useRef, useState } from "react";
import image1 from "/src/assets/images/carousel/carousel-1.jpg";
import image2 from "/src/assets/images/carousel/carousel-2.png";
import image3 from "/src/assets/images/carousel/carousel-3.png";
import bgimage from "/src/assets/images/carousel/carousel-bg.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselContainerRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);

  const slides = [
    {
      content: (
        <div className="leading-relaxed">
          <h2 className="leading-tight text-xl lg:text-3xl font-bold">
            Welcome to RBSL
          </h2>
          <p className="mt-4 text-sm lg:text-xl">
            RBSL is a rapidly growing IT consultancy firm helping customers
            deliver complex organizational transformation programs. Our primary
            focus is on Datacenter management, transformation, and migration
            from on-prem to cloud environments. Our consultants are qualified in
            paper and roller, with applied working knowledge of Waterfall and
            Agile methodologies. We have extensive experience in managing full
            project lifecycle delivery across financial services, Telecom,
            Utility, and Energy sectors. Our consultants are innovative and
            adaptive in fast-paced, complex, and challenging environments.
          </p>
        </div>
      ),
      imgSrc: image1,
      imgAlt: "First image",
      imgClass: "w-2/5 object-cover mt-2 md:mt-0",
    },
    {
      content: (
        <div className="leading-relaxed">
          <p className="mt-4 text-sm lg:text-xl">
            We deliver end-to-end Application Services, including development,
            modernization, and maintenance, to ensure your critical applications
            are always optimized and future-ready. Additionally, our Data Center
            Services facilitate the transition from on-premises infrastructure
            to cloud-based solutions, optimizing both performance and cost.
            Through our BPO (Business Process Outsourcing) services, we help
            businesses enhance efficiency and focus on core functions by
            managing non-core operations.
          </p>
        </div>
      ),
      imgSrc: image2,
      imgAlt: "Second image",
      imgClass: "w-1/2 object-cover mt-2 md:mt-0",
    },
    {
      content: (
        <div className="leading-relaxed">
          <p className="mt-4 text-sm lg:text-xl">
            Our comprehensive Cloud & IT Infrastructure solutions enable
            businesses to scale efficiently with reliable performance and
            security, while our advanced Data & Artificial Intelligence services
            empower data-driven decision-making. We also offer high-performance
            Network Services that modernize and secure your connectivity
            infrastructure. Our Cyber Security solutions provide end-to-end
            protection for IT assets, ensuring resilience against ever-evolving
            threats. Finally, we enhance workplace productivity with our Digital
            Workplace solutions, delivering tools and technologies that enable
            seamless collaboration in a modern, flexible work environment.
          </p>
        </div>
      ),
      imgSrc: image3,
      imgAlt: "Third image",
      imgClass: "w-2/5 object-cover mt-2 md:mt-0",
    },
  ];

  // Auto transition and manual transition logic
  const showSlide = (index) => {
    if (index >= 0 && index < slides.length) {
      setCurrentIndex(index); // Update the current index state
    }
  };

  useEffect(() => {
    // Function to auto-slide
    const autoSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Set up the interval
    autoSlideIntervalRef.current = setInterval(autoSlide, 10000); // Auto transition every 10 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(autoSlideIntervalRef.current);
  }, [slides.length]);

  const handleDotClick = (index) => {
    clearInterval(autoSlideIntervalRef.current); // Stop the auto transition
    showSlide(index); // Manually show the slide
    // Restart the auto-slide interval
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000);
  };

  return (
    <section
      style={{
        background: `linear-gradient(rgba(56, 167, 187, 0.9), rgba(56, 167, 187, 0.9)), url(${bgimage})`,
      }}
    >
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden text-white">
        {/* Carousel Wrapper */}
        <div
          id="carousel-container"
          className="flex transition-transform duration-500 ease-in-out my-28"
          ref={carouselContainerRef}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Use percentage-based translation
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full p-4 flex flex-col md:flex-row items-center justify-center h-auto"
            >
              {slide.content}
              <img
                src={slide.imgSrc}
                alt={slide.imgAlt}
                className={slide.imgClass}
              />
            </div>
          ))}
        </div>

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
