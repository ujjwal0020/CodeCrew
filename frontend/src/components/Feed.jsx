
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleNext = () => {
    if (currentIndex < feed.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto mb-4" />
          <p className="text-black text-lg">Loading feed...</p>
        </div>
      </div>
    );
  }

  return (
    // Flex column with min height full screen
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main content container grows */}
      <div className="flex flex-1 w-full">
        {/* Sidebar hidden on small screens */}
        <aside className="hidden md:flex bg-transparent">
          <Sidebar />
        </aside>

        {/* Main content area flex-grow */}
        <main className="flex-1 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 w-full">
          {feed?.length === 0 ? (
            <div className="flex flex-1 justify-center items-center h-full w-full">
              <h2 className="text-gray-500 text-xl">No new users found!</h2>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center w-full max-w-screen-sm px-4 sm:px-6">
              {/* UserCard container is full width */}
              <div className="w-full">
                <UserCard user={feed[currentIndex]} />
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= feed.length - 1}
                  className={`px-6 py-2 rounded-full text-white transition ${
                    currentIndex >= feed.length - 1
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  Next
                </button>
              </div>

              <p className="text-gray-600 mt-4 text-sm">
                {currentIndex + 1} of {feed.length}
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Sticky footer stays visible and never overlaps content */}
      <Footer />
    </div>
  );
};

export default Feed;