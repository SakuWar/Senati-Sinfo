import React from 'react';
import { SearchIcon, LogOutIcon, HelpCircleIcon, UserIcon, SunIcon, MoonIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
export function Header() {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <header className="bg-blue-600 dark:bg-gray-800 text-white transition-colors duration-200">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="mr-4">
            <img src="https://campusonline.senati.edu.pe/assets/images/logo-horizontal-blanco-web.fw-455x128.png" alt="SENATI Logo" className="h-8 w-auto" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input type="text" placeholder="Buscar una página..." className="bg-blue-700 dark:bg-gray-700 text-white placeholder-blue-200 dark:placeholder-gray-400 rounded-md py-1.5 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-200" />
            <SearchIcon className="absolute right-3 top-1.5 h-4 w-4 text-blue-200 dark:text-gray-400" />
          </div>
          <button onClick={toggleTheme} className="p-1.5 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full transition-colors duration-200" aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}>
            {theme === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
          </button>
          <button className="p-1.5 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full transition-colors duration-200" aria-label="Ayuda">
            <HelpCircleIcon className="h-5 w-5" />
          </button>
          <button className="p-1.5 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full transition-colors duration-200" aria-label="Mi perfil">
            <UserIcon className="h-5 w-5" />
          </button>
          <button className="p-1.5 hover:bg-blue-700 dark:hover:bg-gray-700 rounded-full transition-colors duration-200" aria-label="Salir">
            <LogOutIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="bg-blue-500 dark:bg-gray-700 px-4 py-2.5 transition-colors duration-200">
        <div className="container mx-auto">
          <p className="text-blue-100 dark:text-gray-300">
            Hola,{' '}
            <span className="font-medium text-white">
              DIEGO M. CHUQUIRUNA ABANTO
            </span>
            , te da la bienvenida.
          </p>
        </div>
      </div>
    </header>;
}