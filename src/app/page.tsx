import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4 sm:p-8">
      {/* Nigerian Ankara pattern background - decorative only */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image 
          src="/images/ankara-background.svg" 
          alt="" 
          fill 
          priority 
          className="object-cover opacity-70" 
          role="presentation"
        />
      </div>
      
      {/* Nigerian cultural symbols scattered around - decorative only */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-40 z-0" aria-hidden="true">
        <Image 
          src="/images/nigerian-symbols.svg" 
          alt="" 
          width={100} 
          height={100} 
          className="object-contain" 
          role="presentation"
        />
      </div>
      
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-40 z-0 rotate-45" aria-hidden="true">
        <Image 
          src="/images/nigerian-symbols.svg" 
          alt="" 
          width={100} 
          height={100} 
          className="object-contain" 
          role="presentation"
        />
      </div>
      
      {/* Nigeria map - decorative only */}
      <div className="absolute top-1/3 right-5 w-32 h-32 opacity-30 z-0" aria-hidden="true">
        <Image 
          src="/images/nigeria-map.svg" 
          alt="" 
          width={150} 
          height={150} 
          className="object-contain" 
          role="presentation"
        />
      </div>
      
      {/* Main content container with Adire pattern border */}
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-xl shadow-xl p-1 z-10 border-4 border-[#D3A121]/20" 
           style={{ 
             boxShadow: '0 0 30px rgba(211, 161, 33, 0.2)' 
           }}
           role="region"
           aria-label="Headhunter.ng coming soon information">
        <div className="w-full h-full rounded-lg p-6 sm:p-10" 
             style={{
               backgroundImage: 'url("/images/adire-pattern.svg")',
               backgroundSize: '400px',
               backgroundOpacity: '0.05'
             }}>

          <header className="flex flex-col items-center mb-8">
            {/* Logo with Nigerian-inspired glow */}
            <div className="relative mb-6">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D3A121]/20 via-[#008751]/20 to-[#D3A121]/20 rounded-lg blur" aria-hidden="true"></div>
              <Image
                src="/images/logo.svg"
                alt="Headhunter.ng Logo"
                width={200}
                height={50}
                priority
                className="relative"
              />
            </div>
            
            {/* Title with Nigerian color accent */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#008751] text-center mb-4">
              Coming Soon
            </h1>
            
            {/* Nigerian-inspired divider */}
            <div className="flex items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-1 w-12 bg-[#D3A121] rounded"></div>
              <div className="h-2 w-2 bg-[#008751] rounded-full"></div>
              <div className="h-1 w-20 bg-[#D3A121] rounded"></div>
              <div className="h-2 w-2 bg-[#008751] rounded-full"></div>
              <div className="h-1 w-12 bg-[#D3A121] rounded"></div>
            </div>
            
            <p className="text-center text-gray-900 max-w-2xl mb-8 leading-relaxed">
              Nigeria&apos;s premier talent recruitment platform is under construction. 
              We&apos;re building a service that celebrates Nigerian talent and connects professionals 
              with opportunities that matter.
            </p>
            
            <div className="flex gap-4 flex-wrap justify-center">
              <a 
                href="mailto:info@headhunter.ng" 
                className="bg-[#008751] text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition flex items-center gap-2 shadow-md"
                aria-label="Contact us via email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </header>
          
          {/* Main content section with Nigerian-inspired design */}
          <section className="bg-white/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-8 border border-[#D3A121]/20">
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-[#008751]/10 via-[#D3A121]/10 to-[#008751]/10 px-6 py-2 rounded-full mb-6">
                <h2 className="text-xl font-bold text-[#008751]">Launching Q3 2025</h2>
              </div>
              
              {/* Feature cards with Nigerian cultural colors */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#008751] hover:shadow-md transition" role="article">
                  <div className="w-12 h-12 mx-auto mb-3 text-[#008751]" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#008751] mb-2">Find Top Talent</h3>
                  <p className="text-gray-900 text-sm">Connect with the best professionals across Nigeria&apos;s diverse regions</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#D3A121] hover:shadow-md transition" role="article">
                  <div className="w-12 h-12 mx-auto mb-3 text-[#D3A121]" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#D3A121] mb-2">Smart Matching</h3>
                  <p className="text-gray-900 text-sm">AI-powered recruitment to find your perfect match in Nigeria&apos;s talent pool</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-[#9B4F96] hover:shadow-md transition" role="article">
                  <div className="w-12 h-12 mx-auto mb-3 text-[#9B4F96]" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#9B4F96] mb-2">Career Growth</h3>
                  <p className="text-gray-900 text-sm">Opportunities that advance your professional journey in Nigeria&apos;s growing economy</p>
                </div>
              </div>
              
              {/* Email subscription with Nigerian-inspired design */}
              <div className="bg-gradient-to-r from-[#008751]/5 via-[#D3A121]/10 to-[#008751]/5 p-6 rounded-lg mb-6 border border-[#D3A121]/10">
                <p className="text-gray-900 mb-4 font-medium">
                  Be the first to know when we launch in Nigeria!
                </p>
                <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
                  <label htmlFor="email-input" className="sr-only">Your email address</label>
                  <input 
                    id="email-input"
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-4 py-3 rounded-full border border-[#D3A121]/30 focus:outline-none focus:border-[#008751] focus:ring-2 focus:ring-[#008751] shadow-sm"
                    aria-required="true"
                  />
                  <button 
                    type="button" 
                    className="bg-[#008751] text-white px-6 py-3 rounded-full hover:opacity-90 transition shadow-sm font-medium"
                    aria-label="Subscribe to launch notification"
                  >
                    Notify Me
                  </button>
                </form>
              </div>
              
              {/* Nigerian proverb section */}
              <figure className="bg-[#008751]/5 p-4 rounded-lg inline-block mx-auto mb-4">
                <blockquote className="italic text-gray-900">&quot;If you want to go fast, go alone. If you want to go far, go together.&quot;</blockquote>
                <figcaption className="text-sm text-[#008751] mt-1">— Nigerian Proverb</figcaption>
              </figure>
            </div>
          </section>
          
          {/* Footer with Nigerian cultural elements */}
          <footer className="border-t border-[#D3A121]/20 pt-6 mt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <a href="https://twitter.com" className="text-[#008751] hover:text-[#008751]/80 transition p-2" aria-label="Follow us on Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" className="text-[#008751] hover:text-[#008751]/80 transition p-2" aria-label="Connect with us on LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
                <a href="https://github.com" className="text-[#008751] hover:text-[#008751]/80 transition p-2" aria-label="View our GitHub projects">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
              
              <div className="text-center text-sm text-gray-900">
                <p>Expected Launch: Q3 2025 | <a href="mailto:info@headhunter.ng" className="text-[#008751] hover:underline focus:outline-none focus:ring-2 focus:ring-[#008751] rounded" aria-label="Email us at info@headhunter.ng">info@headhunter.ng</a></p>
                <p className="mt-1">&copy; {new Date().getFullYear()} Headhunter.ng. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
