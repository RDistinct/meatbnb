import LocationBtn from './images/location.png'
import card5 from './images/card5.png'
import card6 from './images/card6.png'
import card7 from './images/card7.png'
import card8 from './images/card8.png'
import card1 from './images/card1.png'
import card2 from './images/card2.png'
import card3 from './images/card3.png'
import card4 from './images/card4.png'
import card9 from './images/card9.png'
import card10 from './images/card10.png'
import card11 from './images/card11.png'
import card12 from './images/card12.png'
import card13 from './images/card13.png'
import card14 from './images/card14.png'
import card15 from './images/card15.png'
import card16 from './images/card16.png'
import Navbar from './Navbar';
import Footer from './Footer'
const Collections = () => {
    return (
      <section className="">
        <div className='mt-[40px]'>
        <Navbar></Navbar>

        </div>
        {/**max-w-[1220px] w-[90%] mx-auto */}

        <div className="my-[100px] flex md:flex-row flex-col justify-between m-auto w-[80%]">
          <ul className="flex md:flex-row flex-col ">
            <li className=" px-[16px] py-[10px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Restaurant
              </a>
            </li>
            <li className=" px-[16px] py-[10px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Cottage
              </a>
            </li>
            <li className=" px-[16px] py-[10px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Castle
              </a>
            </li>
            <li className=" px-[16px] py-[10px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Fantast city
              </a>
            </li>
            <li className=" px-[16px] py-[10px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Beach
              </a>
            </li>
            <li className=" px-[16px] py-[10px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Carbins
              </a>
            </li>
            <li className=" px-[16px] py-[10px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Off-grid
              </a>
            </li>
            <li className=" px-[16px] py-[10px]">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                Farm
              </a>
            </li>
          </ul>

          <button>
            <img src={LocationBtn} alt="" />
          </button>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 m-auto w-[90%] mb-[92px] justify-items-center">
          
          {/** */}
          <div>
            <img src={card5} alt="" />
          </div>
          <div>
            <img src={card6} alt="" />
          </div>
          <div>
            <img src={card7} alt="" />
          </div>
          <div>
            <img src={card8} alt="" />
          </div>
          <div>
            <img src={card1} alt="" />
          </div>
          <div>
            <img src={card2} alt="" />
          </div>
          <div>
            <img src={card3} alt="" />
          </div>
          <div>
            <img src={card4} alt="" />
          </div>
          <div>
            <img src={card9} alt="" />
          </div>
          <div>
            <img src={card10} alt="" />
          </div>
          <div>
            <img src={card11} alt="" />
          </div>
          <div>
            <img src={card12} alt="" />
          </div>
          <div>
            <img src={card13} alt="" />
          </div>
          <div>
            <img src={card14} alt="" />
          </div>
          <div>
            <img src={card15} alt="" />
          </div>
          <div>
            <img src={card16} alt="" />
          </div>
        </div>
        {/* footer section */}
        <Footer></Footer>
      </section>
    );
}
 
export default Collections
