const Hero = ({ weather, forecast }) => {
  console.log(forecast);
  return (
    <section className="min-h-screen flex flex-col items-center  pt-[20vh] max-w-400">
      <div className="w-full flex justify-around items-center ">
        <div className="flex flex-col ml-20">
          <p className="font-bold text-3xl">{weather?.location.name}</p>
          <p className="font-semibold">Chances of ran: 0%</p>

          <p className="font-bold text-3xl mt-10">{weather?.current.temp_c}°</p>
        </div>

        <div className="flex flex-col justify-center items-center mr-20 ">
          {/* weather image here */}
          <img
            src={weather?.current?.condition?.icon}
            alt="sun image"
            className="object-contain h-15 w-20"
          />
          <p className="font-semibold">{weather?.current?.condition.text}</p>
          <p className="font-semibold mt-2">UV:{weather?.current.uv}</p>
        </div>
      </div>

      <div className=" w-full mt-20 flex flex-col items-center">
        {/* Todays forcasting */}

        <div className=" text-white rounded-lg bg-gray-600">
          <p className="text-gray-50 text-sm ml-2 mb-5  ">TODAY'S FORECAST</p>
          <div className="grid md:grid-cols-6 sm:grid-cols-5 max-sm:grid-cols-3 gap-10 ">
            {forecast.map((elem) => (
              <div
                key={elem.time_epoch}
                className="flex flex-col items-center justify-center  border-r border-white/30"
              >
                <p>{elem.time}</p>
                <img src={elem.condition.icon}></img>
                <p>{elem.temp_f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>{/* Air conditions */}</div>
    </section>
  );
};

export default Hero;
