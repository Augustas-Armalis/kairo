import useMetaTags from '../hooks/useMetaTags.js';

const Acquire = () => {
  useMetaTags({
    title: 'Acquire - Kairo',
    description: 'We build cool SaaS And make It work. Holding Venture studio of many World-class startups. Discover innovative solutions and cutting-edge technology.',
    ogImage: 'https://kairostudio.co/images/ogimage.webp',
    canonicalUrl: 'https://kairostudio.co/acquire'
  });

  return (
    <div className="flex flex-col w-full h-full min-h-screen items-center pt-[160px] px-3 max-[601px]:pt-[150px]">
      <div className="flex flex-col items-center w-full max-w-[569px] justify-center mt-[100px]">
    
        hello@kairostudio.co
        
      </div>
    </div>
  )
}

export default Acquire
