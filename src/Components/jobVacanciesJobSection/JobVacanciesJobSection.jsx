"use client";

import { Pagination } from "flowbite-react";
import { useState, useEffect } from "react";
import CardJobType from "./CardJobType";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";

export default function JobVacanciesJobSection() {
  const { filteredData } = useContext(JobContext);
  console.log(filteredData);
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Reset halaman saat `filteredData` berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredData]);

  // Cek jika data tersedia dan bukan null
  if (!filteredData || filteredData.length === 0) {
    return (
      <section id="jobVacanciesSection" className="mb-10">
        <h1 className="ml-8 mt-10 text-xl font-semibold text-black">
          Lowongan Kerja Terpopuler
        </h1>
        <div className="text-center mt-5">Tidak ada lowongan tersedia</div>
      </section>
    );
  }

  // Menghitung total halaman
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Mengambil data untuk halaman saat ini
  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const onPageChange = (page) => setCurrentPage(page);

  function formatSalaryRange(salary_min, salary_max) {
    const minInJuta = (salary_min / 1000000).toFixed(0);
    const maxInJuta = (salary_max / 1000000).toFixed(0);

    return `Rp ${minInJuta} - ${maxInJuta} Juta`;
  }
  return (
    <section id="jobVacanciesSection" className="mb-10">
      <div className="p-4">
        <div className="flex flex-wrap gap-5 justify-center">
          {currentItems.map((res, idx) => (
            <div
              key={idx}
              className="cardJobVacancies mb-5 p-5 md:mb-0 md:w-[48%] lg:w-[32%] border border-slate-300 rounded-lg group hover:bg-sky-100 hover:border-sky-300 cursor-pointer transition-all duration-200"
            >
              <div className="header flex flex-wrap">
                <div className="header-image rounded-full w-20 h-20 bg-white shadow-md">
                  <img
                    src={res.company_image_url}
                    alt={res.company_name}
                    className="w-20 h-20 rounded-full object-fill"
                  />
                </div>
                <div className="header-title ml-4">
                  <h1 className="text-blue-700">{res.company_name}</h1>
                  <h2 className="font-semibold">{res.title}</h2>
                  <div className="text-slate-500">
                    <i className="fas fa-map-marker-alt" />
                    <span> {res.company_city}</span>
                  </div>
                </div>
              </div>
              <div className="job w-[100%] mx-auto">
                <CardJobType res={res} />
              </div>
              <div className="cardFooter mt-10">
                <hr className="border-[1px] border-slate-200 group-hover:border-sky-300 transition-all duration-200" />
                <div className="mt-2 flex justify-between items-center">
                  <div>
                    <i className="fas fa-money-bill-wave text-slate-600 group-hover:text-sky-500 transition-all duration-100" />
                    <span className="ml-3 group-hover:text-sky-400 transition-all duration-100">
                      {formatSalaryRange(res.salary_min, res.salary_max)}
                    </span>
                  </div>
                  <a
                    href="#"
                    className="px-4 py-2 bg-blue-500 rounded-lg text-sm text-slate-50 hover:bg-blue-800 transition-all duration-200"
                  >
                    Lihat Detail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </section>
  );
}
