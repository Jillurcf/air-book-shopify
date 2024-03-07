import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const TravelVlog = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-24">
      <h1 className="text-4xl font-bold pb-8 pl-4 lg:pl-0">Travel Blog</h1>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/rfprJh8/Rectangle-18.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/SBnD1rC/Rectangle-30.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/3dr0L3K/Rectangle-18-1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/bQGxPxn/Rectangle-32.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/WnFrD9X/Rectangle-18-2.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/SBnD1rC/Rectangle-30.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/rfprJh8/Rectangle-18.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/SBnD1rC/Rectangle-30.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/3dr0L3K/Rectangle-18-1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/bQGxPxn/Rectangle-32.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/WnFrD9X/Rectangle-18-2.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/SBnD1rC/Rectangle-30.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/rfprJh8/Rectangle-18.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/SBnD1rC/Rectangle-30.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/3dr0L3K/Rectangle-18-1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/bQGxPxn/Rectangle-32.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/WnFrD9X/Rectangle-18-2.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/SBnD1rC/Rectangle-30.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/rfprJh8/Rectangle-18.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/SBnD1rC/Rectangle-30.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/3dr0L3K/Rectangle-18-1.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/bQGxPxn/Rectangle-32.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://i.ibb.co/WnFrD9X/Rectangle-18-2.png"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                 <div className="flex justify-between">
                 <h2 className="text-warning">
                    Work and Travel
                  </h2>
                  <div className="">
                      18 September 2023
                    </div>
                 </div>
                  <p className="lg:text-2xl font-bold">
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="">
                        <div className="h-[50px] w-[50px] rounded-full">
                          <img
                            className="rounded-full h-[25px] w-[25px]"
                            src="https://i.ibb.co/SBnD1rC/Rectangle-30.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="">
                        <p>Aria Montigue</p>
                      </div>
                    </div>
                    <div className="card-actions">
                      <button className="text-warning">Red More</button>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </div>
  );
};

export default TravelVlog;
