import ctaimg from './images/ctaimg.png'
const CTA = () => {
    return (
      <section className='bg-custom-purple'>
        <div>
          <h2 className='text-white'>Metabnb NFTs</h2>
          <p className='text-white'>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button>Learn more</button>
        </div>

        <div>
            <img src={ctaimg} alt="" />
        </div>
      </section>
    );
}
 
export default CTA;