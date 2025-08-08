interface PatientStatusBadgeProps {
  status: string;
}

export function PatientStatusBadge({ status }: PatientStatusBadgeProps) {
  const statusClasses: Record<string, string> = {
    "In Care": "bg-green-100 text-green-800",
    "Recovered": "bg-blue-100 text-blue-800",
    "Discharged": "bg-gray-100 text-gray-800"
  };

  return (
    <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold leading-5 ${statusClasses[status]}`}>
      {status}
    </span>
  );
}