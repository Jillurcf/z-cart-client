import logo from "../../assets/Images/Logo.png";
import facebook from "../../assets/Images/footer/facebook.png";
import instagram from "../../assets/Images/footer/instagram.png";
import mail from "../../assets/Images/footer/mail.png";
import x from "../../assets/Images/footer/X-svg.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:mt-36">
      <footer className="footer p-10 text-neutral-content">
        <aside>
          <img src={logo} alt="" />
          <div className="flex gap-4 mt-8">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={mail} alt="" />
            <img src={x} alt="" />
          </div>
        </aside>

        
      <div className="mt-12">
            {/* <h1 className="text-[#3A2E56] ml-96 font-bold">Usefull Links</h1> */}
      <div className="grid lg:grid-flow-col gap-4">
            <a className="text-[#3A2E56] font-bold">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About us
              </NavLink>
            </a>
            <a className="text-[#3A2E56] font-bold">
              <NavLink
                to="/pricing"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Terms of Services
              </NavLink>
            </a>
            <a className="text-[#3A2E56] font-bold">
              <NavLink
                to="/sellerApp"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Privacy Policy
              </NavLink>
            </a>
            <a className="text-[#3A2E56] font-bold">
              <NavLink
                to="/faq"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Support Policy
              </NavLink>
            </a>
            <a className="text-[#3A2E56] font-bold">
              <NavLink
                to="/faq"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Refund & Return Policy
              </NavLink>
            </a>
          </div>
          <p className="mt-24 text-center text-[#3A2E56]">© zCart 2024. All Rights Reserved.</p>
      </div>
      
      </footer>
    </div>
  );
};

export default Footer;
