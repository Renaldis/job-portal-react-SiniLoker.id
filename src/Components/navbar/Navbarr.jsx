"use client";

import { Button, Navbar } from "flowbite-react";
import { useLocation } from "react-router-dom";
import LogoSiniLoker from "../../assets/siniLoker2.png";

export default function Navbarr({ ...props }) {
  const location = useLocation();

  return (
    <Navbar fluid rounded {...props}>
      <Navbar.Brand href="/">
        <img
          src={LogoSiniLoker}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-bold text-sky-600 dark:text-white">
          SiniLoker.id
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-blue-500">Registrasi / Masuk</Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link
          href="/"
          className={`text-base ${
            location.pathname === "/" ? "text-blue-600 font-bold" : ""
          }`}
        >
          <span>Beranda</span>
        </Navbar.Link>
        <Navbar.Link
          href="/job-vacancies"
          className={`text-base ${
            location.pathname === "/job-vacancies"
              ? "text-blue-600 font-bold"
              : ""
          }`}
        >
          <span>Lowongan Kerja</span>
        </Navbar.Link>
        <Navbar.Link
          href="/tentang-kami"
          className={`text-base ${
            location.pathname === "/tentang-kami"
              ? "text-blue-600 font-bold"
              : ""
          }`}
        >
          <span>Tentang Kami</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
