import Image from 'next/image';
import noDataFound from '../../../../public/all-items/no_data_found.png'
const DataNotFound = () => {
  return (
      <div className=" flex justify-center items-center w-full h-[calc(100dvh-200px)]">
        <Image src={noDataFound} alt="no data found" width={600} height={600}></Image>
        </div>
  );
};

export default DataNotFound;