import ctaimg from './images/ctaimg.png'
const CTA = () => {
    return (
      <section className='flex md:flex-row flex-col m-auto w-[1140px] max-w-[100%]  mt-[54px]'> {/**h-[774px] */}
        <div className='pt-[180px] text-center sm:text-left '>
          <h2 className='text-white text-5xl font-bold '>Metabnb NFTs</h2>
          <p className='text-white text-lg font-normal w-[451px] pt-[35px] pb-[58px] '>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="bg-white text-custom-purple w-[156px] h-[48px] rounded-md">Learn more</button>
        </div>

        <div className='pt-[100px]  '> {/**w-[704px]  h-[574]   */}
            <img src={ctaimg} className="sm:w-[100%]  h-auto pb-4" alt="" />
        </div>
      </section>
    );
}
 
export default CTA;