'use client';

import dynamic from 'next/dynamic';

// Dynamically import the animation component with SSR disabled
const NigerianFlagAnimation = dynamic(() => import('./NigerianFlagAnimation'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-md mx-auto text-center p-8">
      <div className="animate-pulse">
        <div className="h-40 bg-[#008751]/20 rounded mb-4"></div>
        <div className="h-4 bg-[#008751]/10 rounded mb-6 w-3/4 mx-auto"></div>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-16 bg-[#008751]/10 rounded"></div>
          ))}
        </div>
        <div className="h-10 w-full bg-[#008751]/10 rounded mb-2"></div>
        <div className="h-10 w-32 bg-[#008751]/30 rounded-full mx-auto"></div>
      </div>
    </div>
  ),
});

export default function AnimationWrapper() {
  return <NigerianFlagAnimation />;
}
