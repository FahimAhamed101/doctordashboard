import Link from "next/link";
import { Download, Plus } from "lucide-react";

interface PatientsHeaderProps {
  title?: string;
  description?: string;
}

export function PatientsHeader({ 
  title = "Patients", 
  description = "Manage all the patients" 
}: PatientsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="grid gap-1">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="inline-flex items-center justify-center rounded-md shadow-md bg-transparent px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </button>
        <Link href="/doctor/abelite">
          <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#2E8BC9] px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <Plus className="w-4 h-4 mr-2" />
            Add New
          </button>
        </Link>
      </div>
    </div>
  );
}