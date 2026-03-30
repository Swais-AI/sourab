export default function CompanyPage() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full animate-fadeIn">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About SWAIS</h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-16">
        <section className="bg-white w-full p-10 text-center max-w-4xl mx-auto border-t-4 border-t-blue-600 shadow-lg rounded-xl">
          <p className="text-gray-600 text-xl leading-relaxed italic mb-10">
            "Saraf Worldsphere AI Services (SWAIS) is focused on developing technology platforms that support operational intelligence, enterprise software systems, and institutional capability development."
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left bg-blue-50 p-8 rounded-xl border border-blue-100 relative overflow-hidden">
             
             <div>
               <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wider">SWAIS Core Vision</h3>
               <ul className="space-y-4 font-semibold text-lg text-gray-700">
                 <li className="flex items-center gap-3"><span className="text-blue-600 text-2xl font-bold w-6">S</span> - Social Welfare</li>
                 <li className="flex items-center gap-3"><span className="text-blue-600 text-2xl font-bold w-6">W</span> - Wisdom & Knowledge</li>
                 <li className="flex items-center gap-3"><span className="text-blue-600 text-2xl font-bold w-6">A</span> - Advancement for All</li>
                 <li className="flex items-center gap-3"><span className="text-blue-600 text-2xl font-bold w-6">I</span> - Innovation & Inclusion</li>
                 <li className="flex items-center gap-3"><span className="text-blue-600 text-2xl font-bold w-6">S</span> - Smart Solutions</li>
               </ul>
             </div>
             
             <div className="flex flex-col justify-center items-center text-center md:border-l border-blue-200 md:pl-8 mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0">
               <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-2 leading-tight">Sarvajan Hitay,</h3>
               <h3 className="text-2xl lg:text-3xl font-bold text-blue-800 mb-4 leading-tight">Sarvajan Sukhay</h3>
               <p className="text-lg text-blue-600 font-medium italic">(Welfare for All, Happiness of All)</p>
             </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center border-b border-gray-200 pb-4 inline-block relative left-1/2 transform -translate-x-1/2">Leadership</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-md transition-shadow">
              <div className="w-40 h-40 flex-shrink-0 rounded-full bg-gray-50 border-4 border-blue-100 flex items-center justify-center overflow-hidden">
                 <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Ashish Saraf</h3>
                <p className="text-blue-600 font-semibold text-lg mt-1 mb-4 flex items-center justify-center md:justify-start gap-2">
                   Chairman
                </p>
                <div className="text-gray-600 space-y-3 leading-relaxed text-center md:text-left">
                  <p>Ashish Saraf is an Industrialist, Investor and Industrial Engineer, did his Harvard OPM Owner President Management Program with extensive experience in business leadership and industrial development.</p>
                  <p>He is also the Chairman of Open Origin India, a green energy company focused on sustainable industrial initiatives and energy innovation.</p>
                  <p className="font-medium text-gray-800">At SWAIS, he provides strategic direction, supports international partnerships, and guides long-term technology initiatives.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:shadow-md transition-shadow">
              <div className="w-40 h-40 flex-shrink-0 rounded-full bg-gray-50 border-4 border-blue-100 flex items-center justify-center overflow-hidden">
                 <svg className="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">Murty Varanasi</h3>
                <p className="text-blue-600 font-semibold text-lg mt-1 mb-4 flex items-center justify-center md:justify-start gap-2">
                   Director & CEO
                </p>
                <div className="text-gray-600 space-y-3 leading-relaxed text-center md:text-left">
                  <p>Murty Varanasi brings 25+ years of extensive overseas experience in enterprise software systems, logistics platforms, supply chain operations, warehouse management systems, banking technology, and digital transformation initiatives.</p>
                  <p>He has worked across international technology environments delivering enterprise software solutions and operational platforms for global organizations.</p>
                  <p className="font-medium text-gray-800">At SWAIS, he leads solution development, operational execution, and client engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
