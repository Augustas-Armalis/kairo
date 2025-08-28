import { Link } from 'react-router-dom'
import SaasShowcase from '../components/SaasShowcase.jsx'
import { useEffect } from 'react'

const Home = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Kairo - We build cool SaaS and make it work';
  }, []);

  return (
    <>
      <div className="flex flex-col w-full h-full min-h-screen items-center pt-[160px] px-3 max-[601px]:pt-[150px]">
      <div className="flex flex-col items-center w-full max-w-[569px]">
    
        <h1 className="text-[52px] text-center leading-[120%] tracking-[-0.035em] font-[520] max-w-[500px] max-[593px]:text-4xl max-[593px]:max-w-[320px] capitalize">We build cool SaaS And make It work</h1>
        <p className="text-center font-[500] leading-[140%] mt-3 text-lg text-alt max-w-[300px] max-[593px]:text-base max-[593px]:max-w-[240px]">Holding Venture studio of many World-class startups</p>
        <div className="flex flex-row items-center gap-2 mt-10">
          <Link to="/ventures" className="flex items-center justify-center w-fit h-fit pb-[7px] pt-[9px] px-6 pr-[14px] rounded-full transition-all duration-300 hover:bg-white/90 bg-white text-black group">
            <p className="text-lg leading-tight">Our Ventures</p>
            <img src="/svgs/arrow.svg" alt="arrow" className="w-[14px] h-[14px] ml-[8px] transition-transform duration-300 group-hover:rotate-[360deg]" />
          </Link>
    
          <Link to="/acquire" className="flex items-center justify-center w-fit h-fit pb-[8px] pt-[9px] px-6 rounded-full transition-all duration-300 border border-hover hover:bg-hover bg-bg text-white group">
            <p className="text-lg leading-tight">Acquire</p>
          </Link>
        </div>

        {/* Interactive SaaS Showcase */}
        <div className="w-full flex justify-center mt-24">
          <SaasShowcase />
        </div>
        
              </div>
      </div>
    </>
  )
}

export default Home
