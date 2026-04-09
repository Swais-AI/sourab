'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, setIndustry } from '../../store/slices/userSlice';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/user/me`, { credentials: 'include' })
      .then(res => {
        if (!res.ok) throw new Error('unauthenticated');
        return res.json();
      })
      .then(data => {
        // Not finished registration → send to /register
        if (!data.registration_complete) {
          router.replace('/register');
          return;
        }
        // Registered but not yet activated by HEAD → send to /pending
        if (!data.is_active) {
          router.replace('/pending');
          return;
        }
        // Fully activated — allow into dashboard
        dispatch(setUser(data));
        dispatch(setIndustry(data.user_type));
        setLoading(false);
      })
      .catch(() => router.replace('/login'));
  }, [dispatch, router]);

  const handleLogout = () => {
    fetch(`${API}/auth/logout`, { method: 'POST', credentials: 'include' })
      .then(() => router.replace('/login'));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f4f8] text-[#0f2851] font-sans">
        Loading session...
      </div>
    );
  }

  return <>{children}</>;
}
