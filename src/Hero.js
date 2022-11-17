import heroimg from './images/Hero.png' 
const Hero = () => {
    return ( 
        // <h2>Hero</h2>

        <section id="hero" className="flex lg:flex-row flex-col justify-around  mb-[67px] max-w-[1220px] w-[85%] mx-auto ">
            <div className=" "> {/**max-w-[100%] w-[646px] */}
                <div className="mb-12 ">
                    <h1 className="text-[3rem]  break words">Rent a <span className='text-custom-purple'>Place</span>  away from <br/>  <span className='text-custom-purple'>Home</span>  in the <span className='text-custom-purple'>Metaverse</span> </h1>
                </div>  {/**text-[1.5rem] */}
               
                    <p  className="text-[20px]  max-w-[580px] mb-12" > we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>  {/**text-[16px] */}
                
                <div className="mb-[16px]"> 
                    <form action="">
                        <input type="text" name="" id="" placeholder='Search for location' className='border-2 border-gray rounded-l-lg  h-[54px] w-[300px]'/>
                        <button type="submit" className='bg-custom-purple md:w-[230px] w-[100px] h-[54px] rounded-md text-white'>Search</button>
                    </form>
                
                
                </div>

            </div>

            <div className='sm:w-[476px] '>
                <img src={heroimg} alt="" />
            </div>
        </section>
     );
}
 
export default Hero;