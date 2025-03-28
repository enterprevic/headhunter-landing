'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the game component with SSR disabled
const SuweGame = dynamic(() => import('./SuweGame'), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-md mx-auto text-center p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-[#008751]/20 rounded mb-4"></div>
        <div className="h-4 bg-[#008751]/10 rounded mb-6 w-3/4 mx-auto"></div>
        <div className="flex justify-between mb-4">
          <div className="h-6 w-20 bg-[#008751]/10 rounded"></div>
          <div className="h-6 w-20 bg-[#008751]/10 rounded"></div>
          <div className="h-6 w-20 bg-[#008751]/10 rounded"></div>
        </div>
        <div className="h-10 w-32 bg-[#008751]/30 rounded-full mx-auto mb-6"></div>
        <div className="grid grid-cols-3 gap-2 w-full aspect-square">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="bg-[#008751]/10 rounded-md" style={{ aspectRatio: '1/1' }}></div>
          ))}
        </div>
      </div>
    </div>
  ),
});

export default function GameWrapper() {
  return (
    <Suspense fallback={<div>Loading game...</div>}>
      <SuweGame />
    </Suspense>
  );
}
