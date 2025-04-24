import React from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { StudentDashboard } from './components/StudentDashboard';
import { ThemeProvider } from './context/ThemeContext';
export function App() {
  return <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <Navigation />
        <main className="flex-1 px-4 py-6 md:px-6 lg:px-8">
          <StudentDashboard />
        </main>
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-6 text-sm text-gray-500 dark:text-gray-400 transition-colors duration-200">
          <div className="container mx-auto flex justify-between items-center">
            <p>© 2023 SENATI. Todos los derechos reservados.</p>
            <p>Versión 9.0</p>
          </div>
        </footer>
      </div>
    </ThemeProvider>;
}