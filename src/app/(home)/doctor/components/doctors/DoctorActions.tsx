import Link from 'next/link';
import { Eye, PencilLine } from 'lucide-react';

export const DoctorActions = () => (
  <div className="flex justify-end space-x-2">
    <Link href="/doctor/appointments">
      <button className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <Eye className="h-4 w-4" />
        <span className="sr-only">View</span>
      </button>
    </Link>
    <button className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <PencilLine className="h-4 w-4" />
      <span className="sr-only">Edit</span>
    </button>
  </div>
);