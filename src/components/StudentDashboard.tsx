import React, { useState } from 'react';
import { ServiceCard } from './ServiceCard';
import { QuickActions } from './QuickActions';
import { ScheduleInterface } from './ScheduleInterface';
import { GradesInterface } from './GradesInterface';
import { PaymentsInterface } from './PaymentsInterface';
import { CoursesInterface } from './CoursesInterface';
import {
  CalendarIcon,
  GraduationCapIcon,
  UserIcon,
  CreditCardIcon,
  TicketIcon,
  BookOpenIcon,
  CameraIcon,
  FileTextIcon,
  UploadIcon
} from 'lucide-react';

export function StudentDashboard() {
  const [currentView, setCurrentView] = useState<'main' | 'schedule' | 'grades' | 'payments' | 'courses'>('main');

  return (
    <div className="container mx-auto">
      {/* Vista principal */}
      {currentView === 'main' && (
        <>
          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-2">Acceso Rápido</h2>
            <p className="text-sm text-gray-600 mb-4">Servicios más utilizados por los estudiantes</p>
            <QuickActions 
              onActionClick={(action) => {
                if (action === 'Horario') setCurrentView('schedule');
                if (action === 'Notas') setCurrentView('grades');
                if (action === 'Pagos') setCurrentView('payments');
                if (action === 'Cursos') setCurrentView('courses');
              }}
            />
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-medium text-gray-800 mb-2">Panel de Servicios</h2>
            <p className="text-sm text-gray-600 mb-4">Explora todos los servicios disponibles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Matrícula y horarios" 
                description="Verifica tu status de matrícula, horario de clases y agregar o eliminar clases." 
                icon={<CalendarIcon className="h-6 w-6" />} 
                expanded={true} 
              />
              <ServiceCard 
                title="Registros académicos y calificaciones" 
                description="Revisa tus calificaciones, histórico académico y retenciones." 
                icon={<GraduationCapIcon className="h-6 w-6" />} 
              />
              <ServiceCard 
                title="Mis PEA" 
                description="Accede a información sobre tu Programa Educativo Aplicado." 
                icon={<UserIcon className="h-6 w-6" />} 
              />
              <ServiceCard 
                title="Pagos / Tarifas / Seguros y Cronograma" 
                description="Visualiza los resúmenes de cuentas, tickets, cronograma de pagos, y seguros." 
                icon={<CreditCardIcon className="h-6 w-6" />} 
              />
              <ServiceCard 
                title="Tickets de Pago" 
                description="Puede solicitar tickets de pago por el concepto de servicios para cancelar en el Banco." 
                icon={<TicketIcon className="h-6 w-6" />} 
              />
              <ServiceCard 
                title="Prácticas Pre-Profesionales" 
                description="Para los alumnos del Dual, Técnicos Industriales, Administradores Industriales y Técnicos en Ingeniería." 
                icon={<BookOpenIcon className="h-6 w-6" />} 
              />
              <ServiceCard 
                title="Subir foto para el título" 
                description="Sube tu fotografía para documentos oficiales y título profesional." 
                icon={<CameraIcon className="h-6 w-6" />} 
              />
              <ServiceCard 
                title="Mis certificados" 
                description="Accede y descarga tus certificados académicos." 
                icon={<FileTextIcon className="h-6 w-6" />} 
              />
              <ServiceCard 
                title="Carga de documentos a SINFO" 
                description="Sube documentos requeridos al Sistema de Información." 
                icon={<UploadIcon className="h-6 w-6" />} 
              />
            </div>
          </div>
        </>
      )}

      {/* Vistas secundarias */}
      {currentView === 'schedule' && <ScheduleInterface onClose={() => setCurrentView('main')} />}
      {currentView === 'grades' && <GradesInterface onClose={() => setCurrentView('main')} />}
      {currentView === 'payments' && <PaymentsInterface onClose={() => setCurrentView('main')} />}
      {currentView === 'courses' && <CoursesInterface onClose={() => setCurrentView('main')} />}
    </div>
  );
}