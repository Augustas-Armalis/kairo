import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EmailCopyButton = ({ email }) => {
  const [copied, setCopied] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setShowPopup(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setCopied(false);
        setShowPopup(false);
      }, 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="relative">
      <div 
        className="bg-hover cursor-pointer w-[32px] h-[32px] rounded-full flex items-center justify-center hover:brightness-150 transition-all duration-300 ease-out"
        onClick={handleCopyEmail}
      >
        <img 
          src={copied ? "/svgs/check.svg" : "/svgs/email.svg"} 
          alt={copied ? "Copied" : "Email"} 
          className="w-auto h-[16px] transition-all duration-300" 
        />
      </div>
      
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute left-[-24px] right-0 mx-auto w-fit -top-8 z-50 bg-[#0E2F23] border border-[#1E5B45] text-[#D4E1DC] px-3 pt-[4px] pb-[3px] leading-tight rounded-full text-sm font-medium whitespace-nowrap"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Team = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      transform: "translateY(32px)"
    },
    visible: { 
      opacity: 1, 
      transform: "translateY(0px)",
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full min-h-screen max-[601px]:min-h-fit  px-3  items-center justify-center max-[601px]:pt-[150px]">
      <motion.div 
        className="flex flex-col items-center w-full max-w-[569px] gap-[10px]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Augustas */}
        <motion.div 
          className="flex flex-row gap-[12px] w-full max-w-[569px] bg-bg rounded-[16px] h-[120px] max-[601px]:!h-fit p-[10px] transition-all duration-300"
          variants={cardVariants}
        >
          
          <div className="bg-hover w-[100px] h-fill overflow-hidden rounded-[10px] flex-shrink-0 "><img src="/images/team/augustas.webp" alt="Pfp" className="w-full h-full object-cover" /></div>

          <div className="flex flex-row w-full flex-wrap h-fill items-end justify-between max-[601px]:h-fit max-[601px]:gap-4">

            <div className="flex flex-col gap-[8px] pt-[2px] w-fit h-full">
              <p className="text-white text-[20px] font-medium leading-tight">Augustas</p>
              <p className="text-alt text-sm max-w-[240px] max-[601px]:max-w-full leading-[140%] h-full">CEO, Founder. Senior designer & dev. Web design agency owner</p>
            </div>

            <div className="flex flex-row gap-[8px] w-fit">
              <a href="https://x.com/AugustasDesign" target="_blank" rel="noopener noreferrer" className="bg-hover w-[32px] h-[32px] rounded-full flex items-center justify-center hover:brightness-150 transition-all duration-300 ease-out">
                <img src="/svgs/twitter.svg" alt="Linkedin" className="w-auto h-[16px]" />
              </a>
              <a href="https://www.linkedin.com/in/augustas-web/" target="_blank" rel="noopener noreferrer" className="bg-hover w-[32px] h-[32px] rounded-full flex items-center justify-center hover:brightness-150 transition-all duration-300 ease-out">
                <img src="/svgs/linkedin.svg" alt="Linkedin" className="w-auto h-[16px]" />
              </a>
  
              <EmailCopyButton email="augustas@kairostudio.co" />
  
              <a href="https://www.augustas.co" target="_blank" rel="noopener noreferrer" className="bg-hover w-[32px] h-[32px] rounded-full flex items-center justify-center hover:brightness-150 transition-all duration-300 ease-out">
                <img src="/svgs/aweb.svg" alt="Linkedin" className="w-auto h-[12px]" />
              </a>
               
            </div>

          </div>

        </motion.div>

        {/* Matthew */}
        <motion.div 
          className="flex flex-row gap-[12px] w-full max-w-[569px] bg-bg rounded-[16px] h-[120px] max-[601px]:!h-fit p-[10px] transition-all duration-300"
          variants={cardVariants}
        >
          
          <div className="bg-hover w-[100px] h-fill overflow-hidden rounded-[10px] flex-shrink-0 "><img src="/images/team/matthew.webp" alt="Pfp" className="w-full h-full object-cover" /></div>

          <div className="flex flex-row w-full flex-wrap h-fill items-end justify-between max-[601px]:h-fit max-[601px]:gap-4">

            <div className="flex flex-col gap-[8px] pt-[2px] w-fit h-full">
              <p className="text-white text-[20px] font-medium leading-tight">Matthew</p>
              <p className="text-alt text-sm max-w-[230px] leading-[140%] h-full max-[601px]:max-w-full">CMO, co-founder. Brand growth and sales funnels specialist</p>
            </div>

            <div className="flex flex-row gap-[8px] w-fit">
              <a href="https://x.com/motiejusvar" target="_blank" rel="noopener noreferrer" className="bg-hover w-[32px] h-[32px] rounded-full flex items-center justify-center hover:brightness-150 transition-all duration-300 ease-out">
                <img src="/svgs/twitter.svg" alt="Twitter" className="w-auto h-[16px]" />
              </a>
  
              <EmailCopyButton email="matthew@kairostudio.co" />
  
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="bg-hover w-[32px] h-[32px] rounded-full flex items-center justify-center hover:brightness-150 transition-all duration-300 ease-out">
                <img src="/svgs/stairso.svg" alt="Stairso" className="w-auto h-[14px]" />
              </a>
               
            </div>

          </div>

        </motion.div>

        {/* Daniel */}
        <motion.div 
          className="flex flex-row gap-[12px] w-full max-w-[569px] bg-bg rounded-[16px] h-[120px] max-[601px]:!h-fit p-[10px] transition-all duration-300"
          variants={cardVariants}
        >
          
          <div className="bg-hover w-[100px] h-fill overflow-hidden rounded-[10px] flex-shrink-0 "><img src="/images/team/daniel.webp" alt="Pfp" className="w-full h-full object-cover" /></div>

          <div className="flex flex-row w-full flex-wrap h-fill items-end justify-between max-[601px]:h-fit max-[601px]:gap-4">

            <div className="flex flex-col gap-[8px] pt-[2px] w-fit h-full">
              <p className="text-white text-[20px] font-medium leading-tight">Daniel</p>
              <p className="text-alt text-sm max-w-[210px] leading-[140%] h-full max-[601px]:max-w-full">Junior designer, co-founder. Web design agency owner</p>
            </div>

            <div className="flex flex-row gap-[8px] w-fit">
              <a href="https://x.com/DanieliusWeb" target="_blank" rel="noopener noreferrer" className="bg-hover w-[32px] h-[32px] rounded-full flex items-center justify-center hover:brightness-150 transition-all duration-300 ease-out">
                <img src="/svgs/twitter.svg" alt="Twitter" className="w-auto h-[16px]" />
              </a>
  
              <EmailCopyButton email="daniel@kairostudio.co" />
  
              <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="bg-hover w-[32px] h-[32px] rounded-full flex items-center justify-center hover:brightness-150 transition-all duration-300 ease-out">
                <img src="/svgs/vividly.svg" alt="Linkedin" className="w-auto h-[19px]" />
              </a>
               
            </div>

          </div>

        </motion.div>

      </motion.div>
    </div>
  )
}
export default Team

