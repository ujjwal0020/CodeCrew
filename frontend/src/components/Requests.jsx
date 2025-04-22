import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {
      console.error(err);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return null;

  if (requests.length === 0)
    return (
      <h1 className="flex justify-center items-center h-screen text-gray-400 text-xl ">
        No Requests Found
      </h1>
    );

  return (
    <div className="min-h-screen px-4 py-10 bg-base-100">
      <h1 className="text-3xl font-bold text-white text-center mb-8 mt-10">
        Connection Requests
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;

          return (
            <div
              key={_id}
              className="bg-base-300 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 transition hover:shadow-xl"
            >
              <div className="flex items-center gap-4 w-full md:w-auto">
                <img
                  alt="User Avatar"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border border-gray-500"
                  src={photoUrl}
                />
                <div>
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

              <div className="flex gap-3 mt-4 md:mt-0">
                <button
                  className="btn btn-error btn-sm md:btn-md"
                  onClick={() => reviewRequest("rejected", request._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-success btn-sm md:btn-md"
                  onClick={() => reviewRequest("accepted", request._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
