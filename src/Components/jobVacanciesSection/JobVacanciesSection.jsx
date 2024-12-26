import CardJob from "./CardJob";
import { useContext, useState } from "react";
import { JobContext } from "../../context/JobContext";
import { Link } from "react-router-dom";

export default function JobVacanciesSection() {
  const { filteredData } = useContext(JobContext);

  if (!filteredData || filteredData.length === 0) {
    // Cek jika data tersedia dan bukan null
    return (
      <section id="jobVacanciesSection" className="mb-10">
        <h1 className="ml-8 mt-10 text-xl font-semibold text-black">
          Lowongan Kerja Terpopuler
        </h1>
        <div className="text-center mt-5">Tidak ada lowongan tersedia</div>
      </section>
    );
  }

  return (
    <section id="jobVacanciesSection" className="mb-10">
      <h1 className="ml-8 mt-10 text-xl font-semibold text-black">
        Lowongan Kerja Terpopuler
      </h1>
      <div className="card w-[95%] mt-5 mx-auto md:flex md:flex-wrap md:justify-around md:gap-5">
        {filteredData.map((res, index) => (
          <CardJob key={index} res={res} />
        ))}
      </div>
      <div className="flex items-center gap-5 justify-center ml-8 mt-3 text-lg font-normal text-blue-500 hover:text-blue-800 transition-all duration-200">
        <Link to="/job-vacancies">
          Lihat Lowongan Lain nya <i className="fas fa-arrow-right" />
        </Link>
      </div>
    </section>
  );
}
