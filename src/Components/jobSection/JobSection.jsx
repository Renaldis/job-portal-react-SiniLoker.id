import { useContext, useEffect, useState } from "react";
import { JobContext } from "../../context/JobContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LocMenu from "./LocMenu";

export default function JobSection() {
  const [isActive, setIsActive] = useState(false);
  const {
    handleSubmit,
    handleInputSearchChange,
    inputSearch,
    handleInputFilterChange,
    errorSearching,
  } = useContext(JobContext);

  const handleClickLocMenu = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  // untuk LocMenu
  const [findLoc, setFindLoc] = useState("Semua Lokasi");

  const handleLocationClick = (city) => {
    setFindLoc(city);
    setIsActive(false);
  };

  useEffect(() => {
    handleInputFilterChange(findLoc);
  }, [findLoc]);

  return (
    <section id="hero" className="bg-blue-500 flex flex-row">
      <div className="w-full h-[400px] md:h-full justify-start p-14 gap-8">
        <div className="cardFilter rounded-lg bg-white w-[95%] p-5 text-center">
          <form onSubmit={handleSubmit} className="input-search">
            <div className="flex gap-2 items-center justify-center">
              <input
                type="text"
                placeholder="Masukkan Kata Kunci"
                className="w-[50%] rounded-lg"
                name="input-search"
                value={inputSearch}
                onChange={(e) => handleInputSearchChange(e.target.value)}
              />
              <LocMenu
                handleClick={handleClickLocMenu}
                handleLocationClick={handleLocationClick}
                isActive={isActive}
                findLoc={findLoc}
              />
              <button
                className="group bg-blue-500 hover:bg-blue-800 p-2 rounded-xl"
                type="submit"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  className="text-slate-300 group-hover:text-slate-100"
                />
              </button>
            </div>
          </form>
          <div className="favorit-search mt-5 flex flex-wrap gap-3 items-center justify-center">
            <span className="text-sm">
              <strong>Paling sering dicari : </strong>
            </span>
            <div className="title-favorit text-sm">
              <ul className="flex gap-3">
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
