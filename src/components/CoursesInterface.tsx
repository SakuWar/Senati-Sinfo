import React from 'react';
import { ChevronLeftIcon } from 'lucide-react';

export function CoursesInterface({ onClose }: { onClose: () => void }) {
  const coursesData = [
    { 
      code: 'PRO-101', 
      name: 'Introducción a la Programación', 
      professor: 'Ing. Laura Ramírez',
      schedule: 'Lunes y Miércoles 08:00 - 10:00',
      classroom: 'Lab-1',
      status: 'En progreso'
    },
    { 
      code: 'ALG-201', 
      name: 'Algoritmos y Estructuras de Datos', 
      professor: 'Dr. José Martínez',
      schedule: 'Martes y Jueves 10:00 - 12:00',
      classroom: 'Lab-2',
      status: 'Activo'
    },
    { 
      code: 'WEB-301', 
      name: 'Desarrollo Web', 
      professor: 'Lic. Mariana Díaz',
      schedule: 'Miércoles y Viernes 14:00 - 16:00',
      classroom: 'Lab-5',
      status: 'Activo'
    },
    { 
      code: 'PYT-202', 
      name: 'Programación en Python', 
      professor: 'Ing. Samuel Torres',
      schedule: 'Lunes y Miércoles 10:00 - 12:00',
      classroom: 'Lab-3',
      status: 'En progreso'
    },
    { 
      code: 'MOB-401', 
      name: 'Desarrollo de Aplicaciones Móviles', 
      professor: 'Ing. Daniela Guzmán',
      schedule: 'Martes y Jueves 08:00 - 10:00',
      classroom: 'Lab-1',
      status: 'Activo'
    },
    { 
      code: 'CYB-305', 
      name: 'Ciberseguridad Básica', 
      professor: 'Dr. Ernesto Salazar',
      schedule: 'Viernes 10:00 - 13:00',
      classroom: 'Lab-4',
      status: 'Completado'
    },
    { 
      code: 'IA-501', 
      name: 'Inteligencia Artificial', 
      professor: 'Dr. Karla Fernández',
      schedule: 'Lunes y Miércoles 16:00 - 18:00',
      classroom: 'Lab-2',
      status: 'Activo'
    },
    { 
      code: 'ML-502', 
      name: 'Machine Learning', 
      professor: 'Mg. Víctor Hugo Ruiz',
      schedule: 'Martes y Jueves 16:00 - 18:00',
      classroom: 'Lab-5',
      status: 'Activo'
    },
    { 
      code: 'JAVA-301', 
      name: 'Programación en Java', 
      professor: 'Ing. Sofía Medina',
      schedule: 'Sábados 08:00 - 11:00',
      classroom: 'Lab-3',
      status: 'En progreso'
    },
    { 
      code: 'VID-401', 
      name: 'Desarrollo de Videojuegos', 
      professor: 'Lic. Pablo Contreras',
      schedule: 'Sábados 11:00 - 14:00',
      classroom: 'Lab-1',
      status: 'Activo'
    }
  ];
  

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-gray-800 dark:text-white">Mis Cursos Actuales</h2>
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
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Código</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Curso</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Profesor</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Horario</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Aula</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {coursesData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3 text-sm font-mono text-blue-600 dark:text-blue-400">{item.code}</td>
                <td className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">{item.name}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.professor}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.schedule}</td>
                <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">{item.classroom}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-1 rounded-full ${
                    item.status === 'Activo' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
                      : item.status === 'En progreso'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                      : 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}