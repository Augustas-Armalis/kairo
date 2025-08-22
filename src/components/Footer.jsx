const Footer = () => {
  return (
    <div className="flex flex-col w-full h-fit items-center mt-[92px] px-3 mb-8">
      <div className="flex flex-row flex-wrap gap-2 items-center justify-between w-full max-w-[569px] ">
        <p className="text-darkalt text-base">Kairo © 2025</p>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-row gap-1 max-[456px]:hidden">
          <a className="w-[24px] h-[24px] flex items-center justify-center hover:brightness-150 transition-all duration-300 " href="https://www.instagram.com/kairoventure" target="_blank" rel="noopener noreferrer"><img src="/svgs/instagram.svg" alt="instagram" className="w-[14px] h-[14px]"/></a>
          <a className="w-[24px] h-[24px] flex items-center justify-center hover:brightness-150 transition-all duration-300 " href="https://www.youtube.com/@KairoVenture" target="_blank" rel="noopener noreferrer"><img src="/svgs/youtube.svg" alt="youtube" className="w-auto h-[14px]"/></a>
          <a className="w-[24px] h-[24px] flex items-center justify-center hover:brightness-150 transition-all duration-300 " href="https://www.linkedin.com/company/kairoventure" target="_blank" rel="noopener noreferrer"><img src="/svgs/linkedin.svg" alt="linkedin" className="w-[14px] h-[14px]"/></a>
          <a className="w-[24px] h-[24px] flex items-center justify-center hover:brightness-150 transition-all duration-300 " href="https://x.com/KairoVenture" target="_blank" rel="noopener noreferrer"><img src="/svgs/twitter.svg" alt="twitter" className="w-[14px] h-[14px]"/></a>
        </div>

        <div className="hidden max-[456px]:flex flex-row gap-1">
          <a className="w-[24px] h-[24px] flex items-center justify-center hover:brightness-150 transition-all duration-300 " href="https://www.instagram.com/kairoventure" target="_blank" rel="noopener noreferrer"><img src="/svgs/instagram.svg" alt="instagram" className="w-[16px] h-[16px]"/></a>
          <a className="w-[24px] h-[24px] flex items-center justify-center hover:brightness-150 transition-all duration-300 " href="https://www.youtube.com/@KairoVenture" target="_blank" rel="noopener noreferrer"><img src="/svgs/youtube.svg" alt="youtube" className="w-auto h-[16px]"/></a>
          <a className="w-[24px] h-[24px] flex items-center justify-center hover:brightness-150 transition-all duration-300 " href="https://www.linkedin.com/company/kairoventure" target="_blank" rel="noopener noreferrer"><img src="/svgs/linkedin.svg" alt="linkedin" className="w-[16px] h-[16px]"/></a>
          <a className="w-[24px] h-[24px] flex items-center justify-center hover:brightness-150 transition-all duration-300 " href="https://x.com/KairoVenture" target="_blank" rel="noopener noreferrer"><img src="/svgs/twitter.svg" alt="twitter" className="w-[16px] h-[16px]"/></a>
        </div>
        
        <p className="text-darkalt text-base">hello@kairostudio.co</p>
      </div>
    </div>
  )
}

export default Footer