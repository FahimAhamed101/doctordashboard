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
      name: "Rami Rahm...",
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
    {
      id: "Y5Z6A7",
      initial: "A",
      name: "Ayaan Rah...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "12-05-2026",
      status: "In Care",
    },
    {
      id: "E1F2G3",
      initial: "H",
      name: "Hadi Rahma...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Male",
      lastVisit: "06-30-2026",
      status: "In Care",
    },
    {
      id: "A1B2C3",
      initial: "S",
      name: "Sofia Elham...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "05-25-2026",
      status: "In Care",
    },
    {
      id: "H4I5J6",
      initial: "L",
      name: "Lina Rahma...",
      contact: { email: "sarah_illustrates@gmail.com", phone: "(555) 123-4567" },
      gender: "Female",
      lastVisit: "03-12-2025",
      status: "In Care",
    },
  ]
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm md:p-6">
        <PatientsHeader />
        <PatientsFilters />
        <PatientsTable patients={patients} />
      </div>
    </div>
  );
}