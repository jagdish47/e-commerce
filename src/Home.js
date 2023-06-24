import HeroSection from "./components/HeroSection";
import Service from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Welcome to Shop",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Service />
      <Trusted />
    </>
  );
};

export default Home;
