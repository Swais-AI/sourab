'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    alert('Search functionality for: ' + searchQuery);
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden bg-gradient-hero py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        <div className="mx-auto w-64 h-64 md:w-80 md:h-80 bg-white rounded-[2rem] border-4 border-blue-200 shadow-xl flex items-center justify-center mb-10 relative overflow-hidden group p-2 md:p-4">
          <img 
            src="/assets/ai-avatar.jpeg" 
            alt="SWAIS AI Avatar" 
            className="w-full h-full object-contain rounded-2xl transition-transform duration-700 group-hover:scale-105" 
            onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=SWAIS' }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-transparent pointer-events-none rounded-[2rem]"></div>
        </div>

        <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-4 tracking-wider uppercase">Saraf Worldsphere AI Services (SWAIS)</h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight mb-8 leading-tight">
          Enterprise <span className="text-gradient">Intelligence Systems</span><br className="hidden md:block" /> for Operations, Industry, and Education
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed mb-6">
          Saraf Worldsphere AI Services (SWAIS) is a technology initiative focused on building intelligent systems that support enterprise operations, institutional capability development, and digital transformation.
        </p>

        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          SWAIS develops operational intelligence platforms that help organizations improve visibility, strengthen productivity, and support better decision-making across their business environments.
        </p>

        <div className="max-w-2xl mx-auto bg-white p-2 pl-6 pr-2 rounded-full flex flex-col sm:flex-row items-center gap-2 relative z-20 mb-20 shadow-xl border border-gray-100">
          <input 
            type="text" 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSearch()}
            placeholder="Search enterprise solutions..." 
            className="w-full bg-transparent text-gray-800 border-none focus:ring-0 text-lg px-2 py-3 placeholder-gray-400 outline-none"
          />
          
          <button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white p-3.5 rounded-full transition-colors flex-shrink-0 w-full sm:w-auto mt-2 sm:mt-0 shadow-md">
            <svg className="w-5 h-5 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left relative z-20 mt-10 pt-16">
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 rounded bg-blue-600 block"></span>
              Key Focus Areas
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3"><span className="text-blue-500 font-bold">✓</span> Operational Intelligence Systems</li>
              <li className="flex items-start gap-3"><span className="text-blue-500 font-bold">✓</span> Enterprise Software Platforms</li>
              <li className="flex items-start gap-3"><span className="text-blue-500 font-bold">✓</span> Productivity Analytics</li>
              <li className="flex items-start gap-3"><span className="text-blue-500 font-bold">✓</span> Digital Capability Development</li>
            </ul>
          </div>
          
          <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-2 h-8 rounded bg-blue-600 block"></span>
              What SWAIS Works On
            </h3>
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="flex items-start gap-3"><span className="text-blue-500 font-bold">✓</span> Technology platforms for logistics</li>
              <li className="flex items-start gap-3"><span className="text-blue-500 font-bold">✓</span> Warehouse productivity monitoring</li>
              <li className="flex items-start gap-3"><span className="text-blue-500 font-bold">✓</span> Manufacturing operational analytics</li>
              <li className="flex items-start gap-3"><span className="text-blue-500 font-bold">✓</span> Training and capability development</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
