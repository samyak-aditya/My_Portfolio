import React from 'react'
import { VerticalTimeline, VerticalTimelineElement  } from 'react-vertical-timeline-component'
import {motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles'
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { ComputersCanvas } from './canvas';


const ExperienceCard =({experiences}) => (

  
  <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experiences.date}
      iconStyle={{ background: experiences.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experiences.icon}
            alt={experiences.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experiences.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experiences.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experiences.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
)


const Experience=() =>{
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
        Certifications
      </h2>
    </motion.div>
    <div className='mt-20 flex flex.col'>
      <VerticalTimeline>
        {experiences.map((experiences, index) =>(
          <ExperienceCard key={index} experiences={experiences} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper (Experience, "work")