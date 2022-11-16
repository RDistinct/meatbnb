import MBToken from './images/MBToken.png'
import METAMASK from './images/METAMASK.png'
import OpenSea from './images/OpenSea.png'

const MetaBar = () => {
    return ( 
        <section className='flex bg-custom-purple'>
            <div>
                <img src={MBToken} alt="MBToken logo" />
            </div>
            <div>
                <img src={METAMASK} alt="metamask logo" />
            </div>
            <div>
                <img src={OpenSea} alt="OpenSea logo" />
            </div>
        </section>
     );
}
 
export default MetaBar;