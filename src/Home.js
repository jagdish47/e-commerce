import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Welcome to Shop",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default Home;
