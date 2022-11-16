import metabnbfooter from './images/metabnbfooter.png'
import copyright from './images/copyright.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const Footer = () => {
    return ( 
        <section className='bg-custom-black'>
       
        <div>
            <img src={metabnbfooter} alt="" />

            <div>{/**social media icons */}
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
            
            <div>{/**copyright icon */}
                <img src={copyright} alt="" />
            </div>

            <div className='text-white'>
                <div>
                    <h3>community</h3>
                    <ul>
                        <li>
                          
                          <a href="http://" target="_blank" rel="noopener noreferrer">NFT</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Tokens</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Landlords</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Discord</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Place</h3>
                    <ul>
                        <li>
                          <a href="http://" target="_blank" rel="noopener noreferrer">Castle</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Farms</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Beach</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Learn more</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>About us</h3>
                    <ul>
                        <li>
                          <a href="http://" target="_blank" rel="noopener noreferrer">Road map</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Creators</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Career</a>
                        </li>
                        <li>
                            <a href="http://" target="_blank" rel="noopener noreferrer">Contact us</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        </section>
     );
}
 
export default Footer;