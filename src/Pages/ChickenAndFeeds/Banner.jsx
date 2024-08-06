import { FaSearch } from "react-icons/fa";


const Banner = ({setSearch}) => {
  return (
    <section
    className="hero min-h-[calc(100dvh-100px)] bg-cover"
    style={{
      backgroundImage:`url(https://i.postimg.cc/Hn9y9NwN/Untitled-design-7.png)`,
    }}>
     
    <div className="hero-overlay bg-black bg-opacity-50 dark:bg-white"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-xl">
        <h1 className="mb-5 text-white text-3xl xl:text-5xl font-bold">Welcome To <span className=" text-primary">Poultry Hub</span></h1>
        <p className="mb-5 text-sm max-w-md lg:max-w-xl lg:text-base text-white">
         Hello there, we are providing fresh chicken from 100% organic farms. And we're also selling poultry feed that came from organic factories.
        </p>
        <div className="join border">
        <input
          onBlur={(e)=>setSearch(e.target?.value)}
          type="text"
          placeholder="search your wisdom.."
          className="input  join-item bg-white text-black font-bold" />
        <button className="btn flex items-center gap-2  join-item">Search<FaSearch></FaSearch></button>
      </div>
      </div>
    </div>
  </section>
  );
};

export default Banner;