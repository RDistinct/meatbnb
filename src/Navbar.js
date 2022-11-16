import Logo from './images/iconname.png'
const Navbar = () => {
    return ( 
        
        <nav className='flex flex-row justify-around '>
            <img src={Logo} alt="" className='w-[233px] h-[36.6px]'/>
            {/* have ul for small screen & desktop */}
            <ul className='flex flex-row justify-around mt-3'>
                <li className='mr-[48px]'>
                    <a href="http://">Home</a>
                </li>
                <li className='mr-[48px]'>
                    <a href="http://">Place to stay</a>
                </li>
                <li className='mr-[48px]'>
                    <a href="http://">NFTs</a>
                </li>
                <li>
                    <a href="http://">Community</a>
                </li>
            </ul>

            <button className='bg-custom-purple text-white w-[170px] h-[48px] rounded-md '>Connect wallet</button>

        </nav>
     );
}
 
export default Navbar;