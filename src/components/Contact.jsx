import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m5kua6z', 'template_huhc2mq', form.current, {
        publicKey: 'KCL5p61sO1p8z3DrO',
      })
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="contact">
      <div className="contact flex w-[1245px] h-[495px] mx-auto items-center mt-5 flex-col border-1 border-[#2c2c2e] rounded-4xl">
        <h1>Contact me</h1>
        <div className='flex justify-between w-full m-5 gap-5'>
          <div className="left w-1/2"><img src="image/contactImg.png" alt="" /></div>
          <div className="right w-[613px] h-[427px] flex items-center justify-end mr-5">
            <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-2 p-2'>
              {/* <label>Name</label> */}
              <input className=' w-[613px] h-[55px] p-2 rounded-[6px] border-1 border-[#2c2c2e]' type="text" name="user_name" placeholder='Enter name' />
              {/* <label>Email</label> */}
              <input className='w-[613px] h-[55px] p-2 rounded-[6px] border-1 border-[#2c2c2e]' type="email" name="user_email" placeholder='Enter email' />
              {/* <label>Message</label> */}
              <textarea className='w-[613px] h-[150px] p-2 rounded-[6px] border-1 border-[#2c2c2e]' name="message" placeholder='Your message...' />
              <input className='w-[80px] h-[30px] text-center bg-gray-800 rounded-lg px-2 hover:cursor-pointer hover:bg-gray-900' type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
