import Logo from './images/iconname.png'
const Navbar = () => {
    return ( 
        
        <nav className='tailwind classes'>
            <img src={Logo} alt="" className='tw classes'/>
            {/* have ul for small screen & desktop */}
            <ul className='tw classes '>
                <li>
                    <a href="http://">Home</a>
                </li>
                <li>
                    <a href="http://">Place to stay</a>
                </li>
                <li>
                    <a href="http://">NFTs</a>
                </li>
                <li>
                    <a href="http://">Community</a>
                </li>
            </ul>

            <button>Connect wallet</button>

        </nav>
     );
}
 
export default Navbar;