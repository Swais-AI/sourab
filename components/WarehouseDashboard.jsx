'use client';
import { useEffect, useState } from 'react';

export default function WarehouseDashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch((process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api') + '/warehouse-data')
      .then(res => res.json())
      .then(d => setData(d))
      .catch(console.error);
  }, []);

  if (!data) return <div className="p-8 text-center text-gray-500 animate-pulse">Loading Dashboard Data...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Warehouse Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Weekly Revenue</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">${data.analytics.weeklyRevenue.toLocaleString()}</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Active Workers</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{data.analytics.activeWorkers}</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">Total Orders</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">{data.orders.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Inventory Overview</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead>
                <tr className="text-gray-400 border-b">
                  <th className="pb-3 text-sm font-medium">Item</th>
                  <th className="pb-3 text-sm font-medium">Quantity</th>
                  <th className="pb-3 text-sm font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {data.inventory.map(item => (
                  <tr key={item.id} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="py-3 font-medium">{item.item}</td>
                    <td className="py-3">{item.quantity}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${item.status === 'In Stock' ? 'bg-green-100 text-green-700' : item.status === 'Low Stock' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-700'}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            {data.orders.map(order => (
              <div key={order.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg bg-gray-50/50">
                <div>
                  <p className="font-semibold text-gray-800">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.customer}</p>
                </div>
                <div className="sm:text-right mt-2 sm:mt-0">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                    {order.status}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">{order.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
