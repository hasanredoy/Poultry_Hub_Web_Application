import Image from 'next/image';
import signUp_banner from '../../../public/sign-up.png';
import React from 'react';
import Link from 'next/link';


const Register = () => {
  return (
    <main className="hero  min-h-screen  max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className=" flex-1 lg:text-left w-full min-h-screen h-full">
      <Image src={signUp_banner} className=' w-full h-full' alt='login banner imge' height={700} width={800}/>
    </div>
    <div className="flex-1 card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
      <h3 className=' text-center subtitle pt-3'>Please Register</h3>
      <form className="card-body">
        {/* Name div  */}
        <div className="form-control">
          <label className="label">
            <span className=" description ">Full Name</span>
          </label>
          <input type="text" placeholder="Full Name" className="input input-bordered" required />
        </div>
        {/* Phone number div  */}
        <div className="form-control">
          <label className="label">
            <span className=" description ">Phone Number</span>
          </label>
          <input type="number" placeholder="Your Phone Number" className="input input-bordered" required />
        </div>
        {/* email div  */}
        <div className="form-control">
          <label className="label">
            <span className=" description ">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        {/* password div  */}
        <div className="form-control">
          <label className="label">
            <span className=" description ">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* check box div  */}
        <div  className=' flex gap-2' >
        <input type="checkbox" name="remember" aria-label="bbb" className="mr-1 rounded-sm focus:dark:ring-violet-600 focus:dark:border-violet-600 focus:ring-2 dark:accent-violet-600" />
        <h6 className=' text-sm'>Accept Our Terms & Conditions </h6>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUp</button>
        </div>
      </form>
      <Link href={'/login'} className=' py-3 flex  justify-center gap-2  text-lg text-center font-medium'>Already Poultry Hub member? Please  <span className=' font-bold text-blue-700'>Login.</span></Link>
    </div>
  </div>

    </main>
  );
};

export default Register;