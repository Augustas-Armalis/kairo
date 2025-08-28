// Utility functions for updating meta tags dynamically
export const updateMetaTags = (title, description, image, url) => {
  // Update title
  document.title = title;
  
  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description);
  }
  
  // Update Open Graph tags
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title);
  }
  
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) {
    ogDesc.setAttribute('content', description);
  }
  
  let ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', image);
  }
  
  let ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', url);
  }
  
  // Update Twitter tags
  let twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) {
    twitterTitle.setAttribute('content', title);
  }
  
  let twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) {
    twitterDesc.setAttribute('content', description);
  }
  
  let twitterImage = document.querySelector('meta[name="twitter:image"]');
  if (twitterImage) {
    twitterImage.setAttribute('content', image);
  }
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', url);
  }
};

export const resetMetaTags = () => {
  // Reset to default values from index.html
  const defaultTitle = 'Kairo - We build cool SaaS and make it work';
  const defaultDescription = 'We build cool SaaS And make It work. Holding Venture studio of many World-class startups. Discover innovative solutions and cutting-edge technology.';
  const defaultImage = 'https://kairostudio.co/images/ogimage.webp';
  const defaultUrl = 'https://kairostudio.co';
  
  updateMetaTags(defaultTitle, defaultDescription, defaultImage, defaultUrl);
};
