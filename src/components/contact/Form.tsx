import React, { useState,useRef } from 'react'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";


export const Form = () => {
    const [nameInputError, setNameInputError] = useState('')
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [message,setMessage] = useState('')
    // const captchaRef: any = useRef(null)
    
    // const url = 'http://localhost:8080/text'
    const url = `https://portfolio-server-production-8c09.up.railway.app/text`

    const handleSubmit = (e: any) => {   
      e.preventDefault()
      // const token = captchaRef.current.getValue()
      axios.post(url,{
        name:name,
        phone:phone,
        message:message,
      })  
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });   
      setName('')
      setPhone('');
      setMessage('')
      // captchaRef.current.reset()
    }

    // console.log('key here', process.env.VITE_REACT_APP_SITE_KEY)
    // const token = captchaRef.current.getValue()

  return (
    <div className=''>
    <form className={`bg-slate-900 rounded-lg p-5 flex flex-col w-80 mb-20`}>
            <input 
            style={{ background: 'transparent' }}
            className='border-b-[1px] border-slate-100 text-white mb-6'
            onChange={e => setName(e.target.value)} 
            type="text" 
            placeholder='name'
            value={name} 
            />
            <input
            className='bg-transparent border-b-[1px] border-slate-100 text-white mb-6'
            onChange={e => setPhone(e.target.value)} 
            type="tel" 
            placeholder='number'
            value={phone} 
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
            <textarea 
            className='bg-transparent border-b-[1px] border-slate-100 mb-6 text-white'
            onChange={e => setMessage(e.target.value)} 
            // type="text" 
            placeholder='message'
            value={message} 
            />
            <button 
            className={`text-white`} 
            onClick={handleSubmit}>Submit</button>

         
          {/* <ReCAPTCHA
          sitekey={process.env.VITE_REACT_APP_SITE_KEY + ''}
          ref={captchaRef}
          // onChange={onChange}
          /> */}
    </form>
    </div>
  )
}
