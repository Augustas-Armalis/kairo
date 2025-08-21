import { Link } from 'react-router-dom'


const Home = () => {
  return (

    <>


      <div className="flex flex-col w-full h-full min-h-screen items-center pt-[160px] px-3">
        <div className="flex flex-col items-center w-full max-w-[569px]">
      
          <h1 className="text-[52px] text-center leading-[120%] tracking-[-0.035em] font-[520] max-w-[500px] max-[593px]:text-4xl max-[593px]:max-w-[320px] capitalize">We build cool SaaS And make It work</h1>
          <p className="text-center font-[500] leading-[140%] mt-3 text-lg text-alt max-w-[300px] max-[593px]:text-base max-[593px]:max-w-[240px]">Holding Venture studio of many World-class startups</p>
          <div className="flex flex-row items-center gap-2 mt-10">
            <Link to="/ventures" className="flex items-center justify-center w-fit h-fit pb-[7px] pt-[9px] px-6 pr-[14px] rounded-full transition-all duration-300 hover:bg-white/90 bg-white text-black group">
              <p className="text-lg leading-tight">Our Ventures</p>
              <img src="/svgs/arrow.svg" alt="arrow" className="w-[14px] h-[14px] ml-[8px] transition-transform duration-300 group-hover:rotate-[360deg]" />
            </Link>
      
            <Link to="/acquire" className="flex items-center justify-center w-fit h-fit pb-[8px] pt-[10px] px-6 rounded-full transition-all duration-300 border border-hover hover:bg-hover bg-bg text-white group">
              <p className="text-lg leading-tight">Acquire</p>
            </Link>
          </div>

          <div className="bg-bg w-fit max-w-full grid auto-flow-col grid-cols-[repeat(auto-fit,52px)] gap-2 mt-24 p-2 rounded-2xl">
            <img src="/images/products/example/example1.png" className="w-[52px] h-[52px] object-cover rounded-[10px]" />
            <img src="/images/products/example/example1.png" className="w-[52px] h-[52px] object-cover rounded-[10px]" />
            <img src="/images/products/example/example1.png" className="w-[52px] h-[52px] object-cover rounded-[10px]" />
            <img src="/images/products/example/example1.png" className="w-[52px] h-[52px] object-cover rounded-[10px]" />
            <img src="/images/products/example/example1.png" className="w-[52px] h-[52px] object-cover rounded-[10px]" />
          </div>



          <div className="w-full h-auto aspect-[1440/890] bg-bg border border-hover rounded-2xl mt-4">
            <img src="/images/products/example/bigexample1.png" alt="Product Logo" className="w-full h-full object-cover rounded-2xl" />
          </div>

          
        </div>
      </div>


    </>

    
  )
}

export default Home
