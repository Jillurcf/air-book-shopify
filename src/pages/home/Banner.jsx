const Banner = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="pt-24 absolute items-center text-6xl text-blue-500 font-bold">
            <span className=" text-white">Welcome To</span> AirBook
          </h1>
          <div className="absolute h-[300px] w-[1280px] bg-white mt-44 rounded-xl">
           <div className="flex gap-2 pt-12 pl-12">
           <div className="max-w-32 p-2 bg-gray-200 rounded-md flex gap-2">
                <div>
                    <input type="radio" />
                </div>
                <h6>One Way</h6>
            </div>
           <div className="max-w-32 p-2 bg-blue-400 rounded-md flex gap-2">
                <div>
                    <input type="radio" />
                </div>
                <h6>Round Trip</h6>
            </div>
           </div>
           <div className="flex gap-2 pt-2 pl-12">
           <div className="max-w-65 p-2 bg-gray-200 rounded-md flex gap-2">
                <div className="border-r-2 border-white h-full items-center">
                    <h5 className="pr-2 h-full items-center flex">DAC</h5>
                </div>
                <div className="">
                    <h3>Dhaka</h3>
                    <p>Hazrat Shahjalal International</p>
                </div>
               
            </div>
           <div className="max-w-65 p-2 bg-gray-200 rounded-md flex gap-2">
                <div className="border-r-2 border-white h-full items-center">
                    <h5 className="pr-2 h-full items-center flex">DAC</h5>
                </div>
                <div className="">
                    <h3>Cxb</h3>
                    <p>Cox Bazar International</p>
                </div>
               
            </div>
           <div className="max-w-65 p-2 bg-gray-200 rounded-md flex gap-2">
                <div className="border-r-2 border-white h-full items-center">
                    <h5 className="pr-2 h-full items-center flex">03</h5>
                </div>
                <div className="">
                    <h3>October</h3>
                    <p>Tuesday, 2023</p>
                </div>
               
            </div>
           <div className="max-w-65 p-2 bg-gray-200 rounded-md flex gap-2">
                <div className="border-r-2 border-white h-full items-center">
                    <h5 className="pr-2 h-full items-center flex">05</h5>
                </div>
                <div className="">
                    <h3>October</h3>
                    <p>Tuesday, 2023</p>
                </div>
               
            </div>
            <button>kd</button>
           </div>
          </div>
        </div>

        <img src="/src/assets/Image/Hero Image/Rectangle-2.png" alt="image" />
      </div>
    </div>
  );
};

export default Banner;
