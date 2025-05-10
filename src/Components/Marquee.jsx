import React from 'react';
import '../marquee.css';

const marqueeText = `
  🏋️‍♂️ Welcome to WFC - Wolverine Fitness Club |
  🕘 Open: 9 AM - 11 PM & 6 PM - 9 PM |
  💪 Get fit with certified trainers! |
  🧘‍♀️ Yoga & Zumba classes available |
  🎯 Personal training sessions now open |
  🔥 New members get FREE fitness assessment |
  💥 Join now and get a 15% discount! |
  🏆 Build strength, endurance, and confidence |
  🍽️ Diet plans & nutrition tips included |
  💯 Transform your body, transform your life! |
`;

const Marquee = () => {
  return (
    <div className="bg-black text-white marquee-wrapper">
      <div className="marquee-content px-4 py-3">
        {marqueeText}
        <span className="px-8">{marqueeText}</span> 
      </div>
    </div>
  );
};

export default Marquee;

