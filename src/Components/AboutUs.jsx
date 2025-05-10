import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import poster from "../assets/img/wiehtlift.jpg"

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const [customers, setCustomers] = useState(0);
  const [trainers, setTrainers] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const customerTarget = 300;
    const trainerTarget = 3;
    

    const updateCount = (setter, target, step, delay) => {
      let current = 0;
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setter(current);
      }, delay);
    };
    gsap.fromTo("#about",{
      opacity: 0,
      y: 50,
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#about",
        start: 'top 100%',
        toggleActions: 'play none none reverse',
      },
    })

    const trigger = ScrollTrigger.create({
      trigger: counterRef.current,
      start: 'top 80%',
      once: true, 
      onEnter: () => {
        updateCount(setCustomers, customerTarget, 10, 30);
        updateCount(setTrainers, trainerTarget, 1, 100);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      id="about"
      ref={counterRef}
      className="bg-white min-h-screen p-6 flex items-center justify-center"
    >
      <div className="bg-white shadow-[0px_0px_20px_#000000] rounded-2xl overflow-hidden flex flex-col md:flex-row max-w-5xl">
        <div className="md:w-1/2">
          <img
            src={poster}
            alt="Gym"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-[#FF0000] mb-4">
            <q>About WFC ( Wolverine Fitness Club )</q>
          </h2>
          <p className="text-black mb-4">
            Welcome to{' '}
            <span className="font-semibold text-[#FF0000]">
              WFC Wolverine Fitness Club
            </span>{' '}
            — where dedication meets transformation. We offer a modern facility,
            professional trainers, and customized fitness programs to help you
            reach your fitness goals.
          </p>
          <p className="text-gray-700 mb-4">
            Whether you're a beginner or a pro, we have the equipment and
            environment to support you every step of the way.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-green-600">{customers}+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-orange-500">{trainers}+</h3>
              <p className="text-gray-600">Certified Trainers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
