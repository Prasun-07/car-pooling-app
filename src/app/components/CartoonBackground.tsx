'use client';

import Lottie from 'lottie-react';
import cityAnimation from '../../../public/animations/Animation - 1747294818565.json'
import carAnimation from '../../../public/animations/Animation - 1747295254210.json'; // Optional: replace with your car Lottie

export default function UrbanCityBackground() {
  return (
    <div className="inset-0 z-[-1] overflow-hidden m-0">
      {/* Background City Animation */}
      <Lottie
        animationData={cityAnimation}
        loop
        className="w-full h-[40rem] object-cover"
      />
      
    </div>
  );
}
