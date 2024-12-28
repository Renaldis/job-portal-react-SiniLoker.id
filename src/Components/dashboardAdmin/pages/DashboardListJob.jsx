"use client";

import { Table } from "flowbite-react";
import { useContext, useState } from "react";
import { JobContext } from "../../../context/JobContext";

export default function DashboardListJob() {
  const { data } = useContext(JobContext);

  const [isFocusedJobTitle, setIsFocusedJobTitle] = useState(false);
  const [isFocusedLocation, setIsFocusedLocation] = useState(false);
  const [isFocusedSalary, setIsFocusedSalary] = useState(false);

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

  return (
    <section
      id="dashboardListJob"
      className="p-1 md:p-5 flex flex-col flex-wrap md:w-full md:overflow-auto"
    >
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
            />
          </div>
        </div>
      </form>
      <div className="listJobTable overflow-y-scroll overflow-x-scroll h-[250px] sm:h-[300px] md:h-96 flex flex-wrap w-[100%]">
        <Table hoverable className="">
          <Table.Head>
            <Table.HeadCell>Logo</Table.HeadCell>
            <Table.HeadCell>Nama Perusahaan</Table.HeadCell>
            <Table.HeadCell>Job Title</Table.HeadCell>
            <Table.HeadCell>Gaji Minimum</Table.HeadCell>
            <Table.HeadCell>Gaji Maksimum</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>
              <span>Action</span>
            </Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {data && Array.isArray(data) && data.length > 0 ? (
              data.map((res, idx) => (
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
                      <i className="fas fa-edit text-cyan-600 dark:text-cyan-500 hover:text-cyan-800 cursor-pointer"></i>
                      <i className="fas fa-trash text-red-600 hover:text-red-800 cursor-pointer"></i>
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
