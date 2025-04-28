import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';

export function PaymentsInterface({ onClose }: { onClose: () => void }) {
  const paymentsData = [
    { concept: 'Matrícula 2024-1', dueDate: '15/03/2024', amount: 'S/ 850.00', status: 'Pagado' },
    { concept: 'Seguro Estudiantil', dueDate: '20/04/2024', amount: 'S/ 120.00', status: 'Pendiente' },
    { concept: 'Materiales Lab', dueDate: '05/05/2024', amount: 'S/ 230.00', status: 'Pendiente' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-800 dark:text-white">Gestión de Pagos</h2>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Concepto</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Vencimiento</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Monto</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {paymentsData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.concept}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.dueDate}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.amount}</td>
                <td className="px-4 py-3 text-sm font-medium">
                  <span className={`px-2 py-1 rounded-full ${
                    item.status === 'Pagado' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">Total Pendiente:</h3>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">S/ 350.00</p>
      </div>
    </div>
  );
}