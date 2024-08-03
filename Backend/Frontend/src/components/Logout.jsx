import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  function handleLogout() {
    try {
      localStorage.removeItem("user");
      setAuthUser(localStorage.setItem("user", null));
      toast.success("Logout Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
