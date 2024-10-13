'use client'
import { markdownify } from "@lib/utils/textConverter";
import { useState, useEffect } from "react";

const Workflow = ({ workflow }) => {
  return (
    <section className="section pb-0">
      <div className="mb-8 text-center text-xl">
        {markdownify(
          workflow.title,
          "h2",
          "mx-auto max-w-[400px] font-bold leading-[44px]"
        )}
        {markdownify(workflow.description, "p", "mt-3")}
      </div>
      <div className="w-[80vw] m-auto">
      <ImageSlider images={[
        "https://res.cloudinary.com/deqeu0xv1/image/upload/v1728753822/Screenshot_2024-10-12_225256_eqaq8c.png",
        "https://res.cloudinary.com/deqeu0xv1/image/upload/v1728753872/Screenshot_2024-10-12_225415_e5fkwg.png",
      ]} />
      </div>
    </section>
  );
};

export default Workflow;


const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Automatically go to the next slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex]); // Re-run effect when currentIndex changes

  return (
    <div className="relative w-full mx-auto">
      {/* Slide Images */}
      <div className="overflow-hidden relative w-full h-[40vh]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ${
              index === currentIndex ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 pb-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            } focus:outline-none`}
          ></button>
        ))}
      </div>
    </div>
  );
};
