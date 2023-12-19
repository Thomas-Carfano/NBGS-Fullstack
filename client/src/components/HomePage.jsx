import '../App.css';
import nbgsHome from '../pictures/nbgsHome.jpeg'

const HomePage = () => {

  return (
    <>
    <br/>
       <p>
         We invite you to experience our incredible selection
         of brand name golf apparel, equipment <br/> and accessories
         at superstore pricing with quality services you can only
         find in a family <br/> operated business. We are a discount golf
         store with the look and feel of a private club pro shop.<br/> We
         have the lowest prices on top name brand golf equipment, golf
        balls, golf shoes and golf clubs, Guaranteed!
       </p>
    <img id='homePic' src={nbgsHome}></img>
    </>
  );
};

export default HomePage;