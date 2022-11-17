import MBToken from './images/MBToken.png'
import METAMASK from './images/METAMASK.png'
import OpenSea from './images/OpenSea.png'

const MetaBar = () => {
    return ( 
        <section className='flex flex-row items-center justify-around'>
            <div my-4>
                <img src={MBToken} alt="MBToken logo" />
            </div>
            <div className="py-4">
                <img src={METAMASK} alt="metamask logo" />
            </div>
            <div py-4>
                <img src={OpenSea} alt="OpenSea logo" />
            </div>
        </section>
     );
}
 
export default MetaBar;