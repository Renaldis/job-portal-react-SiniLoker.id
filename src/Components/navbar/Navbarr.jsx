"use client";

import { Button, Navbar } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoSiniLoker from "../../assets/siniLoker2.png";

export default function Navbarr({ ...props }) {
  const location = useLocation();
  const navigate = useNavigate();

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
      <div className="flex md:order-2">
        <Button className="bg-blue-500">Registrasi / Masuk</Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link>
          <span
            onClick={() => navigate("/")}
            className={`cursor-pointer text-base ${
              location.pathname === "/" ? "text-blue-600 font-bold" : ""
            }`}
          >
            Beranda
          </span>
        </Navbar.Link>
        <Navbar.Link>
          <span
            onClick={() => navigate("/job-vacancies")}
            className={`cursor-pointer text-base ${
              location.pathname === "/job-vacancies"
                ? "text-blue-600 font-bold"
                : ""
            }`}
          >
            Lowongan Kerja
          </span>
        </Navbar.Link>
        <Navbar.Link>
          <span
            onClick={() => navigate("/about")}
            className={`cursor-pointer text-base ${
              location.pathname === "/about" ? "text-blue-600 font-bold" : ""
            }`}
          >
            Tentang Kami
          </span>
        </Navbar.Link>
        <Navbar.Link>
          <span
            onClick={() => navigate("/pagination")}
            className={`cursor-pointer text-base ${
              location.pathname === "/pagination"
                ? "text-blue-600 font-bold"
                : ""
            }`}
          >
            Pagination
          </span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
