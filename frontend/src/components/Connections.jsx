import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/conectionSlice";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

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
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return null;

  if (connections.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white text-2xl font-semibold">
        No Connections Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 px-4 py-10">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        Your Connections
      </h1>

      <div className="space-y-6 max-w-4xl mx-auto">
        {connections.map((connection) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;

          return (
            <div
              key={_id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-base-300 p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  alt="Profile"
                  src={photoUrl}
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-white">
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

              <Link to={`/chat/${_id}`} className="self-end sm:self-center">
                <button className="btn btn-primary">Chat</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
