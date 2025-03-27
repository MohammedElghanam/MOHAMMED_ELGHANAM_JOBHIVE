import React from "react";
import useProfile from "../../hooks/useProfile";
import { ProfileProps } from "../../types/userTypes";

export default function ProfileComponent({ userId, initialData }: ProfileProps) {
  const {
    isEditing,
    setIsEditing,
    profileData,
    handleChange,
    handleSave,
    error,
  } = useProfile(userId, initialData);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Profile</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-24">Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          ) : (
            <span className="flex-1">{profileData.name}</span>
          )}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-500 cursor-pointer"
          >
           edit
          </button>
        </div>

        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-24">Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          ) : (
            <span className="flex-1">{profileData.email}</span>
          )}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-500 cursor-pointer"
          >
           edit
          </button>
        </div>

        <div className="flex items-center">
          <label className="block text-sm font-medium text-gray-700 w-24">Role:</label>
          {isEditing ? (
            <input
              type="text"
              name="role"
              value={profileData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          ) : (
            <span className="flex-1">{profileData.role}</span>
          )}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-500 cursor-pointer"
          >
           edit
          </button>
        </div>

        <div className="flex items-center">
  <label className="block text-sm font-medium text-gray-700 w-24">Technologies:</label>
  {isEditing ? (
    <textarea
      name="technologies"
      value={Array.isArray(profileData.technologies) ? profileData.technologies.join(", ") : ""}
      onChange={handleChange}
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm sm:text-sm"
    />
  ) : (
    <span className="flex-1">
      {Array.isArray(profileData.technologies) && profileData.technologies.length > 0
        ? profileData.technologies.join(", ")
        : "No technologies available"
      }
    </span>
  )}
  <button
    onClick={() => setIsEditing(!isEditing)}
    className="text-blue-500 cursor-pointer"
  >
    edit
  </button>
</div>


        {isEditing && (
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={handleSave}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
