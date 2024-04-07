import '../App.css';
import nbgsHome from '../pictures/nbgsHome.jpeg';
import pingMain from '../pictures/pingMain.png';
import callawayMain from '../pictures/callawayMain.png';
import taylormadeMain from '../pictures/taylormadeMain.png';
import titleistMain from '../pictures/titleistMain.png';
import srixonMain from '../pictures/srixonMain.png';
import cobraMain from '../pictures/cobraMain.png';

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
    <img id='homePic' src={nbgsHome}/>
    <br/>
    {/* <h1>Brands Available</h1>
    <img id="pingMain" src={pingMain}/>
    <img id="callawayMain" src={callawayMain}/>
    <img id="taylormadeMain" src={taylormadeMain}/>
    <img id="titleistMain" src={titleistMain}/>
    <img id="srixonMain" src={srixonMain}/>
    <img id="cobraMain" src={cobraMain}/> */}
    </>
  );
};

export default HomePage;