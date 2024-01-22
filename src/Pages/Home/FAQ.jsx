import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";

const FAQ = () => {
  return (
    <div className="lg:mt-36 ">
      <Sectiontitle
        heading="FAQ"
        subHeading="Choose a subscription that best fit your need."
      ></Sectiontitle>
      <div className="max-w-screen-lg mx-auto text-[#3A2E56]">
        <h4 className="lg:text-2xl text-xl px-2 font-bold ">Why should I sell on zCart?</h4>
        <p className="py-4 px-2">There are many reasons to sell on zCart. We have our customers who can see your products to the ability to start selling fast without the need to create a new standalone website. You spend no time and money to do marketing, We do it for you!</p>
        <div className="join join-vertical w-full mt-12">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title text-xl font-medium">
            Where is your application development centre based?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Do you have affiliation program?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            Can you build custom application for me?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            How can I manage my account on Incevio.com?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What other services you provide?
            </div>
            <div className="collapse-content">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
