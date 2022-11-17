import Logo from './images/iconname.png'
import Modal from './Modal';
import menu from './images/icons8-close-50.png'
import close from './images/icons8-menu-rounded-50.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [showToggle, setToggle] = useState(false);
    const [showModal, setShowModal] = useState(false);
    return ( 
        
        <nav className='flex md:flex-row flex-col  justify-around mx-auto'>
            <img src={Logo} alt="" className='w-[233px] h-[36.6px]'/>
            {/* have ul for small screen & desktop */}
            <ul className=' hidden lg:flex flex-row justify-around mt-3'>
                <li className='mr-[48px]'>
                    <a href="http://">Home</a>
                </li>
                <li className='mr-[48px]'>
                    <a href="http://">Place to stay</a>
                </li>
                <li className='mr-[48px]'>
                    <Link to={'/Collections'} target="_blank">NFTs</Link>
                </li>
                <li>
                    <a href="http://">Community</a>
                </li>
            </ul>

            <div className='lg:hidden flex order-last '>
                <img src={showToggle ? menu : close} alt="" className='w-[50px] h-[50px] object-contain' onClick={()=>setToggle((prev) => !prev )} />
                <div className={`${showToggle ? 'flex' : 'hidden'} p-6`}>
                <ul className='flex flex-col'>
                        <li className=''>
                            <a href="http://">Home</a>
                        </li>
                        <li className=''>
                            <a href="http://">Place to stay</a>
                        </li>
                        <li className=''>
                            <Link to={'/Collections'} target="_blank">NFTs</Link>
                        </li>
                        <li>
                            <a href="http://">Community</a>
                        </li>
            </ul>
                </div>
            </div>

            <button className='bg-custom-purple text-white w-[170px] h-[48px] rounded-md my-8 md:my-0 ' onClick={()=>setShowModal(true)}>Connect wallet</button>

            <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
        </nav>
       
     );
}
 
export default Navbar;