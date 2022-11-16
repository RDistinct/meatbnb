import CardNft from "./CardNft";
import CTA from "./CTA";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import MetaBar from "./MetaBar";
import Modal from "./Modal";


const Home = () => {
    return ( 
        <div className="container">  {/**this div will wrap our entire application */}
          
          <div className="mt-12 mb-32 m-auto w-[1240px] ">
            {/*There is  a styled div that contains Navbar here */}
                <Navbar/>
            </div> {/**div wraps our navbar */}
          <div className="ml-24 w-[1240px]">
              <Hero/>
          </div>{/** div wraps our hero section */}
          <div className="bg-custom-purple mb-[40px] h-[70px]"><MetaBar/></div>
          <div className="m-auto w-[1140px]"><CardNft/></div>{/** div wraps our 2nd hero section */}

          <div className="bg-custom-purple"><CTA/></div>
          <div className=""> <Footer/> Footer section</div>
            {/* <h1 className='text-3xl font-bold underline' >
              Welcome to tailwind css
            </h1> */}
          <Modal></Modal>
        </div>
     );
}
 
export default Home;