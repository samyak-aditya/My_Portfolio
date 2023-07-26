import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard=({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div variants={fadeIn('right', "spring",0.5 * index,0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow card'>
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className=' animate-[spin_10s_linear_infinite] w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (

    
    <>
    <motion.div variant={textVariant()}>
      <p className={styles.sectionSubText}>Indroduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] z-50'>
      I am a passionate and motivated front-end developer, and eager to 
      contribute my skills to building engaging and user-friendly digital experiences. 
      With a strong foundation in HTML, CSS, and JavaScript, 
      I focus on transforming design concepts into responsive and visually appealing websites. 
      Collaboration and attention to detail are my strengths, as
       I strive to create cohesive and polished end products that exceed client expectations.
        I am a quick learner, constantly staying updated with the latest front-end technologies,
         and I embrace new challenges with a growth mindset. 
      Let's create exceptional digital experiences together!
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper ( About, "about" )