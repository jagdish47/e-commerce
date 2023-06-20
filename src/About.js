import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "Ecommerce Shopping",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
