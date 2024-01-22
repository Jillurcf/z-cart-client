import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import p1 from "../../assets/Images/Pricing/p1.png"
import p2 from "../../assets/Images/Pricing/p2.png"
import p3 from "../../assets/Images/Pricing/p3.png"
import cm from "../../assets/Images/Pricing/Check-mark.png"
import hcm from "../../assets/Images/Pricing/whiteCheck/HCheck-mark.png"
import demoApp from "../../assets/Images/Pricing/DemoApp.png"

const Pricing = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Sectiontitle heading="Pricing" subHeading="Choose a subscription that best fit your need."></Sectiontitle>
            <div className="grid lg:grid-cols-3 md:grid-clos-2 grid-cols-1 lg:gap-12">
                <div className="border bg-[#F4F4F6] lg:p-24 p-4">
                    <img className="border rounded-full bg-white p-6 mx-auto" src={p1} alt="" />
                    <h3 className="uppercase py-4 lg:text-4xl text-xl font-bold text-center text-[#3A2E56]">Individual</h3>
                    <h6 className="py-8"><span className="text-2xl font-bold">$9</span> / Monthly</h6>
                    <div className="flex gap-2 py-2">
                       <div><img src={cm} alt="" /></div>
                       <p className="">5 Staff Users</p>
                    </div>
                    <div className="flex gap-2 py-2">
                       <div><img src={cm} alt="" /></div>
                       <p>200 Products</p>
                    </div>
                    <div className="flex gap-2 py-2">
                       <div><img src={cm} alt="" /></div>
                       <p>2.50% + $2 Per Transaction</p>
                    </div>
                    <button className="btn bg-[#3A2E56] mx-auto w-full mt-8 rounded-none text-white text-2xl font-bold uppercase">I need this</button>
                </div>
                <div className="border bg-[#3A2E56] lg:p-24 p-4 text-white">
                    <img className="border rounded-full bg-white p-6 mx-auto" src={p2} alt="" />
                    <h3 className="uppercase py-4 lg:text-4xl text-xl font-bold text-center text-white">Business</h3>
                    <h6 className="py-8 text-white"><span className="text-2xl font-bold text-white">$29</span> / Monthly</h6>
                    <div className="flex gap-2 py-2">
                       <div><img src={hcm} alt="" /></div>
                       <p>1 Staff Users</p>
                    </div>
                    <div className="flex gap-2 py-2">
                       <div><img src={hcm} alt="" /></div>
                       <p>20 Products</p>
                    </div>
                    <div className="flex gap-2 py-2">
                       <div><img src={hcm} alt="" /></div>
                       <p>3.00% + $3 Per Transaction</p>
                    </div>
                    <button className="btn bg-[#F89818] mx-auto w-full mt-8 rounded-none text-white text-2xl font-bold uppercase">I need this</button>
                </div>
                <div className="border bg-[#F4F4F6] lg:p-24 p-4">
                    <img className="border rounded-full bg-white p-6 mx-auto" src={p3} alt="" />
                    <h3 className="uppercase py-4 lg:text-4xl text-xl font-bold text-center text-[#3A2E56]">PROFESSIONAL</h3>
                    <h6 className="py-8"><span className="text-2xl font-bold">$49</span> / Monthly</h6>
                    <div className="flex gap-2 py-2">
                       <div><img src={cm} alt="" /></div>
                       <p>10 Staff Users</p>
                    </div>
                    <div className="flex gap-2 py-2">
                       <div><img src={cm} alt="" /></div>
                       <p>500 Products</p>
                    </div>
                    <div className="flex gap-2 py-2">
                       <div><img src={cm} alt="" /></div>
                       <p>1.50% + $1 Per Transaction</p>
                    </div>
                    <button className="btn bg-[#3A2E56] mx-auto w-full mt-8 rounded-none text-white text-2xl font-bold uppercase">I need this</button>
                </div>
                
            </div>
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

export default Pricing;