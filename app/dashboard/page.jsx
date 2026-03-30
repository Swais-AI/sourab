'use client';
import { useSelector } from 'react-redux';
import WarehouseDashboard from '../../components/WarehouseDashboard';

export default function DashboardPage() {
  const industry = useSelector(state => state.user.industry);

  if (industry === 'Warehouse') {
    return <WarehouseDashboard />;
  }

  // Placeholder for other industries
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{industry} Dashboard</h2>
      <p className="text-gray-500 max-w-lg mx-auto">
        The customized dashboard data for the <span className="font-semibold">{industry}</span> industry is currently under development. 
        <br/><br/>
        Please check back later or change your industry to <strong>Warehouse</strong> to view a fully functional demo with mock operational data.
      </p>
    </div>
  );
}
