import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";
import b1 from '../../assets/Images/benifit/b1.png'
import b2 from '../../assets/Images/benifit/b2.png'
import b3 from '../../assets/Images/benifit/b3.png'

const Benifits = () => {
  return (
    <div className="pb-24 lg:mt-0 mt-80 max-w-screen-xl mx-auto">
      <Sectiontitle
        heading="BENIFITS"
        subHeading="From trendy fashion to must-have gadgets, our latest arrivals are flying off the shelves. Join the excitement and discover the hottest items."
      ></Sectiontitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:px-12 grid-cols-1 gap-12 max-w-screen-xl mx-auto mt-24">
        <div className="p-24 border rounded-lg relative bg-[#F4F4F6]">
            <img className="absolute lg:-top-8 -top-8 lg:left-36 md:left-28 left-32 border rounded-full p-4" src={b1} alt="" />
          <h4 className="text-xl font-bold text-center">Register as Merchant</h4>
          <p className="text-center py-4">
            Get straight to growing your business. We handle everything to sell
            online. So you can focus on your business rather managing the
            infrastructure.
          </p>
        </div>
        <div className="p-24 border rounded-lg relative bg-[#F4F4F6]">
            <img className="absolute lg:-top-8 -top-8 lg:left-36 md:left-28 left-32 border rounded-full p-4" src={b2} alt="" />
          <h4 className="text-xl font-bold text-center">Register as Merchant</h4>
          <p className="text-center py-4">
            Get straight to growing your business. We handle everything to sell
            online. So you can focus on your business rather managing the
            infrastructure.
          </p>
        </div>
        <div className="p-24 border rounded-lg relative bg-[#F4F4F6]">
            <img className="absolute lg:-top-8 -top-8 lg:left-36 md:left-28 left-24 border rounded-full p-4" src={b3} alt="" />
          <h4 className="text-xl font-bold text-center">Register as Merchant</h4>
          <p className="text-center py-4">
            Get straight to growing your business. We handle everything to sell
            online. So you can focus on your business rather managing the
            infrastructure.
          </p>
        </div>
       
        
       
      </div>
    </div>
  );
};

export default Benifits;
