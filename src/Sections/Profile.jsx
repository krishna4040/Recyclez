import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';

function Profile() {

    const [isEditing, setIsEditing] = useState(false);
    const [user,setUser] = useState({});

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const {token} = useSelector(state => state.user);

    const fecthUser = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}getUserDetails`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthUser();
    }, []);

    const handleSaveChanges = (updatedUser) => {
        setUser(updatedUser);
        setIsEditing(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <ProfileHeader
                    name={user.userName}
                    role={user.role}
                    isEditing={isEditing}
                    onEditProfile={handleEditProfile}
                />
                {isEditing ? (
                    <ProfileForm user={user} onSaveChanges={handleSaveChanges} />
                ) : (
                    <ProfileContact email={user.email} contact={user.contact} />
                )}
            </div>
        </div>
    );
}

function ProfileHeader({ name, role, isEditing, onEditProfile }) {
    return (
        <div className="mb-6">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-sm text-gray-600">Role: {role}</p>
            {!isEditing && (
                <button
                    onClick={onEditProfile}
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600"
                >
                    Edit Profile
                </button>
            )}
        </div>
    );
}

function ProfileForm({ user, onSaveChanges }) {
    const [formData, setFormData] = useState(user);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSaveChanges(formData);
    };

    return (
        <div className="mb-6">
            <h2 className="mb-4 text-xl font-semibold">Edit Profile</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        disabled
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Password:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                    />
                </div>
            </form>
            <button
                onClick={handleSave}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
                Save Changes
            </button>
        </div>
    );
}

function ProfileContact({ email, contact }) {
    return (
        <div className="flex flex-col justify-center gap-3 mb-6">
            <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
            <p className="text-sm font-semibold uppercase">Email: <span className='text-xs text-blue-500'>{email}</span></p>
            <p className="text-sm font-semibold uppercase">Contact: <span className='text-xs text-blue-500'> {contact}</span></p>
        </div>
    );
}

export default Profile;