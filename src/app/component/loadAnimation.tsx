export const LoadBarAnimation = () => {
  return (
    <>
      <div className=" w-[160px] h-[160px]  mx-auto relative">
        <div className=" w-[160px] h-[160px] rounded-[50%]  p-[18px] shadow-ringShadow">
          <div className="w-[120px] h-[120px]  rounded-[50%] shadow-innerRing flex justify-center items-center">
            <p>65%</p>
          </div>
        </div>
        <svg
          className="stroke-red-500 stroke-[20px] fill-none absolute top-0 left-0 animate-loadBar"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="160px"
          height="160px"
          style={{strokeDasharray: '372', strokeDashoffset: '300'}}
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stop-color="#e91e63" />
              <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
      </div>
    </>
  );
};
