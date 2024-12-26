"use client";

import { Button, Navbar } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoSiniLoker from "../../../assets/siniLoker2.png";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function NavbarDashboard({ ...props }) {
  const location = useLocation();
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
  return (
    <Navbar fluid rounded {...props}>
      <Navbar.Brand>
        <div
          onClick={() => navigate("/")}
          className="flex items-center cursor-pointer"
        >
          <img
            src={LogoSiniLoker}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-bold text-sky-600 dark:text-white">
            SiniLoker.id
          </span>
        </div>
      </Navbar.Brand>
      {Cookies.get("token") !== undefined && (
        <div
          className={`flex md:order-2 items-center cursor-pointer ${
            isActiveProfile ? "border border-red-200" : ""
          } `}
          onClick={handleClick}
        >
          <span className="hidden md:block">{username}</span>
          <img
            src={profile}
            alt={`profile-${username}`}
            className="w-20 hidden md:block"
          />

          <Navbar.Toggle />
          {isActiveProfile && (
            <div className="absolute bg-white top-14 md:right-3 md:w-40 text-center hidden md:flex md:flex-col border border-slate-100 rounded-md shadow-sm">
              <span
                className="hover:text-blue-600"
                onClick={() => navigate("/dashboard/profile")}
              >
                profile
              </span>
              <hr />
              <span
                className="hover:text-blue-600 text-red-700"
                onClick={() => {
                  Cookies.remove("token");
                  Cookies.remove("userName");
                  Cookies.remove("profileImg");
                  navigate("/login");
                }}
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
