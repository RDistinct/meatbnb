import heroimg from './images/Hero.png' 
const Hero = () => {
    return ( 
        // <h2>Hero</h2>

        <section id="hero" className="flex md:flex-row flex-col mb-[67px] ">
            <div className="w-[646px]">
                <div className="mb-12">
                    <h1 className="text-[56px]">Rent a <span className='text-custom-purple'>Place</span>  away from <br hidden/>  <span className='text-custom-purple'>Home</span>  in the <span className='text-custom-purple'>Metaverse</span> </h1>
                </div>
               
                    <p  className="text-[24px] max-w-[636px] mb-12" > we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                
                <div className=""> 
                    <form action="">
                        <input type="text" name="" id="" placeholder='Search for location' className='border-2 border-gray rounded-l-lg  h-[54px] '/>
                        <button type="submit" className='bg-custom-purple w-[230px] h-[54px] rounded-md text-white'>Search</button>
                    </form>
                
                
                </div>

            </div>

            <div className='w-[476px]'>
                <img src={heroimg} alt="" />
            </div>
        </section>
     );
}
 
export default Hero;