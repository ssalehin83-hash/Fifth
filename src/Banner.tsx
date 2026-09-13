import banner from "./assets/banner-stack.png"

const Banner = () => {
    return (
        <div className="grid grid-cols-2 place-items-center my-10 ">
            <div>
                <h2 className=" my-4 font-bold text-4xl">Build Your Ideal
              <p className="text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Development Stack</p></h2>
             <p>Explore frontend, backend, database, and tooling options,<br />
              compare them side by side, and put together the stack that fits your <br />
               next project.</p>
               <div className="my-4 ">
                 <button className="btn btn-error rounded-xl mr-1.5 ">Explore Technologies</button>
               <button className="btn btn-outline rounded-xl">Learn More</button>
               </div>
            </div>
              <div>
                  <img src={banner} alt="" />
                </div> 
            
        </div>
    );
};

export default Banner;