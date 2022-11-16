import heroimg from './images/Hero.png' 
const Hero = () => {
    return ( 
        // <h2>Hero</h2>

        <section id="hero" className="flex md:flex-row flex-col">
            <div className="tw classes">
                <div className="tw classes">
                    <h1 className="text-[56px]">Rent a <span className='text-custom-purple'>Place</span>  away from <br hidden/>  <span className='text-custom-purple'>Home</span>  in the <span className='text-custom-purple'>Metaverse</span> </h1>
                </div>
               
                    <p  className="text-[24px] max-w-[636px]" > we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                
                <div className=""> Search Bar</div>

            </div>

            <div>
                <img src={heroimg} alt="" />
            </div>
        </section>
     );
}
 
export default Hero;