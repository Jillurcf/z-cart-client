import Sectiontitle from "../../Component/SectionTitle/Sectiontitle";

const Contacts = () => {
  return (
    <div className="lg:mt-36 px-2 lg:px-0">
      <Sectiontitle
        heading="Contact Us"
        subHeading="Let us do all tech-savvy dirty works for you so that you can only do what you love and grow. We're a team of experts always be there as a partner."
      ></Sectiontitle>
      <div className="hero ">
        {/* <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm"> */}
        <form className="card-body">
          <div className="lg:flex gap-12">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Topic</span>
                </label>
                <select className="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Select a topic
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Share your thoughts</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Write what you want"
                  className="textarea textarea-bordered h-32"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-control mt-6 w-1/2 mx-auto">
            <button className="btn btn-warning rounded-none">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Contacts;
