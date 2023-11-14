// components/UserProfileInfo.js
import React from 'react';

const UserProfileInfo = ({ user }) => {
  return (
    <div className="user-profile-info">
      <div className="user-details">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
        {/* Tambahkan detail pengguna lainnya sesuai kebutuhan */}
      </div>
    </div>
  );
};

export default UserProfileInfo;
