import Reviews from "@/Pages/Reviews/Reviews";
  export const metadata = {
    title: "Reviews",
    description: "poultry hub reviews page, in this page user can look what poultry hub's users says about them",
  };
const ReviewsPage = () => {

  return (
    <main className=" min-h- my-20 max-w-[95%] overflow-hidden lg:max-w-[90%] mx-auto mt-[54px] lg:mt-[70px]  ">
      <Reviews></Reviews>
    </main>
  );
};

export default ReviewsPage;