import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import dumbel from "../assets/img/dumbel.jpg"
import gil3 from "../assets/img/gil3.jpg"
import gril3 from "../assets/img/gril3.jpg"
import wiehtlift from "../assets/img/wiehtlift.jpg"
import man2 from "../assets/img/man2.jpg"
import water from "../assets/img/water.jpg"
import bgril from "../assets/img/bgril.jpg"
import zummba from "../assets/img/zumba.jpg"
import group from "../assets/img/group.jpg"
import body from "../assets/img/body.jpg"
import shoulder from "../assets/img/shoulder.jpg"

gsap.registerPlugin(ScrollTrigger);

export const Quotes = () => {
  const gymQuotes = [
    "The body achieves what the mind believes.",
    "Don't limit your challenges. Challenge your limits.",
    "Push yourself because no one else is going to do it for you.",
    "The only bad workout is the one that didn’t happen.",
    "Success starts with self-discipline.",
    "Fitness is like a relationship. You can’t cheat and expect it to work.",
    "When you feel like quitting, think about why you started.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn’t.",
    "The hardest part is starting, but once you start, you’ll never look back."
  ];

  const gymImages = [dumbel, gil3, gril3, wiehtlift, man2, water, bgril, zummba, group, body, shoulder];

  const [quote, setQuote] = useState("");
  const [image, setImage] = useState(null);

  const containerRef = useRef();
  const imageRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    const randomQuote = gymQuotes[Math.floor(Math.random() * gymQuotes.length)];
    const randomImage = gymImages[Math.floor(Math.random() * gymImages.length)];

    setQuote(randomQuote);
    setImage(randomImage);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo(imageRef.current, {
      x: -100,
      opacity: 0,},{
        x: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    });

    tl.fromTo(textRef.current, {
      x: 100,
      opacity: 0,},{
        x: 0,
        opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-[300px] bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto p-6 gap-6">
        <div className="w-full md:w-1/2 flex justify-center" ref={imageRef}>
          <img
            src={image}
            alt="Gym Motivation"
            className="w-[300px] h-[300px] object-cover rounded-xl shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 text-white text-center md:text-left" ref={textRef}>
          <h1 className="text-3xl font-bold mb-6">Gym Motivation</h1>
          <blockquote className="text-xl italic mb-4">
            <q>{quote}</q>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
