import { useState, useEffect } from "react";

import JobSection from "../Components/jobSection/JobSection.jsx";
import JobVacanciesSection from "../Components/jobVacanciesSection/JobVacanciesSection";
import { JobContext } from "../context/JobContext.jsx";

// DATA
import ListCompany from "../dataCompany.js";

const JobVacancies = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [findLocs, setFindLocs] = useState("");
  const [errorSearching, setErrorSearching] = useState(false);

  useEffect(() => {
    setData(ListCompany);
    setFilteredData(ListCompany); // Set initial data to filteredData
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputSearch.trim() === "") {
      setFilteredData(data);
      setErrorSearching(false);
    } else {
      const filteredDatas = data.filter((item) => {
        const searchQuery = inputSearch.toLowerCase();
        const filterQuery = findLocs.toLowerCase();

        const isMatchingSearch =
          item.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
          item.job_type.toLowerCase().includes(inputSearch.toLowerCase()) ||
          item.job_tenure.toLowerCase().includes(inputSearch.toLowerCase()) ||
          item.company_name.toLowerCase().includes(inputSearch.toLowerCase());

        // mengecek apakah search query cocok sama job status (open / closed)
        const isMatchingJobStatus =
          (searchQuery === "open" && item.job_status === 1) ||
          (searchQuery === "closed" && item.job_status === 0);

        const isMatchingLocation =
          filterQuery === "semua lokasi" || // Jika lokasi default, abaikan filter lokasi
          item.company_city.toLowerCase() === filterQuery;

        return (isMatchingSearch || isMatchingJobStatus) && isMatchingLocation;
      });

      if (filteredDatas.length === 0) {
        setErrorSearching(true);
      } else {
        setFilteredData(filteredDatas);
        setErrorSearching(false);
      }
    }
    setInputSearch("");
  };

  const handleInputSearchChange = (value) => {
    setInputSearch(value);
  };
  const handleInputFilterChange = (value) => {
    setFindLocs(value);
  };
  const JbCart = {
    data,
    filteredData: filteredData,
    handleSubmit: handleSubmit,
    handleInputSearchChange: handleInputSearchChange,
    inputSearch,
    handleInputFilterChange,
    errorSearching,
  };

  return (
    <JobContext.Provider value={JbCart}>
      <main>
        <JobSection />
        <JobVacanciesSection />
      </main>
    </JobContext.Provider>
  );
};

export default JobVacancies;
