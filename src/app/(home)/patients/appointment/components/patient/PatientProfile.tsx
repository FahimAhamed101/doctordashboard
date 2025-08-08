import React from 'react';
import { Button } from "@/app/components/ui/Button";

interface PatientProfileProps {
  name: string;
  patientId: string;
  status?: string;
}

export const PatientProfile: React.FC<PatientProfileProps> = ({ 
  name, 
  patientId, 
  status = "In Care" 
}) => {
  const initials = name.split(' ').map(n => n[0]).join('');

  return (
    <div className="flex flex-col items-start border-r border-[#DCDCDC] gap-4 pr-5">
      <div className="w-16 h-16 rounded-full bg-[#2E8BC9] flex items-center justify-center text-white text-xl font-semibold">
        {initials}
      </div>
      <div className="flex items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">{name}</h2>
            <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {status}
            </span>
          </div>
          <p className="text-sm text-gray-500">Patient ID: {patientId}</p>
        </div>
      </div>
      <Button className="w-full bg-[#2E8BC9] hover:bg-blue-600 text-white">
        Send Message
      </Button>
    </div>
  );
};