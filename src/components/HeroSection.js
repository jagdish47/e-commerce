import shoppingImage from "../images/shopping-image.jpg";
import { NavLink } from "react-router-dom";

const HeroSection = (props) => {
  const { name } = props.myData;

  return (
    <div>
      <div className="border-2 flex justify-center items-center gap-24 w-full h-96">
        <div>
          <p className="text-blue-500 uppercase">Welcome to </p>
          <h1 className="text-4xl font-bold uppercase my-3">{name}</h1>
          <p className="w-96  text-justify mb-4">
            Supposedly there are over one million words in the English Language.
            We trimmed some fat to take away really odd words and determiners.
            Then we grabbed the most popular words and built this word
            randomizer. Just keep clicking generate—chances are you won't find a
            repeat!
          </p>
          <NavLink>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Shop now
            </button>
          </NavLink>
        </div>
        <div>
          <figure>
            <img className="h-80" src={shoppingImage} alt="shopping-img" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
