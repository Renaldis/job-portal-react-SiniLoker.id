"use client";

import { Button, Navbar } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoSiniLoker from "../../assets/siniLoker2.png";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import Swal from "sweetalert2";

export default function Navbarr({ ...props }) {
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
      {Cookies.get("token") == undefined && (
        <div className="flex md:order-2">
          <Button
            className="bg-blue-500 px-3"
            onClick={() => {
              navigate("/login");
            }}
          >
            Masuk
          </Button>
          <Navbar.Toggle />
        </div>
      )}
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
          {/* <span className="hidden md:block ml-2 text-white font-semibold bg-blue-600 hover:bg-blue-800 cursor-pointer px-6 py-1 rounded-full">
            Keluar
          </span> */}
          <Navbar.Toggle />
          {isActiveProfile && (
            <div className="absolute bg-white top-14 md:right-3 md:w-40 text-center hidden md:flex md:flex-col border border-slate-100 rounded-md shadow-sm">
              <span
                className="hover:text-blue-600"
                onClick={() => navigate("/dashboard")}
              >
                dashboard
              </span>
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

      <Navbar.Collapse>
        <Navbar.Link
          onClick={() => navigate("/")}
          className={`cursor-pointer text-base ${
            location.pathname === "/" ? "text-blue-600 font-bold" : ""
          }`}
        >
          Beranda
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/job-vacancies")}
          className={`cursor-pointer text-base ${
            location.pathname === "/job-vacancies"
              ? "text-blue-600 font-bold"
              : ""
          }`}
        >
          Lowongan Kerja
        </Navbar.Link>
        <Navbar.Link
          onClick={() => navigate("/about")}
          className={`cursor-pointer text-base ${
            location.pathname === "/about" ? "text-blue-600 font-bold" : ""
          }`}
        >
          Tentang Kami
        </Navbar.Link>
        <Navbar.Link>
          {Cookies.get("token") !== undefined && (
            <div className="flex md:order-2" onClick={handleExit}>
              <span className="block md:hidden text-red-500">Keluar</span>
            </div>
          )}
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
