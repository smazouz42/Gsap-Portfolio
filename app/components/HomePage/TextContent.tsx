import React from 'react';

const TextContent = () => {
  return (
    <div className="text-content absolute top-0 h-screen w-screen flex flex-col items-center justify-center z-40">
      <div className='flex flex-col relative -left-[15%] '>
        <div className="left overflow-hidden ">
          <div className="text-[35px] animtion">
            between
          </div>
        </div>
        <div className="left overflow-hidden ">
          <div className="lg:text-[100px] text-[70px]  animtion overflow-hidden">
            Reality
          </div>
        </div>
      </div>
      <div className='flex flex-col relative lg:left-[15%] left-[40%] '>
        <div className="right overflow-hidden -z-10 ">
          <div className="lg:text-[100px] text-[70px]  animtion overflow-hidden">
            &
          </div>
        </div>
        <div className="right overflow-hidden ">
          <div className="lg:text-[100px] text-[70px]  animtion overflow-hidden ">
            Dream
          </div>
        </div>
      </div>
      <div className='flex relative md:-bottom-[5%] -bottom-[10%] text-center'>
        <p className="txt-bottom uppercase md:text-[12px] text-[8px] tracking-[12px]">
          Building the future, one line at a time
        </p>
      </div>
    </div>
  );
};

export default TextContent; 