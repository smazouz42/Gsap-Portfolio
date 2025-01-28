import React from 'react';

const TextContent = () => {
  return (
    <div className="text-content absolute top-0 h-screen w-screen flex flex-col items-center justify-center">
      <div className='flex flex-col relative -left-[15%] '>
        <div className="left overflow-hidden ">
          <div className="text-[35px] animtion">
            between
          </div>
        </div>
        <div className="left overflow-hidden ">
          <div className="text-[100px] animtion overflow-hidden">
            Reality
          </div>
        </div>
      </div>
      <div className='flex flex-col relative left-[15%] '>
        <div className="right overflow-hidden -z-10 ">
          <div className="text-[100px] animtion overflow-hidden">
            &
          </div>
        </div>
        <div className="right overflow-hidden ">
          <div className="text-[100px] animtion overflow-hidden ">
            Dream
          </div>
        </div>
      </div>
      <div className='flex relative -bottom-[5%] '>
        <p className="txt-bottom uppercase text-[12px] tracking-[12px]">
          Building the future, one line at a time
        </p>
      </div>
    </div>
  );
};

export default TextContent; 