import Image from 'next/image';
import login_banner from '../../../public/login-image.png';
import React from 'react';


const Login = () => {
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
    </div>
  </div>

    </main>
  );
};

export default Login;