import { useState, useEffect } from "react";
import { JobContext } from "../context/JobContext.jsx";
import axios from "axios";

export default function GlobalJobProvider(props) {
  const [fetchStatus, setFetchStatus] = useState(true);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [findLocs, setFindLocs] = useState("semua lokasi");
  const [findVacancy, setFindVacancy] = useState("semua perusahaan");
  const [errorSearching, setErrorSearching] = useState(false);

  const [findTitleAtDashboard, setFindTitleAtDashboard] = useState("");
  const [findLocAtDashboard, setFindLocAtDashboard] = useState("");
  const [findMinSalaryAtDashboard, setFindMinSalaryAtDashboard] = useState("");
  const handleFindTitleAtDashboard = (value) => {
    setFindTitleAtDashboard(value);
  };
  const handleFindLocAtDashboard = (value) => {
    setFindLocAtDashboard(value);
  };
  const handlefindMinSalaryAtDashboard = (value) => {
    setFindMinSalaryAtDashboard(value);
  };

  const filterData = data.filter((item) => {
    const searchTitleQuery = findTitleAtDashboard.toLowerCase();
    const searchLocQuery = findLocAtDashboard.toLowerCase();
    const searchMinSalaryQuery = parseInt(findMinSalaryAtDashboard);

    const isMatchingTitle =
      searchTitleQuery === "" ||
      item.title.toLowerCase().includes(searchTitleQuery);
    const isMatchingLoc =
      searchLocQuery === "" ||
      item.company_city.toLowerCase().includes(searchLocQuery);
    const isMatchingMinSalary =
      isNaN(searchMinSalaryQuery) ||
      parseInt(item.salary_min) >= searchMinSalaryQuery;

    return isMatchingTitle && isMatchingLoc && isMatchingMinSalary;
  });

  useEffect(() => {
    setFilteredData(filterData);
  }, [findTitleAtDashboard, findLocAtDashboard, findMinSalaryAtDashboard]);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://final-project-api-alpha.vercel.app/api/jobs")
        .then((res) => {
          const data = res.data;
          setData(data);
          setFilteredData(data);
        })
        .catch((err) => {
          console.log(err);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const newFetchStatus = () => {
    setFetchStatus(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorSearching(false);

    const filteredDatas = data.filter((item) => {
      const searchQuery = inputSearch.toLowerCase();
      const filterQuery = findLocs.toLowerCase();
      const filterVacancyQuery = findVacancy.toLowerCase();

      const isMatchingSearch =
        searchQuery !== "" &&
        (item.title.toLowerCase().includes(searchQuery) ||
          item.job_type.toLowerCase().includes(searchQuery) ||
          item.job_tenure.toLowerCase().includes(searchQuery) ||
          item.company_name.toLowerCase().includes(searchQuery));

      // mengecek apakah search query cocok sama job status (open / closed)
      const isMatchingJobStatus =
        (searchQuery === "open" && item.job_status === 1) ||
        (searchQuery === "closed" && item.job_status === 0);

      const isMatchingLocation =
        filterQuery !== "" &&
        (filterQuery === "semua lokasi" ||
          item.company_city.toLowerCase() === filterQuery);

      const isMatchingVacancy =
        filterVacancyQuery !== "" &&
        (filterVacancyQuery === "semua perusahaan" ||
          item.company_name.toLowerCase() === filterVacancyQuery);

      // Implementasi kondisi logika
      if (
        (isMatchingSearch || isMatchingJobStatus) &&
        filterQuery === "semua lokasi" &&
        filterVacancyQuery === "semua perusahaan"
      ) {
        return isMatchingSearch || isMatchingJobStatus;
      }

      if (
        (isMatchingSearch || isMatchingJobStatus) &&
        isMatchingLocation &&
        filterVacancyQuery === "semua perusahaan"
      ) {
        return (isMatchingSearch || isMatchingJobStatus) && isMatchingLocation;
      }

      if (
        isMatchingLocation &&
        searchQuery === "" &&
        filterVacancyQuery === "semua perusahaan"
      ) {
        return isMatchingLocation;
      }

      if (
        (isMatchingSearch || isMatchingJobStatus) &&
        isMatchingLocation &&
        isMatchingVacancy
      ) {
        return (
          (isMatchingSearch || isMatchingJobStatus) &&
          isMatchingLocation &&
          isMatchingVacancy
        );
      }
      if (searchQuery === "" && isMatchingVacancy && isMatchingLocation) {
        return isMatchingVacancy && isMatchingLocation;
      }
      if (
        isMatchingVacancy &&
        searchQuery === "" &&
        filterQuery === "semua lokasi"
      ) {
        return isMatchingVacancy;
      }

      return false;
    });

    if (filteredDatas.length === 0) {
      setErrorSearching(true);
    } else {
      setFilteredData(filteredDatas);
      setErrorSearching(false);
    }

    setInputSearch("");
  };

  const handleInputSearchChange = (value) => {
    setInputSearch(value);
  };
  const handleInputLocFilterChange = (value) => {
    setFindLocs(value);
  };
  const handleInputVacancyFilterChange = (value) => {
    setFindVacancy(value);
  };

  function formatSalaryRange(salary_min, salary_max) {
    const formatSalary = (salary) => {
      if (salary >= 1000000) {
        return `${(salary / 1000000).toFixed(1)} juta`;
      } else if (salary >= 1000) {
        return `${(salary / 1000).toFixed(0)} ribu`;
      } else {
        return salary;
      }
    };

    // Menggunakan formatSalary untuk salary_min dan salary_max
    const minSalary = formatSalary(salary_min);
    const maxSalary = formatSalary(salary_max);

    return `Rp ${minSalary} - ${maxSalary}`;
  }
  function timeElapsed(createdAt) {
    const now = new Date();
    const createdTime = new Date(createdAt);
    const elapsedMs = now - createdTime;

    const seconds = Math.floor(elapsedMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return `${years} tahun yang lalu`;
    } else if (months > 0) {
      return `${months} bulan yang lalu`;
    } else if (days > 0) {
      return `${days} hari yang lalu`;
    } else if (hours > 0) {
      return `${hours} jam yang lalu`;
    } else if (minutes > 0) {
      return `${minutes} menit yang lalu`;
    } else {
      return `Baru saja`;
    }
  }

  const JbCart = {
    data,
    filteredData: filteredData,
    handleSubmit: handleSubmit,
    handleInputSearchChange: handleInputSearchChange,
    inputSearch,
    handleInputLocFilterChange,
    handleInputVacancyFilterChange,
    errorSearching,
    formatSalaryRange,
    findLocs,
    timeElapsed,
    newFetchStatus,
    handleFindTitleAtDashboard,
    handleFindLocAtDashboard,
    handlefindMinSalaryAtDashboard,
  };
  return (
    <JobContext.Provider value={JbCart}>{props.children}</JobContext.Provider>
  );
}
