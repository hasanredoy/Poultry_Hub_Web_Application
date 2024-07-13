import Image from 'next/image';
import login_banner from '../../../public/login-image.png';
import React from 'react';
import Link from 'next/link';


const Register = () => {
  return (
    <main className="hero  min-h-screen  max-w-[95%] overflow-hidden lg:max-w-[85%] mx-auto">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center flex-1 lg:text-left">
      <Image src={login_banner} alt='login banner imge' height={700} width={700}/>
    </div>
    <div className="flex-1 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="subtitle ">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="subtitle ">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <Link href={'/login'} className=' py-3 flex  justify-center gap-2  text-lg text-center font-medium'>Already Poultry Hub member? Please  <span className=' font-bold text-blue-700'>Login</span>.</Link>
    </div>
  </div>

    </main>
  );
};

export default Register;