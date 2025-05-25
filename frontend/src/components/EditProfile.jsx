
import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Footer from "./Footer";  // Import footer

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response?.data || "Something went wrong.");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 my-10 px-4 max-w-6xl mx-auto">
        {/* Edit Form */}
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-black mb-8">
            Edit Profile
          </h2>

          <div className="space-y-6">
            {/* ... your input fields here (unchanged) */}
            {/* First Name */}
            <div>
              <label className="block mb-1 text-gray-800 font-medium">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-white"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block mb-1 text-gray-800 font-medium">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-white"
              />
            </div>
            {/* Photo URL */}
            <div>
              <label className="block mb-1 text-gray-800 font-medium">
                Photo URL
              </label>
              <input
                type="text"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-white"
              />
            </div>
            {/* Age */}
            <div>
              <label className="block mb-1 text-gray-800 font-medium">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-white"
              />
            </div>
            {/* Gender */}
            <div>
              <label className="block mb-1 text-gray-800 font-medium">Gender</label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-white"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option disabled value="">
                  Select gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            {/* About */}
            <div>
              <label className="block mb-1 text-gray-800 font-medium">About</label>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black bg-white"
                rows={3}
              />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition"
              onClick={saveProfile}
            >
              Save Profile
            </button>
          </div>
        </div>

        {/* Preview Card */}
        <div className="w-full max-w-sm">
          <UserCard
            user={{ firstName, lastName, photoUrl, age, gender, about }}
          />
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-100 text-green-800 px-6 py-3 rounded shadow-lg font-medium">
            Profile saved successfully.
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </>
  );
};

export default EditProfile;
