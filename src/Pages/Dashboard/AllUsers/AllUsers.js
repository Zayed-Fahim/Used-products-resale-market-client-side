import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { TiDelete } from "react-icons/ti";

const AllUsers = () => {
  //USE REACT QUERY
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });
  const handleAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Admin added successfully");
          refetch();
        }
      });
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mt-3">All Users: {users.length}</h1>
      <div className="overflow-x-auto lg:mt-10">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              <th>Delete User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="text-center">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user?.role !== "Admin" && (
                    <button
                      onClick={() => handleAdmin(user._id)}
                      className="btn btn-sm btn-primary text-white"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDelete(user._id)}>
                    <TiDelete className="text-red-600 w-12 h-12"></TiDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
