import Heading from "@/components/custom/Heading/Heading";

const ReviewsPage = () => {
  return (
    <main className=" min-h- my-20 max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto flex flex-col md:flex-row">
       {/* aside for feed back form    */}
      <aside className=" w-[30%]"></aside>
      {/* reviews section  */}
      <section className=" w-[68%]">
        <Heading subHeading={"How We Are?"}title={'Hear What Our Users Says!'}></Heading>

      </section>
    </main>
  );
};

export default ReviewsPage;