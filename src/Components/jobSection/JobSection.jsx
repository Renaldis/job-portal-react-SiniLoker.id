import { useContext, useEffect, useState } from "react";
import { JobContext } from "../../context/JobContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LocMenu from "./LocMenu";
import VacancyMenu from "./VacancyMenu";

export default function JobSection() {
  const [isActive, setIsActive] = useState(false);
  const [isActiveVacancyMenu, setIsActiveVacancyMenu] = useState(false);
  const {
    handleSubmit,
    handleInputSearchChange,
    inputSearch,
    handleInputLocFilterChange,
    handleInputVacancyFilterChange,
    errorSearching,
  } = useContext(JobContext);

  const handleClickLocMenu = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };
  const handleClickVacancyMenu = (e) => {
    e.preventDefault();
    setIsActiveVacancyMenu(!isActiveVacancyMenu);
  };

  // untuk LocMenu
  const [findLoc, setFindLoc] = useState("Semua Lokasi");

  const handleLocationClick = (city) => {
    setFindLoc(city);
    setIsActive(false);
  };

  useEffect(() => {
    handleInputLocFilterChange(findLoc);
  }, [findLoc]);

  // untuk VacancyMenu
  const [findVacancy, setFindVacancy] = useState("Semua Perusahaan");

  const handleVacancyClick = (vacancy) => {
    setFindVacancy(vacancy);
    setIsActiveVacancyMenu(false);
  };

  useEffect(() => {
    handleInputVacancyFilterChange(findVacancy);
  }, [findVacancy]);

  return (
    <section id="hero" className="bg-blue-500">
      <div className="w-full h-[100%] md:h-full justify-start p-14 gap-8">
        <div className="cardFilter rounded-lg bg-white w-[100%] p-5 text-center">
          <form onSubmit={handleSubmit} className="input-search">
            <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
              <input
                type="text"
                placeholder="Masukkan Kata Kunci berdasarkan nama pekerjaan"
                className="w-[100%] sm:w-[50%] rounded-lg"
                name="input-search"
                value={inputSearch}
                onChange={(e) => handleInputSearchChange(e.target.value)}
              />
              <VacancyMenu
                handleClickVacancyMenu={handleClickVacancyMenu}
                handleVacancyClick={handleVacancyClick}
                isActiveVacancyMenu={isActiveVacancyMenu}
                findVacancy={findVacancy}
              />
              <LocMenu
                handleClick={handleClickLocMenu}
                handleLocationClick={handleLocationClick}
                isActive={isActive}
                findLoc={findLoc}
              />
              <button
                className="group flex w-full sm:w-[50%] md:w-[50px] justify-center gap-2 bg-blue-500 hover:bg-blue-800 p-2 rounded-xl text-slate-100"
                type="submit"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  className="text-slate-100 group-hover:text-slate-100"
                />
                <span className="md:hidden">Cari</span>
              </button>
            </div>
          </form>
          <div className="favorit-search mt-5 sm:flex flex-wrap gap-3 items-center justify-center hidden">
            <span className="text-sm">
              <strong>Paling sering dicari : </strong>
            </span>
            <div className="title-favorit text-sm">
              <ul className="flex flex-col sm:flex-row gap-3">
                <li>
                  <a href="#" className="border-b border-black p-0">
                    Frontend Developer
                  </a>
                </li>
                <li>
                  <a href="#" className="border-b border-black p-0">
                    Full Stack Developer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-5">
            <h1 className="text-red-500 font-normal">
              {errorSearching && "Data Tidak Ditemukan."}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
