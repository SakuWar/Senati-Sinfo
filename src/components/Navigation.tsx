import React, { useState } from 'react';
import { HomeIcon, ChevronRightIcon, MenuIcon } from 'lucide-react';
export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-12 text-sm">
          <a href="#" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
            <HomeIcon className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">Inicio</span>
          </a>
          <ChevronRightIcon className="h-4 w-4 mx-2 text-gray-400 dark:text-gray-500" />
          <a href="#" className="text-blue-600 dark:text-blue-400 font-medium">
            Servicios al alumno
          </a>
          <div className="ml-auto hidden md:flex space-x-1">
            <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200">
              Información Personal
            </button>
            <button className="px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium rounded transition-colors duration-200">
              Servicios al alumno
            </button>
            <button className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200">
              Menú de Servicio
            </button>
          </div>
          <button className="ml-auto md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <MenuIcon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-200 ${isMobileMenuOpen ? 'max-h-48' : 'max-h-0'}`}>
          <div className="py-2 space-y-1">
            <button className="w-full px-4 py-2 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200">
              Información Personal
            </button>
            <button className="w-full px-4 py-2 text-left bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium rounded transition-colors duration-200">
              Servicios al alumno
            </button>
            <button className="w-full px-4 py-2 text-left text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors duration-200">
              Menú de Servicio
            </button>
          </div>
        </div>
      </div>
    </nav>;
}