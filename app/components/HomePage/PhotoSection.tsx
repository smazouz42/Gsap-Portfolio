import Image from 'next/image';
import React from 'react';

const PhotoSection = () => {
  return (
    <div className="photo-container relative w-[400px] h-[400px] mx-auto lg:block hidden">
      <div className="absolute inset-[-10px] rounded-full">
        <div className="border-segment absolute inset-0 border-4 border-black rounded-full bg-cyan-500"
          style={{
            clipPath: `polygon(
            0 0, 40% 0, 40% 40%,
            60% 40%, 60% 0, 100% 0,
            100% 60%, 60% 60%,
            60% 100%, 40% 100%,
            40% 60%, 0 60%
          )`,
            transform: 'rotate(45deg)'
          }}>
        </div>
      </div>
      
      <div className="absolute inset-[0px] rounded-full overflow-hidden">
      <div className='w-full h-full absolute top-0 bg-black opacity-30'></div>

        <Image
          src="/my_photo.jpg"
          alt="Profile Photo"
          className="w-full h-full object-cover"
          width={500} height={300}
        />
      </div>
    </div>
  );
};

export default PhotoSection;