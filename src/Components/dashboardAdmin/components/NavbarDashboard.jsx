"use client";

import { Navbar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function NavbarDashboard({ pageName, ...props }) {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState("");
  const [isActiveProfile, setIsActiveProfile] = useState(false);

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      if (Cookies.get("userName") !== undefined) {
        setUsername(Cookies.get("userName"));
        setProfile(Cookies.get("profileImg"));
      }
    }
  }, [username, setUsername]);

  const handleClick = () => {
    setIsActiveProfile(!isActiveProfile);
  };
  const handleExit = () => {
    Swal.fire({
      title: "Do you want to exit?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove("token");
        Cookies.remove("userName");
        Cookies.remove("profileImg");
        Cookies.remove("email");
        navigate("/login");
      } else if (result.isDenied) {
        Swal.fire("Action cancelled", "", "info");
      }
    });
  };
  return (
    <Navbar fluid rounded {...props}>
      <Navbar.Brand>
        <span className="md:text-base lg:text-xl font-semibold text-slate-700 shadow-sm border border-slate-800 p-2 rounded-lg text-sm">
          {pageName}
        </span>
      </Navbar.Brand>
      {Cookies.get("token") !== undefined && (
        <div
          className={`flex md:order-2 items-center cursor-pointer ${
            isActiveProfile ? "border border-red-200" : ""
          } `}
          onClick={handleClick}
        >
          <span className="md:block">{username}</span>
          <img
            src={profile}
            alt={`profile-${username}`}
            className="w-14 md:block"
          />

          {isActiveProfile && (
            <div
              className={`absolute bg-white top-14 right-0 lg:right-3 w-40 text-center lg:flex lg:flex-col border border-slate-100 rounded-md shadow-sm${
                location.pathname == "/dashboard/list-job-vacancy" &&
                "w-96 right-1 z-50"
              }`}
            >
              <div
                className={`hover:text-blue-600 hover:bg-slate-200 lg:hidden ${
                  location.pathname !== "/dashboard/list-job-vacancy" &&
                  "hidden"
                }`}
                onClick={() => navigate("/dashboard")}
              >
                <span>Dashboard</span>
              </div>
              <hr />
              <div>
                <span
                  className="hover:text-blue-600"
                  onClick={() => navigate("/dashboard/profile")}
                >
                  Profile
                </span>
              </div>

              <hr />
              <span
                className="hover:text-blue-600 text-red-700"
                onClick={handleExit}
              >
                Keluar
              </span>
            </div>
          )}
        </div>
      )}
    </Navbar>
  );
}
