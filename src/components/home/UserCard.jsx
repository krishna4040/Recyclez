import React from "react";

const UserCard = ({ username, contact, email }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Client Name: {username}</h2>
        <p className="text-black">Contact: {contact}</p>
        <p className="font-semibold">
          Email: <span className="text-blue-400">{email}</span>
        </p>
      </div>
    </>
  );
};

export default UserCard;
