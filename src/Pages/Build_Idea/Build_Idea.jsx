import Image from 'next/image';
import bannerImage from '../../../public/generateIdea/ai-cloud-concept-with-robot-arm.jpg'
import { FaLocationArrow } from 'react-icons/fa';
import aiIcon from '../../../public/generateIdea/chatbot.png'

const Build_Idea = () => {
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
            <button className='btn-prompt'>How to Build A Chicken Farm?</button>
            
            <button className='btn-prompt'>How can I optimize my chicken farm?</button>
            <button className='btn-prompt'>What is the best time to start a Chicken farm?</button>
            <button className='btn-prompt'>How can I build a chicken feed producing factory?</button>
            <button className='btn-prompt'>How much money do I need to build a medium poultry farm ?</button>
            <button className='btn-prompt'>How much money do I need to build a medium poultry feed factory?</button>

         </div>
 {/* input section  */}
     <section className=' mt-14 flex gap-6 items-center justify-center'>
     <div className=' ='>
     <Image src={aiIcon} width={40} height={40} alt='ai chatbot icon' className=' '></Image>
     </div>
     <div className="join flex-1">
       
       <input
         type="text"
         placeholder="Ask Anything"
         className=" px-3 border border-gray-400 outline-none join-item w-full min-w-full " />
       <button className="btn border-2 btn-primary join-item  flex items-center gap-2">Ask<FaLocationArrow className=' -rotate-45'></FaLocationArrow></button>
     </div>      
            </section> 
      </section>
    </main>
  );
};

export default Build_Idea;