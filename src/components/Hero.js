// Hero.js

import React from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import desktop from '../assets/desktop.png';
import pp from '../assets/pp.png';
import '../App.css';

const Hero = () => {
  return (
    <>
      <section className="flex-col relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915eff]">Samyak</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a Frontend developer
            </p>
            <motion.div variants={slideIn('left', 'left', 0.2, 1)}>
              <div className="flex  justify-center item-center">
                <img src={desktop} className="desktop flex flex-col animate-pulse" alt="Desktop" />
                
                <img src={pp} className="image1 flex flex-row flex-col" alt="Profile" />
                
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute xs:bottom-10 bottom-30 w-full flex justify-center item-center">
          <a href="#about"></a>
        </div>
      </section>
    </>
  );
};

export default Hero;
