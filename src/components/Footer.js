import { TbBrandDiscord } from "react-icons/tb";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" w-[900px] h-32 rounded-xl m-auto flex justify-around items-center drop-shadow-md bg-slate-100 relative top-16">
        <div>
          <p>Ready to get started?</p>
          <p>Talk to us today</p>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2">
          GET STARTED
        </button>
      </div>

      {/* --------------------------- */}

      <div className="w-full h-96 bg-[#07112b] text-white flex justify-center items-start pt-36 gap-20">
        <div className="w-96">
          <p className="mb-5">Shopping from here</p>
          <p>
            A preplacement program aims to provide a well-rounded learning
            experience.
          </p>
        </div>

        <div className="flex flex-col">
          <p>Subscribe to get important updates</p>
          <input
            className="my-5 p-2 text-black outline-none"
            type="email"
            placeholder="YOUR E-MAIL"
          />
          <button className="bg-purple-500 text-white px-4 py-2">
            SUBSCRIBE
          </button>
        </div>

        <div>
          <p>Follow Us</p>
          <div className="flex gap-3">
            <TbBrandDiscord className="h-7 w-7" />
            <AiOutlineInstagram className="h-7 w-7" />
            <AiOutlineYoutube className="h-7 w-7" />
          </div>
        </div>

        <div>
          <p>Call Us</p>
          <p>+91 96987845123</p>
        </div>
      </div>

      <div className="w-full h-44 bg-[#07112b] text-white flex justify-around items-center border-t-[1px]">
        <p>@2023 Shopping. All Rights Reserved</p>
        <div>
          <p>PRIVACY POLICY</p>
          <p>TERMS & CONDITIONS</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
