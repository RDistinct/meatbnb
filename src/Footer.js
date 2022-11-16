import metabnbfooter from './images/metabnbfooter.png'
import copyright from './images/copyright.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const Footer = () => {
    return ( 
        <section>
        <h2>Footer</h2>
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

            <div>
                <div>
                    <h3>community</h3>
                    <ul>
                        <li>
                          <a href="#">NFT</a>
                        </li>
                        <li>
                            <a href="#">Tokens</a>
                        </li>
                        <li>
                            <a href="#">Landlords</a>
                        </li>
                        <li>
                            <a href="#">Discord</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>Place</h3>
                    <ul>
                        <li>
                          <a href="#">Castle</a>
                        </li>
                        <li>
                            <a href="#">Farms</a>
                        </li>
                        <li>
                            <a href="#">Beach</a>
                        </li>
                        <li>
                            <a href="#">Learn more</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3>About us</h3>
                    <ul>
                        <li>
                          <a href="">Road map</a>
                        </li>
                        <li>
                            <a href="">Creators</a>
                        </li>
                        <li>
                            <a href="">Career</a>
                        </li>
                        <li>
                            <a href="">Contact us</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        </section>
     );
}
 
export default Footer;