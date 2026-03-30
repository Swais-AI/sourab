'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIndustry } from '../store/slices/userSlice';

const industries = [
  'Logistics', 'Warehouse', 'Ecommerce', 'Banking', 'Healthcare', 'Manufacturing', 'EduTech'
];

export default function ChangeIndustryModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const currentIndustry = useSelector(state => state.user.industry);
  const [selected, setSelected] = useState(currentIndustry || 'Warehouse');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSave = async () => {
    if (!user?.email) return onClose();
    setLoading(true);
    try {
      const res = await fetch((process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api') + '/user/update-industry', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email, industry: selected })
      });
      if (res.ok) {
        dispatch(setIndustry(selected));
        onClose();
        // Since we are mocking other dashboards for now, notify user if they pick something else
        if (selected !== 'Warehouse') {
          alert(`Dashboard for ${selected} is not yet implemented. Only Warehouse dashboard is fully implemented.`);
        }
      } else {
        console.error('Failed to update industry');
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fadeIn">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Change Industry</h3>
        <p className="text-sm text-gray-500 mb-4">
          Select a new industry to customize your dashboard experience.
        </p>
        
        <select 
          value={selected} 
          onChange={(e) => setSelected(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-6 text-gray-700 bg-gray-50"
        >
          {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
        </select>

        <div className="flex justify-end gap-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
            disabled={loading}
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-sm transition-colors flex items-center gap-2"
            disabled={loading}
          >
            {loading ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span> : null}
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
