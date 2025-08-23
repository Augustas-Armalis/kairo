import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SaasShowcase from '../components/SaasShowcase.jsx'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      transform: "translateY(40px)"
    },
    visible: { 
      opacity: 1, 
      transform: "translateY(0px)",
      transition: {
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.05
      }
    }
  };

  const subtitleVariants = {
    hidden: { 
      opacity: 0, 
      transform: "translateY(40px)"
    },
    visible: { 
      opacity: 1, 
      transform: "translateY(0px)",
      transition: {
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.15
      }
    }
  };

  const venturesButtonVariants = {
    hidden: { 
      opacity: 0, 
      transform: "translateY(40px)"
    },
    visible: { 
      opacity: 1, 
      transform: "translateY(0px)",
      transition: {
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.25
      }
    }
  };

  const acquireButtonVariants = {
    hidden: { 
      opacity: 0, 
      transform: "translateY(40px)"
    },
    visible: { 
      opacity: 1, 
      transform: "translateY(0px)",
      transition: {
        duration: 1.3,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.3
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full min-h-screen items-center pt-[160px] px-3 max-[601px]:pt-[150px]">
      <motion.div 
        className="flex flex-col items-center w-full max-w-[569px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
     
        <motion.h1 
          className="text-[52px] text-center leading-[120%] tracking-[-0.035em] font-[520] max-w-[500px] max-[593px]:text-4xl max-[593px]:max-w-[320px] capitalize"
          variants={titleVariants}
          style={{ willChange: "transform, opacity" }}
        >
          We build cool SaaS And make It work
        </motion.h1>
        <motion.p 
          className="text-center font-[500] leading-[140%] mt-3 text-lg text-alt max-w-[300px] max-[593px]:text-base max-[593px]:max-w-[240px]"
          variants={subtitleVariants}
          style={{ willChange: "transform, opacity" }}
        >
          Holding Venture studio of many World-class startups
        </motion.p>
        <motion.div 
          className="flex flex-row items-center gap-2 mt-10"
        >
          <motion.div 
            variants={venturesButtonVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <Link to="/ventures" className="flex items-center justify-center w-fit h-fit pb-[7px] pt-[9px] px-6 pr-[14px] rounded-full transition-all duration-300 hover:bg-white/90 bg-white text-black group">
              <p className="text-lg leading-tight">Our Ventures</p>
              <img src="/svgs/arrow.svg" alt="arrow" className="w-[14px] h-[14px] ml-[8px] transition-transform duration-300 group-hover:rotate-[360deg]" />
            </Link>
          </motion.div>
    
          <motion.div 
            variants={acquireButtonVariants}
            style={{ willChange: "transform, opacity" }}
          >
            <Link to="/acquire" className="flex items-center justify-center w-fit h-fit pb-[8px] pt-[9px] px-6 rounded-full transition-all duration-300 border border-hover hover:bg-hover bg-bg text-white group">
              <p className="text-lg leading-tight">Acquire</p>
            </Link>
          </motion.div>
        </motion.div>

        {/* Interactive SaaS Showcase */}
        <div className="w-full flex justify-center mt-24">
          <SaasShowcase />
        </div>
        
      </motion.div>
    </div>
  )
}

export default Home
