'use client';
import { useSelector } from 'react-redux';
import WarehouseDashboard from '../../components/WarehouseDashboard';

export default function DashboardPage() {
  const industry = useSelector(state => state.user.industry);

  if (industry === 'Warehouse') {
    return <WarehouseDashboard />;
  }

  return (
    <div className="glass-card p-8 text-center animate-fadeIn rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-2">{industry} Dashboard</h2>
      <p className="text-slate-400 max-w-lg mx-auto">
        The customized dashboard data for the <span className="font-semibold text-cyan-400">{industry}</span> industry is currently under development. 
        <br/><br/>
        Please check back later or change your industry to <strong className="text-cyan-400">Warehouse</strong> to view a fully functional demo with mock operational data.
      </p>
    </div>
  );
}
