'use client';

import Lottie from 'lottie-react';
import cityAnimation from '../../../public/animations/Animation - 1747294818565 (1).json';

export default function UrbanCityBackground() {
  return (
    <div className="inset-0 z-[-1] pt-15 overflow-hidden m-0 bg-gradient-to-br from-[#f7f3ef] to-[#fdfcfb]">
      <Lottie
        animationData={cityAnimation}
        loop
        className="w-full h-[40rem] object-cover"
      />
    </div>
  );
}
