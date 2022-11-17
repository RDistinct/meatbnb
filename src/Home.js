import CardNft from "./CardNft";
import CTA from "./CTA";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import MetaBar from "./MetaBar";




const Home = () => {
    
    return ( 
        <div className="container">  {/**this div will wrap our entire application */}
          
          <div className="mt-12 mb-32  w-[90%] max-w-[ 1240px] mx-auto ">
            {/*There is  a styled div that contains Navbar here */}
                <Navbar/>
            </div> {/**div wraps our navbar */}
          <div className=" w-[1240px] max-w-[100%]"> {/**ml-24 */}
              <Hero/>
          </div>{/** div wraps our hero section */}
          <div className="bg-custom-purple mb-[40px] h-[70px]"><MetaBar/></div>
          <div className="m-auto w-[1140px] max-w-[100%]"><CardNft/></div>{/** div wraps our 2nd hero section */}

          <div className="bg-custom-purple max-w-[100%] "><CTA/></div>
          <div className=""> <Footer/> </div>
            {/* <h1 className='text-3xl font-bold underline' >
              Welcome to tailwind css
            </h1> */}
          
        </div>
     );
}
 
export default Home;