"use client";

import { Pagination } from "flowbite-react";
import { useState } from "react";
import { JobContext } from "../context/JobContext";
import { useContext } from "react";

export default function Paginations() {
  // const {filteredData} =
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}