'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

export default function Navbar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Platform', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Academy', path: '/academy' },
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'Company', path: '/company' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 group">
            <span className="font-bold text-3xl text-blue-600 tracking-tight">SWAIS</span>
          </Link>

          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {links.map(link => (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`nav-btn ${pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden xl:flex gap-4 items-center">
            {session ? (
              <Link href="/dashboard" className="px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm font-semibold tracking-wide shadow-md">
                Go to Dashboard
              </Link>
            ) : (
              <button 
                onClick={() => signIn('google')}
                className="px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all text-sm font-semibold tracking-wide shadow-md hover:shadow-lg"
              >
                Premium User Login
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
