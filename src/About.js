import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontext";

const About = () => {
  const myName = useProductContext();

  console.log(myName);

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
