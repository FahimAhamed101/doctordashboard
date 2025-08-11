"use client";
import { useState } from 'react';
import { DoctorsHeader } from './components/doctors/DoctorsHeader';
import { DoctorsTable } from './components/doctors/DoctorsTable';
import { Doctor } from './types/doctor';

export default function DoctorsPage() {
  const [doctors] = useState<Doctor[]>([
    {
      id: "P6Q7R8",
      name: "Rami Rahman Chowdhury",
      avatar: "/placeholder.svg?height=32&width=32",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      appointments: 15,
      patients: 15,
    },
    {
      id: "P6Q7R81",
      name: "Rami Rahman Chowdhury",
      avatar: "/placeholder.svg?height=32&width=32",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      appointments: 15,
      patients: 15,
    },
    // ... rest of the doctors data
  ]);

  return (
    <div className="min-h-screen bg-[#F6F9FC] sm:p-6 md:p-8">
      <DoctorsHeader 
        title="Doctors" 
        description="Oversee all the doctors." 
      />
      
      <div className="bg-white rounded-lg shadow-sm">
        <DoctorsTable doctors={doctors} />
      </div>
    </div>
  );
}