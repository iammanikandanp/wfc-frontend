import React, { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import man2 from "../assets/img/InShot_20241031_213153573.jpg"
import bgril from "../assets/img/bgril.jpg"
import girl1 from "../assets/img/girl1.png"

gsap.registerPlugin(ScrollTrigger);

const trainers = [
  {
    name: 'Raj Kumar',
    photo: man2,
    desc: 'Strength & Conditioning Coach with 5+ years experience.',
    contact: '+91 98765 43210'
  },
  {
    name: 'Sneha Reddy',
    photo: bgril,
    desc: 'Certified Yoga and Pilates Trainer.',
    contact: '+91 91234 56789'
  },
  {
    name: 'Arun Prakash',
    photo: girl1,
    desc: 'Bodybuilding Coach & Nutrition Expert.',
    contact: '+91 99887 77665'
  }
];

export const Trainers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(containerRef.current, {
      opacity: 0,
      y: 50, },{
        opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: 'play none none reverse',
      }
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      gsap.to(cardRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % trainers.length);

          // Fade in
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.5 }
          );
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { name, photo, desc, contact } = trainers[currentIndex];

  return (
    <div
      id='trainers'
      ref={containerRef}
      className="bg-gray-100  py-10 px-4"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className='text-red-600'> Meet Our</span> Trainers
      </h2>

      <div
        ref={cardRef}
        className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500"
      >
        <img src={photo} alt={name} className="w-full h-[500px] object-cover" />
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{desc}</p>
          <div className="flex items-center justify-center gap-2 text-red-600 font-medium">
            <FaPhoneAlt />
            <a href={`tel:${contact.replace(/\s/g, '')}`}>{contact}</a>
          </div>
        </div>
      </div>
    </div>
  );
};
