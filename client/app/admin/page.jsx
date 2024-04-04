
"use client"
import React, { useEffect, useState } from 'react'
import AdminNav from '@/components/own/AdminNav'
import { NextUIProvider } from '@nextui-org/react';
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import axios from 'axios';
import Link from 'next/link';
const app = () => {
  const [students, setstudents] = useState([])
  const getStudent=async()=>
  {
  try {
    const response=await axios.get('http://localhost:5000/all-student',{ withCredentials: true });
  console.log(response.data)
    const result=response.data
  
    setstudents(result.data)
  
  } catch (error) {
    console.log(error)
  }
  }

  useEffect(() => {
    getStudent()
  
   
  }, [])
  
  return (
   <>
   <div>
  <AdminNav/>
   </div>
   <div>

    <div class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 bg-opacity-50">
   <div class="max-w-3xl mx-auto from-blue-100 via-purple-100 to-pink-100 bg-opacity-75 p-4 rounded shadow relative z-10">
      <h1 class="text-2xl font-bold mb-4 text-center">Student Information</h1>

      <table class="min-w-full bg-white bg-opacity-90 border border-gray-300 rounded-lg overflow-hidden">
        <thead>
          <tr class="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-white">
            <th class="border-b text-black font-semibold border-r border-white py-2 px-4border-gray-300 py-2 px-4">Student Name</th>
            <th class="border-b text-black font-semibold border-r border-white py-2 px-4border-gray-300 py-2 px-4">Class</th>
            <th class="border-b text-black font-semibold border-r border-white py-2 px-4border-gray-300 py-2 px-4">College Year</th>
            <th class="border-b text-black font-semibold border-r border-white py-2 px-4border-gray-300 py-2 px-4">Gender</th>
            <th class="border-b text-black font-semibold border-r border-white py-2 px-4border-gray-300 py-2 px-4">Detail</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student._id} class="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
              <td class="border-b border-r border-white py-2 px-4">{student.Name}</td>
              <td class="border-b border-r border-white py-2 px-4">{student.class}</td>
              <td class="border-b border-r border-white py-2 px-4">{student.college_year}</td>
              <td class="border-b border-r border-white py-2 px-4">{student.gender}</td>
              <td class="border-b border-white py-2 px-4"><Link href={`/studentinfo/${student._id}`} class="text-blue-500 hover:bg-blue-200 rounded p-1">view</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
</div>
    
   </div>
   </>
  )
}

export default app