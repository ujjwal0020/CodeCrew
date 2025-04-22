import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Sidebar from "./Sidebar";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const getFeed = async () => {
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.error("Feed fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFeed(); // Always fetch feed when component mounts
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-100">
        <p className="text-white text-lg">Loading feed...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-base-100">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        

        {feed?.length === 0 ? (
          <div className="flex justify-center items-center h-60">
            <h2 className="text-gray-400 text-lg">No new users found!</h2>
          </div>
        ) : (
          <div className="flex justify-center">
            <UserCard user={feed[0]} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
