import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import therapy from '/Therapy.jpeg'
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Personal Training",
    img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=350",
    desc: "Achieve your goals faster with 1-on-1 training from expert coaches.",
  },
  {
    title: "Customized Workout Plan",
    img: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&h=350",
    desc: "Tailored workout programs to match your fitness level and body goals.",
  },
  {
    title: "Diet Plans",
    img: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    desc: "Get personalized nutrition plans to support muscle gain or fat loss.",
  },
  {
    title: "Rehab Therapy",
    img: therapy,
    desc: "Recover safely from injuries with professional rehab support.",
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", 
            toggleActions: "play reverse play reverse",
            // markers: true, // enable for debugging
          },
        }
      );
    });
  }, []);
  
  

  return (
    <section id="Service" className="bg-gray-100 py-12 px-6 pt-[100px]">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
        Our <span className="text-[#FF0000]">Services</span>
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2 text-[#FF0000]">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
