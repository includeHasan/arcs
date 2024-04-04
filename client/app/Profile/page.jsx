"use client"

import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import StudentNav from '@/components/own/studentUi';
const Page = () => {
const [student, setstudent] = useState({})


const getDetail=async()=>
{
   
    const res=await axios.get(`http://localhost:5000/student`,{withCredentials:true})
    const data=res.data;
    console.log(data)
    setstudent(data)
}

useEffect(() => {
 getDetail()

 
}, [])

  return (
    <>
    <div>
        <StudentNav></StudentNav>
    </div>
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center mb-4"> Details</h1>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 mb-4">
          <label className="text-gray-600">Name</label>
          <p>{student.Name}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">ERP Number</label>
          <p>{student.erp_no}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Date of Birth</label>
          <p>{new Date(student.dob).toLocaleDateString()}</p>
        </div>
        

        <div className="mb-4">
          <label className="text-gray-600">Gender</label>
          <p>{student.gender}</p>
        </div>

        <div className="col-span-2 mb-4">
          <label className="text-gray-600">Address</label>
          <p>{student.address}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Phone Number</label>
          <p>{student.phone_no}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Email</label>
          <p>{student.email}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Fees Status</label>
       
          <p className={student.fees_status === 'pending' ? 'text-red-500' : 'text-green-500'}>
    {student.fees_status}
  </p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Academic Status</label>
          <p className={student.academic_status === 'Dropout' ? 'text-red-500' : 'text-green-500'}>
    {student.academic_status}
  </p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">College Year</label>
          <p>{student.college_year}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Class</label>
          <p>{student.class}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Roll Number</label>
          <p>{student.rollNo}</p>
        </div>

        <div className="mb-4">
          <label className="text-gray-600">Aadhar Card Number</label>
          <p>{student.aadhar_card_no}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page;
