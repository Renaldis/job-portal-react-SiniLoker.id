"use client";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import { Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { JobContext } from "../../../context/JobContext";
import { useNavigate } from "react-router-dom";

export default function DashboardListJob() {
  const navigate = useNavigate();
  const {
    filteredData,
    newFetchStatus,
    handleFindTitleAtDashboard,
    handleFindLocAtDashboard,
    handlefindMinSalaryAtDashboard,
  } = useContext(JobContext);

  const [isFocusedJobTitle, setIsFocusedJobTitle] = useState(false);
  const [isFocusedLocation, setIsFocusedLocation] = useState(false);
  const [isFocusedSalary, setIsFocusedSalary] = useState(false);
  const [input, setInput] = useState({
    title: "",
    loc: "",
    minSalary: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });

    if (name === "title") {
      handleFindTitleAtDashboard(value);
    } else if (name === "loc") {
      handleFindLocAtDashboard(value);
    } else if (name === "minSalary") {
      handlefindMinSalaryAtDashboard(value);
    }
  };

  const handleFocusJobTitle = () => {
    setIsFocusedJobTitle(true);
  };
  const handleBlurJobTitle = (e) => {
    if (e.target.value === "") {
      setIsFocusedJobTitle(false);
    }
  };

  const handleFocusLocation = () => {
    setIsFocusedLocation(true);
  };
  const handleBlurLocation = (e) => {
    if (e.target.value === "") {
      setIsFocusedLocation(false);
    }
  };

  const handleFocusSalary = () => {
    setIsFocusedSalary(true);
  };
  const handleBlurSalary = (e) => {
    if (e.target.value === "") {
      setIsFocusedSalary(false);
    }
  };

  const deleteVacancy = (id) => {
    axios
      .delete(`https://final-project-api-alpha.vercel.app/api/jobs/${id}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        console.log("delete berhasil");
        newFetchStatus();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah anda yakin ingin menghapus?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Ya, Saya Yakin",
      denyButtonText: "Tidak, Batalkan",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        deleteVacancy(id);
        Swal.fire("Data Berhasil Terhapus!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Perubahan dibatalkan", "", "info");
      }
    });
  };
  return (
    <section
      id="dashboardListJob"
      className="p-4 md:p-5 flex flex-wrap overflow-auto h-[100%] pb-20"
    >
      <div>
        <h1 className="text-sm md:text-xl font-bold">List Data Perusahaan</h1>
        <form className="my-3">
          <div className="flex flex-wrap gap-1 sm:gap-5">
            <div className="relative w-24 sm:w-[150px]">
              {isFocusedJobTitle && (
                <span className="w-[115px] text-xs text-slate-200 absolute -top-9 left-0 transition-all bg-slate-950 rounded-lg p-2">
                  Search by job title
                </span>
              )}
              <input
                type="text"
                placeholder="search by job title"
                className="border border-slate-300 rounded-md w-full sm:h-full px-2"
                onFocus={handleFocusJobTitle}
                onBlur={handleBlurJobTitle}
                onChange={handleInput}
                name="title"
                value={input.title}
              />
            </div>
            <div className="relative w-24 sm:w-[150px]">
              {isFocusedLocation && (
                <span className="w-[115px] text-xs text-slate-200 absolute -top-9 left-0 transition-all bg-slate-950 rounded-lg p-2">
                  Filter by location
                </span>
              )}
              <input
                type="text"
                placeholder="filter by location"
                className="border-slate-300 rounded-md w-full sm:h-full px-2"
                onFocus={handleFocusLocation}
                onBlur={handleBlurLocation}
                onChange={handleInput}
                name="loc"
                value={input.loc}
              />
            </div>
            <div className="relative w-24 sm:w-[150px]">
              {isFocusedSalary && (
                <span className="w-[155px] text-xs text-slate-200 absolute -top-9 left-0 transition-all bg-slate-950 rounded-lg p-2">
                  Filter by minimum salary
                </span>
              )}
              <input
                type="text"
                placeholder="filter by minimum salary"
                className="border-slate-300 rounded-md w-full sm:h-full px-2"
                onFocus={handleFocusSalary}
                onBlur={handleBlurSalary}
                onChange={handleInput}
                name="minSalary"
                value={input.minSalary}
              />
            </div>
          </div>
        </form>
      </div>
      <div className="listJobTable overflow-y-scroll overflow-x-scroll h-[100%] md:h-[290px] lg:h-[400px] flex flex-wrap w-[100%]">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="w-20 md:w-40">Logo</Table.HeadCell>
            <Table.HeadCell className="w-24 md:w-48">
              Nama Perusahaan
            </Table.HeadCell>
            <Table.HeadCell className="w-24 md:w-48">
              Nama Pekerjaan
            </Table.HeadCell>
            <Table.HeadCell className="w-20 md:w-32">
              Gaji Minimum
            </Table.HeadCell>
            <Table.HeadCell className="w-20 md:w-32">
              Gaji Maksimum
            </Table.HeadCell>
            <Table.HeadCell className="w-20 md:w-32">Status</Table.HeadCell>
            <Table.HeadCell className="w-20 md:w-32">
              <span>Action</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {filteredData &&
            Array.isArray(filteredData) &&
            filteredData.length > 0 ? (
              filteredData.map((res, idx) => (
                <Table.Row
                  key={idx}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell>
                    <img
                      src={res.company_image_url}
                      alt={res.company_name}
                      className="w-10 h-10 object-cover"
                    />
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {res.company_name}
                  </Table.Cell>
                  <Table.Cell>{res.title}</Table.Cell>
                  <Table.Cell>{res.salary_min}</Table.Cell>
                  <Table.Cell>{res.salary_max}</Table.Cell>
                  <Table.Cell
                    className={
                      res.job_status
                        ? "text-green-500 font-semibold"
                        : "text-red-500 font-semibold"
                    }
                  >
                    {res.job_status ? "Open" : "Closed"}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex flex-col gap-2 items-center">
                      <i
                        className="fas fa-edit text-cyan-600 dark:text-cyan-500 hover:text-cyan-800 cursor-pointer"
                        onClick={() => {
                          navigate(
                            `/dashboard/list-job-vacancy/edit/${res._id}`
                          );
                        }}
                      ></i>
                      <i
                        className="fas fa-trash text-red-600 hover:text-red-800 cursor-pointer"
                        onClick={() => {
                          handleDelete(res._id);
                        }}
                      ></i>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell colSpan="7" className="text-center">
                  Tidak ada data yang tersedia
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
}
