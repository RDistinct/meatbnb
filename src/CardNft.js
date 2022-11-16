import card1 from './images/card1.png'
import card2 from './images/card2.png'
import card3 from './images/card3.png'
import card4 from './images/card4.png'
import card5 from './images/card5.png'
import card6 from './images/card6.png'
import card7 from './images/card7.png'
import card8 from './images/card8.png'

const CardNft = () => {
    return ( 
        <section id="cards">
        <h2>Inspiration for your next adventure</h2>
        <div >card container
            <img src={card1} alt="" />
            <img src={card2} alt="" />
            <img src={card3} alt="" />
            <img src={card4} alt="" />
            <img src={card5} alt="" />
            <img src={card6} alt="" />
            <img src={card7} alt="" />
            <img src={card8} alt="" />
        </div>

        </section>
     );
}
 
export default CardNft;