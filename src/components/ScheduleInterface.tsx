import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';

export function ScheduleInterface({ onClose }: { onClose: () => void }) { // <-- Asegura el export
    const scheduleData = [
        { day: 'Lunes', time: '08:00 - 10:00', course: 'Introducción a la Programación', room: 'Lab-1' },
        { day: 'Lunes', time: '10:00 - 12:00', course: 'Algoritmos y Estructuras de Datos', room: 'Lab-2' },
        { day: 'Martes', time: '08:00 - 10:00', course: 'Programación Orientada a Objetos', room: 'Lab-3' },
        { day: 'Martes', time: '10:00 - 12:00', course: 'Bases de Datos', room: 'Lab-4' },
        { day: 'Miércoles', time: '08:00 - 10:00', course: 'Desarrollo Web', room: 'Lab-5' },
        { day: 'Miércoles', time: '10:00 - 12:00', course: 'Programación en Python', room: 'Lab-2' },
        { day: 'Jueves', time: '08:00 - 10:00', course: 'Desarrollo de Aplicaciones Móviles', room: 'Lab-1' },
        { day: 'Jueves', time: '10:00 - 12:00', course: 'Ciberseguridad Básica', room: 'Lab-3' },
        { day: 'Viernes', time: '08:00 - 10:00', course: 'Inteligencia Artificial', room: 'Lab-4' },
        { day: 'Viernes', time: '10:00 - 12:00', course: 'Machine Learning', room: 'Lab-5' },
        { day: 'Sábado', time: '08:00 - 10:00', course: 'Programación en Java', room: 'Lab-2' },
        { day: 'Sábado', time: '10:00 - 12:00', course: 'Desarrollo de Videojuegos', room: 'Lab-1' }
      ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-800 dark:text-white">Horario Semanal</h2>
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Día</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Hora</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Curso</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Aula</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {scheduleData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.day}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.time}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.course}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}