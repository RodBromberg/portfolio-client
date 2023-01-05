import React, { useState,useRef } from 'react'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from 'react-hot-toast';
import validator from 'validator';


export const Form = () => {
    const [nameInputError, setNameInputError] = useState('')
    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [message,setMessage] = useState('')
    // const captchaRef: any = useRef(null)
    
    // const url = 'http://localhost:8080/text'
    const url = `https://portfolio-server-production-8c09.up.railway.app/text`



    const success = () => toast('Message Sent Successfully.');
    const failure = () => toast('Message Failed To Send.');
    const invalidNumber = () => toast.error('Please Provide A Valid Phone Number. Eg: XXX-XXX-XXXX');

    const validateName = (name: string) => {
      if(!name.match(/^[a-zA-Z]+/i)) {
        return false
      }
      return true
    }


    const handleSubmit = (e: any) => {   
      e.preventDefault()
      // const token = captchaRef.current.getValue()
      if(message.length < 15) {
        toast.error('Please Provide A Valid Message')
        return
      }
      if(!validateName(name)){
          toast.error('Please Provide A Valid Name Without Numerals')
          return
      }
      if(validator.isMobilePhone(phone,['en-US'])){
        axios.post(url,{
          name:name,
          phone:phone,
          message:message,
        })  
        .then(function (response) {
          success()
          console.log(response);
        })
        .catch(function (error) {
          failure()
          console.log(error);
        });   
        setName('')
        setPhone('');
        setMessage('')
      } else {
        invalidNumber()
      }

      // captchaRef.current.reset()
    }

    // console.log('key here', process.env.VITE_REACT_APP_SITE_KEY)
    // const token = captchaRef.current.getValue()

  return (
    <div className=''>
    <form className={`bg-slate-900 rounded-lg p-5 flex flex-col w-80 mb-20`}>
            <input 
            style={{ background: 'transparent' }}
            className='border-b-[1px] border-slate-100 h-8 text-white mb-8'
            onChange={e => setName(e.target.value)} 
            type="text" 
            placeholder='Name'
            value={name} 
            pattern="[A-Za-z]"
            />
            <input
            className='bg-transparent border-b-[1px] border-slate-100 h-8 text-white mb-8'
            onChange={e => setPhone(e.target.value)} 
            type="tel" 
            placeholder='Phone Number'
            value={phone} 
            />
            <textarea 
            className='bg-transparent border-b-[1px] border-slate-100 mb-5 text-white h-16'
            onChange={e => setMessage(e.target.value)} 
            placeholder='Message'
            value={message} 
            />
            <div className={`flex flex-col bg-slate-200`}>
            <button 
            className={`text-slate-900`} 
            onClick={handleSubmit}>Submit</button>
            </div>

         
          {/* <ReCAPTCHA
          sitekey={process.env.VITE_REACT_APP_SITE_KEY + ''}
          ref={captchaRef}
          // onChange={onChange}
          /> */}
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
    </form>
    </div>
  )
}
