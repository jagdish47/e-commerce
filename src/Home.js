import HeroSection from "./components/HeroSection";
import Service from "./components/Services";
import Trusted from "./components/Trusted";
import Footer from "./components/Footer";
import FeatureProduct from "./components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Welcome to Shop",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Service />
      <Trusted />
      <Footer />
    </>
  );
};

export default Home;
