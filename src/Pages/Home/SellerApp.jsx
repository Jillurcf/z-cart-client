import React from 'react';
import demoApp from "../../assets/Images/Pricing/DemoApp.png"
const SellerApp = () => {
    return (
        <div>
               <div className="md:flex gap-8 lg:mt-64 mt-8 h-[600px] items-center text-[#3A2E56]">
                <div className="max-w-[500px]  items-center">
                    <h1 className="items-center lg:text-start text-center text-4xl  font-bold">Seller Mobile App</h1>
                    <p className="py-4 text-[#3A2E56] px-2 lg:px-0">Let us do all tech-savvy dirty works for you so that you can only do what you love and grow. We are a team of experts always be there as a partner.</p>
                    <button className="btn btn-underline rounded mt-12 text-[#3A2E56] lg:flex-none flex lg:mx-0 mx-auto">Try Demo App</button>
                </div>
                <div className="lg:mt-0 mt-8 flex mx-auto">
                    <img src={demoApp} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SellerApp;