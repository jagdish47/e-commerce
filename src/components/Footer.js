const Footer = () => {
  return (
    <>
      <div className=" w-[900px] h-32 rounded-xl m-auto flex justify-around items-center drop-shadow-md bg-slate-100">
        <div>
          <p>Ready to get started?</p>
          <p>Talk to us today</p>
        </div>
        <button className="bg-purple-500 text-white px-4 py-2">
          GET STARTED
        </button>
      </div>

      {/* --------------------------- */}

      <div>
        <div>
          <p>Shopping from here</p>
          <p>
            A preplacement program aims to provide a well-rounded learning
            experience. By including DSA lectures and assignments
          </p>
        </div>

        <div>
          <p>Subscribe to get important updates</p>
          <input type="email" placeholder="YOUR E-MAIL" />
          <button className="bg-purple-500 text-white px-4 py-2">
            SUBSCRIBE
          </button>
        </div>

        <div>
            
      </div>
    </>
  );
};

export default Footer;
