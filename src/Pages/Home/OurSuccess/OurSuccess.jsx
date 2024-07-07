import Heading from '@/components/custom/Heading/Heading';
import React from 'react';

const OurSuccess = () => {
  return (
    <main>
      <header><Heading subHeading={'Our Journey'} title={'All of our Achievement'}/></header>
      <section>
        {/* our users */}
        <div className=' w-40 h-40 bg-yellow-600 text-black rounded-t-full  '>
          <h3>66</h3>
          <p>Farmer and Client are using our platform/shop.</p>
        </div>
      </section>
    </main>
  );
};

export default OurSuccess;