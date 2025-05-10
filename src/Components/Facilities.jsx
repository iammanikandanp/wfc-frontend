import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBottleWater,
  faWifi,
  faCar,
  faRestroom
} from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  { name: 'Free Water', icon: faBottleWater },
  { name: 'Free WiFi', icon: faWifi },
  { name: 'Parking', icon: faCar },
  { name: 'Restroom', icon: faRestroom }
];

export const Facilities = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current, {
      opacity: 0,
      y: 50,},{
        opacity: 1,
        y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardsRef.current[0], 
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  }, []);

  return (
    <div id='facilities' className="bg-yellow-400 py-10 mb-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {facilities.map((facility, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105"
          >
            <FontAwesomeIcon icon={facility.icon} className="text-4xl text-yellow-600 mb-4" />
            <p className="text-lg font-medium text-gray-700">{facility.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
