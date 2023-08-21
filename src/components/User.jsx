import React from "react";

const User = ({ user: { photoURL, displayName } }) => {
  return (
    <div className="flex items-center">
      <img
        className="w-10 h-10 mr-2 rounded-full"
        src={photoURL}
        alt={`${displayName} 프로필 이미지`}
      />
      <span className="hidden md:block">{displayName}</span>
    </div>
  );
};

export default User;
