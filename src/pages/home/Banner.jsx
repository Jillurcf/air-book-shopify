import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
const Banner = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="lg:pt-24 pt-4 pl-4 absolute items-center lg:text-6xl text-blue-500 font-bold">
            <span className=" text-white">Welcome To</span> AirBook
          </h1>
          <div className="absolute lg:h-[300px] lg:w-[1280px] lg:bg-white bg-none lg:mt-44 rounded-xl">
            <div className="flex justify-between">
            <div className="flex gap-2 pt-16 pb-4 lg:pl-12 pl-4">
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
            <div className="lg:flex gap-2 pt-16 pb-4 lg:pl-12 pl-4 pr-24 hidden">
              <div className="max-w-32 p-2 bg-gray-200 rounded-md flex gap-2">
                <div>
                 <h5 className="text-blue-400">Traveller</h5>
                </div>
                <IoIosArrowDown></IoIosArrowDown>
              </div>
              <div className="max-w-32 p-2 bg-gray-200 rounded-md flex gap-2">
              <div>
                 <h5 className="text-blue-400">Economy</h5>
                </div>
                <IoIosArrowDown></IoIosArrowDown>
              </div>
            </div>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-2 lg:gap-2 lg:pt-6 min-[375px]:pt-8 min-[425px]:pt-12 lg:pl-12 min-[320px]:pl-6 min-[375px]:pl-12 min-[425px]:pl-20">
              <div className="lg:p-2 p-2 border rounded-lg flex gap-2">
                <div className="border-r-2 border-gray-200 h-full items-center">
                  <h5 className="pr-2 h-full items-center flex">DAC</h5>
                </div>
                <div className="">
                  <h3>Dhaka</h3>
                  <p>Hazrat Shahjalal International</p>
                </div>
              </div>
              <div className="lg:p-2 p-2 border rounded-lg flex gap-2">
                <div className="border-r-2 border-gray-200 h-full items-center">
                  <h5 className="pr-2 h-full items-center flex">Cxb</h5>
                </div>
                <div className="">
                  <h3>Cox Bazar</h3>
                  <p>Cox Bazar International</p>
                </div>
              </div>
              <div className="lg:p-2 p-2 border rounded-lg flex gap-2">
                <div className="border-r-2 border-gray-200 h-full items-center">
                  <h5 className="pr-2 h-full items-center flex">03</h5>
                </div>
                <div className="">
                  <h3>October</h3>
                  <p>Tuesday, 2023</p>
                </div>
              </div>
              <div className="p-6 border rounded-md flex gap-2">
                <div className="border-r-2 border-gray-200 h-full items-center">
                  <h5 className="pr-2 h-full items-center flex">05</h5>
                </div>
                <div className="">
                  <h3>October</h3>
                  <p>Tuesday, 2023</p>
                </div>
              </div>
              <div className="">
                <button className="btn btn-warning p-12">
                  <FaSearch className="text-4xl -mt-4 "></FaSearch>
                </button>
              </div>
            </div>
          </div>
        </div>

        <img src="/src/assets/Image/Hero Image/Rectangle-2.png" alt="image" />
      </div>
    </div>
  );
};

export default Banner;
