import MetamaskModal from './images/metamaskmodal.png'
import WalletcollectionModal from './images/walletconnectmodal.png'

const Modal = ({isVisible,onClose }) => {
    if(!isVisible) return null;
    return ( 
        <div className=" grid place-items-center"> {/**flex justify-center items-cente */}
            <div className="w-[700px] ">
                <div className="bg-white rounded">
                    <h3>Connect Wallet</h3>
                    <button className='text-xl' onClick={()=>onClose()}>X</button>

                    <div>
                        <p>Choose your prefered wallet</p>
                        <img src={MetamaskModal} alt="" className='mt-[16px]'/>
                        <img src={WalletcollectionModal} alt=""  className='mt-[16px]'/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;