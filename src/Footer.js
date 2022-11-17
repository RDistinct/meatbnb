import metabnbfooter from './images/metabnbfooter.png'
import copyright from './images/copyright.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'

const Footer = () => {
    return (
      <section className="bg-custom-black max-w-[100%]">
                <div className='m-auto w-[90%]  pt-[58px] flex md:flex-row  flex-col-reverse justify-center  '> {/**md:flex-column h-[332px]*/}
                    <div className='pr-[184px]'>
                        <div className='w-[233px] h-[40px] mb-[96px]'>
                            <img src={metabnbfooter} alt="" />
                        </div>
                                <div className='flex flex-row  justify-between mb-[48px]' >
                                    {/**social media icons */}
                                    <img src={facebook} alt="" />
                                    <img src={instagram} alt="" />
                                    <img src={twitter} alt="" />
                                </div>

                        <div>
                            {/**copyright icon */}
                            <img src={copyright} alt="" />
                        </div>
                    </div>   

                 <div className="text-white flex flex-col  lg:flex-row gap-8 lg:gap-[217px]">

                    <div>
                            <h3 className='font-bold'>Community</h3>
                            <ul>
                                <li className='text-xs py-[16px]'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    NFT
                                </a>
                                </li>
                                <li className='text-xs pb-[16px]'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    Tokens
                                </a>
                                </li>
                                <li className='text-xs pb-[16px]'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    Landlords
                                </a>
                                </li>
                                <li className='text-xs'>
                                <a href="http://" target="_blank" rel="noopener noreferrer">
                                    Discord
                                </a>
                                </li>
                            </ul>
                            </div>

                        <div>

                        <h3 className='font-bold'>Place</h3>
                        <ul>
                            <li className='text-xs py-[16px]'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Castle
                            </a>
                            </li>
                            <li className='text-xs pb-[16px]'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Farms
                            </a>
                            </li>
                            <li className='text-xs pb-[16px]'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Beach
                            </a>
                            </li>
                            <li className='text-xs pb-[16px]'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Learn more
                            </a>
                            </li>
                        </ul>
                        </div>

                        <div>
                        <h3 className='font-bold'>About us</h3>
                        <ul>
                            <li className='text-xs py-[16px]'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Road map
                            </a>
                            </li>
                            <li className='text-xs pb-[16px]'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Creators
                            </a>
                            </li>
                            <li className='text-xs pb-[16px]'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Career
                            </a>
                            </li>
                            <li className='text-xs pb-[16px]'>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                Contact us
                            </a>
                            </li>
                        </ul>
                        </div>
                 </div>
            </div>
      </section>
    );
}
 
export default Footer;