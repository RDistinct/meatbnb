import MetamaskModal from './images/metamaskmodal.png'
import WalletcollectionModal from './images/walletconnectmodal.png'

const Modal = ({isVisible,onClose }) => {
    if(!isVisible) return null;
    return (
      <>
         <div className="absolute top-0 left-0 w-[100%] h-[100%] z-10 bg-black opacity-25" ></div> 
                        
        <div className="fixed top-40 sm:left-40 left-10 sm:right-40 right-10 grid place-items-center bg-blend-overlay z-20">
          {" "}
          {/**flex justify-center items-cente */}
          <div className=" w-[90%] h-[326px] "> {/**sm:w-[700px] */}
            <div className="bg-white rounded p-6 border- ">
              <div className="flex flex-row justify-between border-b-2 p-6">
                <h3 className="font-bold">Connect Wallet</h3>
                <button className="text-xl" onClick={() => onClose()}>
                  X
                </button>
              </div>

              <div className='p-6'>
                <p>Choose your prefered wallet</p>
                <img
                  src={MetamaskModal}
                  alt=""
                  className="mt-[16px] w-[100%] cursor-pointer"
                />
                <img
                  src={WalletcollectionModal}
                  alt=""
                  className="mt-[16px] w-[100%]  cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );


}
 
export default Modal;