import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export const Memberships = () => {
  const plansRef = useRef([]);

  const plans = [
    {
      name: 'Basic',
      price: '₹999',
      duration: '/month',
      features: ['Gym Access', 'Locker Facility', '1 Trainer Session/Week'],
    },
    {
      name: 'Standard',
      price: '₹1499',
      duration: '/month',
      features: ['Gym Access', 'Locker Facility', '3 Trainer Sessions/Week', 'Diet Plan'],
    },
    {
      name: 'Premium',
      price: '₹1999',
      duration: '/month',
      features: ['All Standard Features', 'Unlimited Trainer Access', 'Steam & Spa', 'Personalized Coaching'],
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      plansRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#membership', 
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  
  

  return (
    <div className="bg-white py-10 px-4 min-h-screen" id="membership">
     <div className="mb-[50px] mt-[50px]">
      <h1 className='text-[#FF0000] text-3xl sm:text-4xl text-center font-bold cursor-pointer mb-6'>
      Membership <span className='text-black'>Plans</span>
                </h1></div>
      <div className="max-w-6xl mx-auto grid gap-6 cursor-pointer sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            ref={(el) => (plansRef.current[index] = el)}
            className="w-[300px] sm:w-[400px] lg:w-full bg-white rounded-2xl  p-4 sm:p-6 flex flex-col justify-between
                       hover:shadow-[0_0_20px_#FF0000] shadow-[0_0_20px_#000000] hover:scale-150 transition duration-300 transform"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-black">{plan.name}</h3>
              <p className="text-center text-2xl sm:text-3xl text-red-500 font-bold mt-3 sm:mt-4">
                {plan.price}{' '}
                <span className="text-sm sm:text-lg font-normal text-black">
                  {plan.duration}
                </span>
              </p>
              <ul className="mt-4 sm:mt-6 space-y-2 text-black text-sm sm:text-base">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-red-500 mr-2">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 text-center">
             <a href="#contact"> 
              <button className="bg-red-600 cursor-pointer text-white text-sm sm:text-base px-5 py-2 rounded-full hover:bg-black  transition duration-300">
                Join Now
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
