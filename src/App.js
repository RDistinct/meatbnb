import CardNft from "./CardNft";
import CTA from "./CTA";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import MetaBar from "./MetaBar";


function App() {
  return (
    <div className="App">  {/**this div will wrap our entire application */}
      <div className="navbar">
        {/*There is  a styled div that contains Navbar here */}
            <Navbar/>
         </div> {/**div wraps our navbar */}
      <div className="hero"><Hero/></div>{/** div wraps our hero section */}
      <div><MetaBar/></div>
      <div className="cardnft"><CardNft/>MBToken,Inspiration, Metabnb NFTS</div>{/** div wraps our 2nd hero section */}

      <div className="cta"><CTA/></div>
      <div className="footer"> <Footer/> Footer section</div>
        {/* <h1 className='text-3xl font-bold underline' >
          Welcome to tailwind css
        </h1> */}
      
    </div>
  );
}

export default App;
