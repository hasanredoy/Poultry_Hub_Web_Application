import Heading from "@/components/custom/Heading/Heading";
import useGetData from "@/hooks/useGetData";

const OurPartners = () => {
  const partners = useGetData('/api/partners')
  console.log(partners);
  return (
    <main className="my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto ">
      <Heading subHeading={'Our Partners'} title={'Here all of our loved Partners'}></Heading>
      <section>
        {partners?.map(partner=><div key={partner?._id} className="flex flex-col max-w-md p-6 ">
	<img src="https://source.unsplash.com/200x200/?portrait?2" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96  aspect-square" />
	<div>
		<h2 className="text-xl font-semibold">Leroy Jenkins</h2>
		<span className="block pb-2 text-sm">CTO of Company Inc.</span>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
	</div>
</div>)}
      </section>
    </main>
  );
};

export default OurPartners;