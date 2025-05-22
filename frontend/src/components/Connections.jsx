import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/conectionSlice";
import Sidebar from "../components/Sidebar"; // ✅ Import the Sidebar

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      // Handle error
      console.error("Error fetching connections:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0)
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex justify-center items-center h-screen">
          <h1 className="text-2xl font-semibold">No Connections Found</h1>
        </div>
      </div>
    );

  return (
    <div className="flex">
      <Sidebar /> {/* ✅ Sidebar added */}
      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Your Connections
        </h1>

        <div className="space-y-4 max-w-3xl mx-auto overflow-auto">
          {connections.map((connection) => {
            const { _id, firstName, lastName, photoUrl, age, gender, about } =
              connection;

            return (
              <div
                key={_id}
                className="flex items-center gap-6 bg-base-200 p-4 rounded-lg shadow-md"
              >
                <img
                  src={photoUrl}
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <h2 className="text-xl font-semibold">
                    {firstName} {lastName}
                  </h2>
                  {age && gender && (
                    <p className="text-sm text-gray-400">
                      {age}, {gender}
                    </p>
                  )}
                  <p className="text-sm text-gray-300">{about}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Connections;
