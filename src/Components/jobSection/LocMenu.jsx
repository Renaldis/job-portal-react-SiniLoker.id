import { useState, useContext } from "react";
import { JobContext } from "../../context/JobContext";
import LocDropDown from "./LocDropDown";

export default function LocMenu({
  handleClick,
  isActive,
  handleLocationClick,
  findLoc,
}) {
  const { data, findLocs } = useContext(JobContext);

  // Pastikan data ada sebelum memproses
  const uniqueCities = Array.from(
    new Set(data?.map((item) => item.company_city) || [])
  );

  // Tentukan icon dropdown berdasarkan status aktif
  const IClasses = isActive
    ? "fas fa-chevron-up ml-2"
    : "fas fa-chevron-down ml-2";

  return (
    <>
      <div className="border rounded-lg w-[100%] sm:w-[50%] md:w-[30%] py-2 border-slate-500">
        <button
          onClick={handleClick}
          aria-haspopup="true"
          aria-expanded={isActive}
        >
          <i className="fas fa-map-marker-alt mr-2 text-slate-950"></i>
          <span>{findLocs}</span>
          <i className={IClasses}></i>
        </button>
        {isActive && (
          <div
            className="absolute bg-white border shadow-sm w-[20%] max-h-60 overflow-y-auto"
            role="menu"
          >
            <div
              className="border-b p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleLocationClick("Semua lokasi")}
            >
              Semua Lokasi
            </div>
            {uniqueCities.map((city, idx) => (
              <LocDropDown
                key={idx}
                city={city}
                onClick={() => handleLocationClick(city)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
