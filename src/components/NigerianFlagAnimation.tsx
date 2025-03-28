'use client';

import { useState, useEffect } from 'react';

export default function NigerianFlagAnimation() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set launch date to Q3 2025 (July 1, 2025)
    const launchDate = new Date('2025-07-01T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    };
    
    // Update countdown immediately
    updateCountdown();
    
    // Update countdown every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative w-full h-40 mb-8 overflow-hidden rounded-lg shadow-lg">
        {/* Nigerian Flag Animation */}
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/3 bg-[#008751] animate-pulse"></div>
          <div className="h-1/3 bg-white"></div>
          <div className="h-1/3 bg-[#008751] animate-pulse"></div>
        </div>
        
        {/* Overlay with subtle wave animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-wave"></div>
        
        {/* Nigerian Coat of Arms (simplified) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#008751] font-bold text-xl">NG</span>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-xl font-bold text-[#008751] mb-4">Launching Soon</h2>
        
        <div className="grid grid-cols-4 gap-2 mb-6">
          <div className="bg-white/30 backdrop-blur-sm rounded p-2">
            <div className="text-2xl font-bold">{days}</div>
            <div className="text-xs">Days</div>
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded p-2">
            <div className="text-2xl font-bold">{hours}</div>
            <div className="text-xs">Hours</div>
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded p-2">
            <div className="text-2xl font-bold">{minutes}</div>
            <div className="text-xs">Minutes</div>
          </div>
          <div className="bg-white/30 backdrop-blur-sm rounded p-2">
            <div className="text-2xl font-bold">{seconds}</div>
            <div className="text-xs">Seconds</div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600">
          We&apos;re working hard to bring Nigeria&apos;s premier recruitment platform to life.
          Subscribe below to be notified when we launch!
        </p>
        
        <form className="mt-4 flex flex-col sm:flex-row gap-2">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-2 rounded-full border border-[#008751]/30 focus:outline-none focus:border-[#008751]"
          />
          <button 
            type="button" 
            className="bg-[#008751] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
