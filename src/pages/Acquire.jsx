import { useEffect } from 'react';

const Acquire = () => {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = 'Acquire - Kairo';
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', 'Acquire - Kairo');
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', 'We build cool SaaS And make It work. Holding Venture studio of many World-class startups. Discover innovative solutions and cutting-edge technology.');
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', 'Acquire - Kairo');
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', 'We build cool SaaS And make It work. Holding Venture studio of many World-class startups. Discover innovative solutions and cutting-edge technology.');
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute('href', 'https://kairostudio.co/acquire');
  }, []);

  return (
    <div className="flex flex-col w-full h-full min-h-screen items-center pt-[160px] px-3 max-[601px]:pt-[150px]">
      <div className="flex flex-col items-center w-full max-w-[569px] justify-center mt-[100px]">
    
        hello@kairostudio.co
        
      </div>
    </div>
  )
}

export default Acquire
