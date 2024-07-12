import Heading from "@/components/custom/Heading/Heading";
import useGetData from "@/hooks/useGetData";

const OurPartners = () => {
  const partners = useGetData('/api/partners')
  console.log(partners);
  return (
    <div>
      <Heading subHeading={'Our Partners'} title={'Here all of our loved Partners'}></Heading>
    </div>
  );
};

export default OurPartners;