import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  expanded?: boolean;
}
export function ServiceCard({
  title,
  description,
  icon,
  expanded: initialExpanded = false
}: ServiceCardProps) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const [isHovered, setIsHovered] = useState(false);
  return <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200" style={{
    transform: isHovered ? 'translateY(-2px)' : 'none',
    boxShadow: isHovered ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : ''
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
        <div className="flex items-center justify-between p-4 cursor-pointer bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
          <div className="flex items-center">
            <div className={`text-blue-600 dark:text-blue-400 mr-3 transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`}>
              {icon}
            </div>
            <h3 className="font-medium text-gray-800 dark:text-white">
              {title}
            </h3>
          </div>
          <ChevronDownIcon className={`h-5 w-5 text-gray-400 dark:text-gray-500 transition-transform duration-200 ${expanded ? 'transform rotate-180' : ''}`} />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${expanded ? 'max-h-48' : 'max-h-0'}`}>
        <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-blue-50 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div className="mt-3 flex justify-end">
            <button className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200">
              Acceder
            </button>
          </div>
        </div>
      </div>
    </div>;
}