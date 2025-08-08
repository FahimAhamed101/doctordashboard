import { Search } from "lucide-react";
import { FilterDropdown } from "./FilterDropdown";

export function PatientsFilters() {
  return (
    <div className="flex flex-wrap items-center gap-4 lg:gap-6">
      <FilterDropdown 
        title="Gender" 
        options={["Male", "Female", "Other"]} 
        onSelect={(option) => console.log(option)} 
      />
      <FilterDropdown 
        title="Visit Type" 
        options={["New Patient", "Follow-up", "Emergency"]} 
        onSelect={(option) => console.log(option)} 
      />
      <FilterDropdown 
        title="Status" 
        options={["In Care", "Recovered", "Discharged"]} 
        onSelect={(option) => console.log(option)} 
      />
      <FilterDropdown 
        title="Sort by" 
        options={["Name", "Last Visit", "ID"]} 
        onSelect={(option) => console.log(option)} 
      />

      <div className="relative flex-1 min-w-[300px] max-w-md ml-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Look for patient name"
          className="w-full shadow-sm rounded-lg py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
        />
      </div>
    </div>
  );
}