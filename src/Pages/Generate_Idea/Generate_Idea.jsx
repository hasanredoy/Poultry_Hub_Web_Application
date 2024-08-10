'use client'
import Image from 'next/image';
import bannerImage from '../../../public/generateIdea/ai-cloud-concept-with-robot-arm.jpg'
import { FaLocationArrow } from 'react-icons/fa';
import aiIcon from '../../../public/generateIdea/chatbot-0.png'
import useAxios from '@/hooks/useAxios';
import axios from 'axios';
import { useState } from 'react';

const Generate_Idea = () => {
  const [promptInput , setPromptInput]=useState('')
  // get axios 
  const axiosHook= useAxios()
  const handlePrompt= async(e)=>{
    e.preventDefault()
    const prompt=e.target.text.value
    console.log(prompt);
    const res = await axiosHook.post('/api/generate_idea',{prompt})
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
 {/* input section  */}
     <section className=' mt-14 flex gap-6 items-center justify-center'>
     <div className=' ='>
     <Image src={aiIcon} width={50} height={50} alt='ai chatbot icon' className=''></Image>
     </div>
      <form onSubmit={handlePrompt}>
      <div className="join flex-1">
       
       <input
         type="text"
         name='text'
         defaultValue={promptInput}
         placeholder="Ask Anything"
         className=" px-3 border border-gray-400 outline-none join-item w-full min-w-full " />
       <button type='submit' className="btn border-2 btn-primary join-item  flex items-center gap-2">Ask</button>
     </div>  
      </form>
            </section> 
      </section>
    </main>
  );
};

export default Generate_Idea;