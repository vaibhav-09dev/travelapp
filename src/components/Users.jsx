'use client';

import React from 'react';
import axios from 'axios';

const Users = ({ users = [] }) => {
  const handeldelete = async (id) => {
    try {
      await axios.delete(`https://www.wellcometours.com/api/Delete?id=${id}`).then((res) => {
        alert("Request Deleted Successfully");
        window.location.reload();
        // Update the state to remove the deleted user
        setUsers(users.filter(user => user._id !== id));
      });
    } catch (error) {
      console.log("Error in deleting:", error);
    }
  };

  return (
    <div className="overflow-x-auto mt-36 mb-40 px-4">
      <h1 className="text-center text-3xl md:text-5xl font-bold text-stone-600 mb-8">
        Users Enquiry Requests
      </h1>
      <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">Name</th>
            <th className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">Phone</th>
            <th className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">Email</th>
            <th className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">Enquiry For</th>
            <th className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">Details</th>
            <th className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">Date</th>
            <th className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">{user.Name}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">{user.phone}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">{user.email}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">{user.enquiry}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">{user.details}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">{new Date(user.createdAt).toLocaleString()}</td>
              <td className="py-2 px-4 border-b border-gray-200 text-sm md:text-base text-left">
                <button
                  onClick={() => handeldelete(user._id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs md:text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;