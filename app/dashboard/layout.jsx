'use client';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../store/slices/userSlice';
import ChangeIndustryModal from '../../components/ChangeIndustryModal';

export default function DashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, industry } = useSelector(state => state.user);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user && !user) {
      fetch((process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api') + '/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: session.user.name,
          email: session.user.email,
          industry: null
        })
      })
      .then(res => res.json())
      .then(data => {
        dispatch(setUser(data));
      })
      .catch(console.error);
    }
  }, [session, user, dispatch]);

  useEffect(() => {
    if (user && !industry && !isModalOpen) {
      setModalOpen(true);
    }
  }, [user, industry, isModalOpen]);

  if (status === 'loading' || !user) {
    return <div className="min-h-screen flex items-center justify-center text-slate-500 animate-pulse bg-[#0a0a0f]">Loading Session...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col">
      <nav className="bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="font-bold text-2xl text-gradient tracking-tight cursor-pointer" onClick={() => router.push('/')}>SWAIS</span>
              <span className="ml-4 px-2.5 py-1 text-xs font-semibold bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">{industry || 'No Industry'} Dashboard</span>
            </div>
            <div className="flex items-center gap-4 border-l pl-4 border-white/10">
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-sm font-semibold text-slate-200">{user.name}</span>
                <span className="text-xs text-slate-500">{user.email}</span>
              </div>
              <button onClick={() => setModalOpen(true)} className="px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 text-slate-300 rounded-md font-medium transition-colors border border-white/10">Change Industry</button>
              <button onClick={() => signOut()} className="px-3 py-1.5 text-xs text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-md transition-colors">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full animate-fadeIn">
        {children}
      </main>

      <ChangeIndustryModal isOpen={isModalOpen} onClose={() => {
        if (industry) setModalOpen(false);
      }} />
    </div>
  );
}
