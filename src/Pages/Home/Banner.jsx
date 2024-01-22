import bchek from "../../assets/Images/Banner/BCheck-mark.png";
import Slider from "./Slider";
const Banner = () => {
  return (
    <div>
      <div
        className="hero lg:min-h-[80vh] md:min-h-[50vh] h-[300px] md:block bg-gradient-to-r from-gray-950 to-purple-500"
        // style={{
        //   backgroundImage:
        //     "url(https://i.ibb.co/42mN6z0/Banner.png)",
        // }}
      >
        <div className=""></div>
        <div className="">
          <div className=" max-w-screen-xl mx-auto flex">
            <div className="font-bold h-[600px] items-center md:flex">
              <div className="lg:w-2/4 mt-4 lg:mt-0">
                <h1 className="text-white md:text-6xl lg:leading-snug lg:ml-0 ml-12">
                  People are super excited to see your cool store stuff!
                </h1>
                <div className="flex lg:gap-12 text-white">
                  <div className="text-center mt-8">
                    <img className="mx-auto" src={bchek} alt="" />
                    <p>Low cost business</p>
                  </div>
                  <div className="text-center mt-8">
                    <img className="mx-auto" src={bchek} alt="" />
                    <p>Seller support</p>
                  </div>
                  <div className="text-center mt-8">
                    <img className="mx-auto" src={bchek} alt="" />
                    <p>Secure Payment</p>
                  </div>
                </div>
                <button className="btn btn-warning mt-8 rounded-none lg:ml-0 ml-24">
                  Start Selling Now
                </button>
              </div>
            <div className="items-end mx-auto mt-6 px-2">
            <Slider></Slider>
            </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
