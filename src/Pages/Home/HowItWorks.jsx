import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import h1 from '../../assets/Images/HowItWorks/h1.png';
import h2 from '../../assets/Images/HowItWorks/h2.png';
import h3 from '../../assets/Images/HowItWorks/h3.png';
import h4 from '../../assets/Images/HowItWorks/h4.png';
import arrow from "../../assets/Images/HowItWorks/Arrow.png"
import rarrow from "../../assets/Images/HowItWorks/RArrow.png"

const HowItWorks = () => {
    return (
        <div className="lg:py-24 lg:mt-0 -mt-24 max-w-screen-xl mx-auto">
            <Sectiontitle heading="How It Works" subHeading="From trendy fashion to must-have gadgets, our latest arrivals are flying off the shelves. Join the excitement and discover the hottest items."></Sectiontitle>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-36 max-w-screen-2xl mx-auto mt-20">
                <div className="px-12 mt-36">
                    <h4 className="text-xl text-[#3A2E56] font-bold lg:mt-0 -mt-36">Register as Merchant</h4>
                    <p>Creating an account is very simple, Your merchant dashboard will be ready as soon as you are registered. You can manage everything that belongs to your store and running the business.</p>
                </div>
                <div><img src={h1} alt="" /></div>
                <div></div>
            </div>
            <div className="max-w-screen-2xl mx-auto"><img className="ml-60 hidden lg:block" src={arrow} alt="" /></div>
            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-36 max-w-screen-2xl mx-auto">
                <div></div>
                <div className="px-12 lg:mt-12 -mt-36">
                    <h4 className="text-2xl text-[#3A2E56] font-bold">List Your Items</h4>
                    <p>Listing your products is really simple through our easy to use the self-serve portal. Upload including high-quality product images and additional details.</p>
                </div>
                <div><img src={h2} alt="" /></div>               
            </div>
            <div className="max-w-screen-2xl mx-auto"><img className="ml-80 hidden lg:block" src={rarrow} alt="" /></div>
            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-36 max-w-screen-2xl mx-auto pt-12">
               
                <div className="px-12 mt-12">
                    <h4 className="text-2xl text-[#3A2E56] font-bold">Sell & Fulfill Orders</h4>
                    <p>After you list your offers, customers can visit them on the Marketplace. We will notify you when customers place an order. Fulfill the order on promised time is very important.</p>
                </div>
                <div><img src={h3} alt="" /></div>
                <div></div>               
            </div>
            <div className="max-w-screen-2xl mx-auto"><img className="ml-60 hidden lg:block" src={arrow} alt="" /></div>
            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-36 max-w-screen-2xl mx-auto">
                <div></div>
                <div className="px-12 lg:mt-12 -mt-36">
                    <h4 className="text-2xl text-[#3A2E56] font-bold">Get Paid Instantly</h4>
                    <p>We do not hold your money, the payment will be sent to your connected account directly.</p>
                </div>
                <div><img src={h4} alt="" /></div>               
            </div>
        </div>
    );
};

export default HowItWorks;