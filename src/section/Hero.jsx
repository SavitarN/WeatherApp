import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center  pt-[20vh]">
      <div className="w-full flex justify-around items-center border border-red-400">
        <div className="flex flex-col ml-20">
          <p className="font-bold text-3xl">Nepal</p>
          <p className="font-semibold">Chances of ran: 0%</p>

          <p className="font-bold text-3xl mt-10">31 degrees</p>
        </div>

        <div className=" mr-20">
          {/* weather image here */}
          <img className="" src="" alt="sun image" />
        </div>
      </div>

      <div className=" w-full mt-20 flex flex-col items-center">
        {/* Todays forcasting */}

        <div className=" text-white rounded-lg bg-gray-600">
          <p className="text-gray-50 text-sm ml-2 mb-5  ">TODAY'S FORECAST</p>
          <div className="grid md:grid-cols-6 sm:grid-cols-5 max-sm:grid-cols-3 gap-10 ">
            <div className="flex flex-col items-center justify-center  border-r border-white/30">
              <p>Time</p>
              {/* <img></img> */}
              <p>Temprature</p>
            </div>

            <div className="flex flex-col items-center justify-center p-2  border-r border-white/30">
              {" "}
              <p>Time</p>
              <img></img>
              <p>Temprature</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2  border-r border-white/30">
              {" "}
              <p>Time</p>
              <img></img>
              <p>Temprature</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2   border-r border-white/30">
              {" "}
              <p>Time</p>
              <img></img>
              <p>Temprature</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2   border-r border-white/30">
              {" "}
              <p>Time</p>
              <img></img>
              <p>Temprature</p>
            </div>
            <div className="flex flex-col items-center justify-center p-2  border-r-white">
              {" "}
              <p>Time</p>
              <img></img>
              <p>Temprature</p>
            </div>
          </div>
        </div>
      </div>

      <div>{/* Air conditions */}</div>
    </section>
  );
};

export default Hero;
