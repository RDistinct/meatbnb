import MetamaskModal from './images/metamaskmodal'
import WalletcollectionModal from './images/walletcollectionmodal'
const Modal = () => {
    return ( 
        <div className="bg-black bg-opacity-25 flex justify-center items-center">
            <div className="w-[]">
                <div className="bg-white rounded">
                    <h3>Connect Wallet</h3>
                    <button>X</button>
                    <div>
                        <p>Choose your prefered wallet</p>
                        <img src={MetamaskModal} alt="" />
                        <img src={WalletcollectionModal} alt="" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;