'use client'
import Image from 'next/image';
import bannerImage from '../../../public/generateIdea/ai-cloud-concept-with-robot-arm.jpg'
import { FaArrowUp, FaLocationArrow } from 'react-icons/fa';
import aiIcon from '../../../public/generateIdea/chatbot-0.png'
import useAxios from '@/hooks/useAxios';
import axios from 'axios';
import { useState } from 'react';

const Generate_Idea = () => {
  const [promptInput , setPromptInput]=useState('')
  const [generatedText, setGeneratedText]= useState('')
  // get axios 
  const axiosHook= useAxios()
  const handlePrompt= async(e)=>{
    e.preventDefault()
    const prompt=e.target.text.value
    console.log(prompt);
    const res = await axiosHook.post('/api/generate_idea',{prompt})
    setGeneratedText(res?.data?.text)
    console.log(res.data);
  }
  return (
    <main className='my-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto flex gap-10 '>
      {/* image section  */}
      <section className='hidden lg:block'>
        <Image src={bannerImage} className=' h-[500px]' alt='ai banner' width={500} height={800}></Image>
      </section>
      {/* ai section  */}
      <section>
         {/* prompt div  */}
         <div className='space-y-5 mx-auto'>
            <button onClick={()=>setPromptInput('How to Build A Chicken Farm')} className='btn-prompt'>How to Build A Chicken Farm?</button>
            
            <button onClick={()=>setPromptInput('How can I optimize my chicken farm')} className='btn-prompt'>How can I optimize my chicken farm?</button>
            <button onClick={()=>setPromptInput('What is the best time to start a Chicken farm')} className='btn-prompt'>What is the best time to start a Chicken farm?</button>
            <button onClick={()=>setPromptInput('How can I build a chicken feed producing factory')} className='btn-prompt'>How can I build a chicken feed producing factory?</button>
            <button onClick={()=>setPromptInput('How much money do I need to build a medium poultry farm ')} className='btn-prompt'>How much money do I need to build a medium poultry farm ?</button>
            <button onClick={()=>setPromptInput('How much money do I need to build a medium poultry feed factory')} className='btn-prompt'>How much money do I need to build a medium poultry feed factory?</button>

         </div>
         {/* section for generated text  */}
         <section>
          <h2 className=' text-lg font-semibold p-5'>{generatedText?generatedText:''}</h2>
         </section>
 {/* input section  */}
     <section className=' mt-14 flex gap-6  items-center '>
     <div className=''>
     <Image src={aiIcon} width={50} height={50} alt='ai chatbot icon' className=''></Image>
     </div>
      <form className=' flex-1 w-full ' onSubmit={handlePrompt}>
      <div className="flex gap-0 relative ">
       
       <textarea
         name='text'
         defaultValue={promptInput}
         placeholder="Ask Anything"
         className=" px-3 pr-3 input border border-gray-400 outline-none  w-full min-w-[100%] " />
       <button type='submit' className="right-0  absolute border-2 px-4 text-white py-4 -top-0.5 rounded-r-md bg-primary   flex items-center gap-2"><FaArrowUp/></button>
     </div>  
      </form>
            </section> 
      </section>
    </main>
  );
};

export default Generate_Idea;