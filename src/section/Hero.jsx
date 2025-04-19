const Hero = ({ weather, forecast }) => {
  console.log(forecast);
  return (
    <section className="min-h-screen flex flex-col items-center  pt-[20vh] max-w-400 ">
      <div className="w-full flex justify-around items-center max-w-300 ">
        <div className="flex flex-col justify-center items-center ml-20">
          <p className="font-bold text-3xl">{weather?.location.name}</p>
          <p className="font-semibold">Chances of ran: 0%</p>

          <p className="font-bold text-3xl mt-10">{weather?.current.temp_c}°</p>
        </div>

        <div className="flex flex-col justify-center items-center mr-20  ">
          {/* weather image here */}
          <img
            src={weather?.current?.condition?.icon}
            alt="sun image"
            className="object-contain h-15 w-20"
          />
          <p className="font-semibold">{weather?.current?.condition.text}</p>
          <p className="font-semibold ">UV:{weather?.current.uv}</p>
        </div>
      </div>

      <div className=" w-full mt-20 flex flex-col items-center ">
        {/* Todays forcasting */}

        <div className=" text-white rounded-lg bg-gray-600 p-5">
          <p className="text-gray-400 text-sm ml-2 mb-5 p-3 max-sm:text-center ">
            TODAY'S FORECAST
          </p>
          <div className="grid md:grid-cols-6 sm:grid-cols-5 max-sm:grid-cols-3 gap-10 p-2">
            {forecast
              .filter((elem) => {
                const hour = new Date(elem.time).getHours();

                return hour >= 5 && hour < 11;
              })
              .map((elem) => {
                return (
                  <div
                    key={elem.time_epoch}
                    className="flex flex-col items-center justify-center  border-r border-white/30 px-4 "
                  >
                    <p className="text-center font-semibold">
                      {new Date(elem.time).getHours()}:00
                    </p>
                    <img className="" src={elem.condition.icon}></img>
                    <p className="text-center font-semibold">{elem.temp_f}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div>{/* Air conditions */}</div>
    </section>
  );
};

export default Hero;
