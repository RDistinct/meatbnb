import LocationBtn from './images/locationbtn.png'
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
        <section>
            <Navbar></Navbar>

            <div>
                <ul>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Restaurant</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Restaurant</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Restaurant</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Restaurant</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Restaurant</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Restaurant</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Restaurant</a>
                    </li>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer">Restaurant</a>
                    </li>
                </ul>
                <button>
                    <img src={LocationBtn} alt="" />
                </button>
            </div>

            <div>
                <img src={card5} alt="" />
                <img src={card6} alt="" />
                <img src={card7} alt="" />
                <img src={card8} alt="" />
                <img src={card1} alt="" />
                <img src={card2} alt="" />
                <img src={card3} alt="" />
                <img src={card4} alt="" />
                <img src={card9} alt="" />
                <img src={card10} alt="" />
                <img src={card11} alt="" />
                <img src={card12} alt="" />
                <img src={card13} alt="" />
                <img src={card14} alt="" />
                <img src={card15} alt="" />
                <img src={card16} alt="" />

            </div>
            {/* footer section */}
            <Footer></Footer>
        </section> 

        
        
     );
}
 
export default Collections
