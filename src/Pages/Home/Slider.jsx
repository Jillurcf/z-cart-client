import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
// import "./styles.css"
import man from "../../assets/Images/Banner/Ellipse-2.png";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="md:max-w-[400px] w-[300px] text-white">
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className=" bg-purple-950 border rounded-lg">
              <img className="text-center mx-auto py-8" src={man} alt="" />
              <h1 className="px-4  pb-8 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                voluptates inventore perspiciatis dignissimos dolore labore illo
                quis adipisci natus voluptas?
              </h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" bg-purple-950 border rounded-lg">
              <img className="text-center mx-auto py-8" src={man} alt="" />
              <h1 className="px-4  pb-8 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                voluptates inventore perspiciatis dignissimos dolore labore illo
                quis adipisci natus voluptas?
              </h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" bg-purple-950 border rounded-lg">
              <img className="text-center mx-auto py-8" src={man} alt="" />
              <h1 className="px-4  pb-8 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                voluptates inventore perspiciatis dignissimos dolore labore illo
                quis adipisci natus voluptas?
              </h1>
            </div>
          </div>
          <div className="keen-slider__slide number-slide1">
            <div className=" bg-purple-950 border rounded-lg">
              <img className="text-center mx-auto py-8" src={man} alt="" />
              <h1 className="px-4  pb-8 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                voluptates inventore perspiciatis dignissimos dolore labore illo
                quis adipisci natus voluptas?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
