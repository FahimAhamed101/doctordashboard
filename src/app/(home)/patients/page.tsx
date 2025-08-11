"use client";

import { useState } from "react";
import { PatientsHeader } from "./components/patients/PatientsHeader";
import { PatientsFilters } from "./components/patients/PatientsFilters";
import { PatientsTable } from "./components/patients/PatientsTable";
import { Patient } from "./types/patient";

export default function PatientsDashboard() {
const patients = [
    {
      id: "P6Q7R8",
      initial: "R",
      name: "Rami Rahmim ahmed",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "04-30-2026",
      status: "In Care",
    },
    {
      id: "J0K1L2",
      initial: "T",
      name: "Tariq Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "03-15-2027",
      status: "Recovered",
    },
    {
      id: "V2W3X4",
      initial: "M",
      name: "Maya Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "01-01-2028",
      status: "In Care",
    },
    {
      id: "D4E5F6",
      initial: "S",
      name: "Sami Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "08-14-2027",
      status: "Recovered",
    },
    {
      id: "M3N4O5",
      initial: "Z",
      name: "Zara Rahm...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "10-10-2025",
      status: "In Care",
    },
    {
      id: "S9T0U1",
      initial: "N",
      name: "Nashit Rah...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "02-20-2027",
      status: "In Care",
    },
    {
      id: "B8C9D0",
      initial: "F",
      name: "Fahim Rah...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "09-10-2028",
      status: "Recovered",
    },
    {
      id: "G7H8I9",
      initial: "R",
      name: "Riya Rahma...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "11-22-2025",
      status: "Recovered",
    },
 
  
  
  ]
  return (
    <div className="flex min-h-screen w-full  flex-col bg-[#F6F9FC] p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="pb-4 bg-white rounded-lg shadow-sm  mb-5 p-5">
<PatientsHeader /> <PatientsFilters />
      </div>
      
      
      
       <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm md:p-6">
       
       
        <PatientsTable patients={patients} />
      </div>
    </div>
  );
}