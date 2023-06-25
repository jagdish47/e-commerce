const Contact = () => {
  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">
        Contact Us For More Information
      </h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54181.64168796587!2d73.93208502121105!3d25.227300637054814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396843739049e9bd%3A0x50eb9290f61990e5!2sSardargarh%2C%20Rajasthan%20313330!5e0!3m2!1sen!2sin!4v1687686017989!5m2!1sen!2sin"
          className="w-full h-[550px]"
        ></iframe>
      </div>

      <div className="border flex w-full justify-center items-center">
        <form
          method="POST"
          action="https://formspree.io/f/xknlwobq"
          className="flex flex-col"
        >
          <input
            className="rounded-md border-gray-300 border mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Username"
            autoComplete="off"
            required
            name="Username"
          />
          <input
            className="rounded-md border-gray-300 border my-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="email"
            placeholder="Email"
            autoComplete="off"
            required
            name="Email"
          />

          <textarea
            className="rounded-md border-gray-300 border resize-none p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter you message"
          ></textarea>
          <input
            className="rounded-md border-gray-300 border mt-2 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
};

export default Contact;
