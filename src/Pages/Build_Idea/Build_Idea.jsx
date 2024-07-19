import Image from 'next/image';
import bannerImage from '../../../public/generateIdea/ai-cloud-concept-with-robot-arm.jpg'
const Build_Idea = () => {
  return (
    <main className='my-28 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto flex gap-2 '>
      {/* image section  */}
      <section className='hidden lg:block'>
        <Image src={bannerImage} alt='ai banner' width={500} height={500}></Image>
      </section>
      {/* ai section  */}
      <section>
         {/* prompt div  */}
         <div>
            <button className='btn-prompt'>How to Build A Chicken Farm</button>
         </div>
      </section>
    </main>
  );
};

export default Build_Idea;