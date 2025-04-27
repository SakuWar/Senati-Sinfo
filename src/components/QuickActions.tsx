import React from 'react';
import { CalendarIcon, GraduationCapIcon, CreditCardIcon, BookOpenIcon } from 'lucide-react';

interface QuickActionsProps {
  onActionClick?: (actionLabel: string) => void;
}

export function QuickActions({ onActionClick }: QuickActionsProps) {
  const actions = [{
    icon: <CalendarIcon className="h-5 w-5" />,
    label: 'Horario',
    color: 'bg-green-100 text-green-600'
  }, {
    icon: <GraduationCapIcon className="h-5 w-5" />,
    label: 'Notas',
    color: 'bg-blue-100 text-blue-600'
  }, {
    icon: <CreditCardIcon className="h-5 w-5" />,
    label: 'Pagos',
    color: 'bg-purple-100 text-purple-600'
  }, {
    icon: <BookOpenIcon className="h-5 w-5" />,
    label: 'Cursos',
    color: 'bg-orange-100 text-orange-600'
  }];
  
  return <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {actions.map((action, index) => <button key={index} onClick={() => onActionClick?.(action.label)}className="flex flex-col items-center p-4 rounded-lg transition-all duration-200 hover:transform hover:scale-105">
          <div className={`p-3 rounded-full ${action.color} mb-2`}>
            {action.icon}
          </div>
          <span className="text-sm font-medium text-gray-700">
            {action.label}
          </span>
        </button>)}
    </div>;
}