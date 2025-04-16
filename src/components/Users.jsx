'use client';


import React from 'react';
import axios from 'axios';


const Users = ({users=[]}) => {
    const handeldelete=async(id)=>{
        try {
            await axios.delete(`https://travelapp-acje.vercel.app/api/Delete?id=${id}`).then((res) => {
                alert(" Request Deleted Successfully");
                window.location.reload();
                // Update the state to remove the deleted user
                setUsers(users.filter(user => user._id !== id));
              });
            } catch (error) {
              console.log("Error in deleting:", error);
            }
          };
  return (
    <div className="overflow-x-auto mt-36 mb-40">
        <h1 className='text-center text-5xl font-bold text-stone-600'>Users Enquiry Requests</h1> <br /> <br />
    <table className="min-w-full min-h-full ">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">Name</th>
          <th className="py-2 px-4 border-b border-gray-200">phone</th>
          <th className="py-2 px-4 border-b border-gray-200">Email</th>
          <th className="py-2 px-4 border-b border-gray-200">Enquiry for</th>
          <th className="py-2 px-4 border-b border-gray-200">Details</th>
          <th className="py-2 px-4 border-b border-gray-200">Date</th>
          <th className="py-2 px-4 border-b border-gray-200"> Actions</th>

        </tr>
      </thead>
      <tbody>
        {Array.isArray(users) && users.map((user) => (
          <tr key={user._id}>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{user.Name}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{user.phone}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{user.email}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{user.enquiry}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{user.details}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center">{new Date(user.createdAt).toLocaleString()}</td>
            <td className="py-2 px-4 border-b border-gray-200 text-center"><button onClick={()=>handeldelete(user._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" >delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Users