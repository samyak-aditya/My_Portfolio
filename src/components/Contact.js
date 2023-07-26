import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading, SetLoading]= useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    SetLoading(true);

//service_u0qyrfe
//template_pntq29c
//A6VmqFcVlqk_9Cqd2

    emailjs.send('service_u0qyrfe',
    'template_pntq29c',{
      from_name:form.name,
      to_name:'Adrian',
      from_email: form.email,
      to_email:'samyakaditya0000@gmail.com',
      message:form.message,

    } ,'A6VmqFcVlqk_9Cqd2')
    .then(() =>{
      SetLoading(false);
      alert ('Thank you. I will get back to you as soon as possible.');
      
      setForm({
        name:'',
        email: '',
        message: '',
      });

    },
    (error) => {
      SetLoading(false)
  
      console.log(error);
      alert('Something went Wrong.')
    })
  } 

  return (
    <div className='xl:mt-12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
      variants={slideIn('left','between',0.2,1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex-col gap-8'>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
            Your Name
          </span>
          <input 
          type='text'
          name='name'
          value={form.name}
          onChange={handleChange}
          placeholder="What's your name?"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium' />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
            Your Email
          </span>
          <input 
          type='text'
          name='email'
          value={form.email}
          onChange={handleChange}
          placeholder="What's your email?"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium' />
        </label>
        <label className='flex flex-col'>
          <span className='text-white font-medium mb-4'>
            Your Message
          </span>
          <textarea
          rows={7} 
          type='text'
          name='message'
          value={form.message}
          onChange={handleChange}
          placeholder="What do you want to say?"
          className='bg-tertiary py-4 px-6
          placeholder:text-secondary
          text-white rounded-lg outlined-none
          border-none font-medium' />
        </label>

        <button
        type='submit' className='bg-tertiary py-3 px-8
        outline-none w-fit text-white
        font-bold shadow-md shadow-primary rounded-xl'>
          {loading ? 'Sending...' : 'Send'}
        </button>

        </form>
      </motion.div>

      <motion.div
          variants={slideIn('right', "between", 0.2,
          1)}
          className="xl:flex-1 x1:h-auto md:h-
          [570px] h-[370px]">
          <EarthCanvas />
          </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")