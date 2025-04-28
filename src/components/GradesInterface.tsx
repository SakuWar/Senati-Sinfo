import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';

export function GradesInterface({ onClose }: { onClose: () => void }) {
    const gradesData = [
        { course: 'Introducción a la Programación', grade: '18', credits: '4', period: '2025-1' },
        { course: 'Algoritmos y Estructuras de Datos', grade: '17', credits: '4', period: '2025-1' },
        { course: 'Programación Orientada a Objetos', grade: '19', credits: '4', period: '2025-1' },
        { course: 'Bases de Datos', grade: '16', credits: '3', period: '2025-1' },
        { course: 'Desarrollo Web', grade: '20', credits: '3', period: '2025-1' },
        { course: 'Programación en Python', grade: '18', credits: '3', period: '2025-1' },
        { course: 'Desarrollo de Aplicaciones Móviles', grade: '17', credits: '3', period: '2025-1' },
        { course: 'Ciberseguridad Básica', grade: '16', credits: '2', period: '2025-1' },
        { course: 'Inteligencia Artificial', grade: '19', credits: '4', period: '2025-1' },
        { course: 'Machine Learning', grade: '18', credits: '4', period: '2025-1' },
        { course: 'Programación en Java', grade: '17', credits: '3', period: '2025-1' },
        { course: 'Desarrollo de Videojuegos', grade: '20', credits: '3', period: '2025-1' }
      ];
      
      

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-800 dark:text-white">Registro de Notas</h2>
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Curso</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Nota</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Créditos</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Período</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {gradesData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.course}</td>
                <td className="px-4 py-3 text-sm font-medium text-blue-600 dark:text-blue-400">{item.grade}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.credits}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.period}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}