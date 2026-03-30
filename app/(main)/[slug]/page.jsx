import { notFound } from 'next/navigation';
import { pageContent } from '../../../data/pageContent';

export default async function GenericPage({ params }) {
  const { slug } = await params;
  const content = pageContent[slug];

  if (!content) {
    notFound();
  }

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full animate-fadeIn">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{content.title}</h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>
      
      {content.introText && (
        <div className="mb-16 max-w-4xl mx-auto bg-white/80 p-8 text-center md:text-left text-lg text-gray-600 leading-relaxed border-l-4 border-l-blue-600 shadow-sm rounded-r-lg">
          <p dangerouslySetInnerHTML={{ __html: content.introText }}></p>
        </div>
      )}
      
      {content.subtitle && (
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">{content.subtitle}</h2>
      )}
      
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${content.isBlog ? '2' : '3'} gap-8`}>
        {content.sections.map(sec => (
          <div key={sec.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 group cursor-default flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {content.isBlog ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                )}
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{sec.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">{sec.desc}</p>
            {content.isBlog && (
              <div className="mt-6 pt-4 border-t border-gray-100 text-sm font-semibold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors">
                Read Article &rarr;
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
