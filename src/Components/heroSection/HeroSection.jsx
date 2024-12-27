import { useContext, useEffect, useState } from "react";
import { JobContext } from "../../context/JobContext";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import heroSiniLoker from "../../assets/heroSiniLoker.png";
import LocMenu from "../heroSection/LocMenu";

export default function HeroSection() {
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
    <section id="hero" className="bg-blue-500 flex flex-row pb-20 sm:pb-0">
      <div className="w-full h-[400px] md:h-full md:w-3/4 lg:w-1/2 flex flex-col justify-start mt-16 p-8 gap-8">
        <h1 className="text-2xl font-semibold text-center md:text-start md:text-4xl  text-white">
          Cari Kerja <span className="font-bold">#makin mudah</span> pake
          siniLoker.id
        </h1>
        <div className="cardFilter rounded-lg bg-white w-[95%] p-5 border">
          <form onSubmit={handleSubmit} className="input-search">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Masukkan Kata Kunci"
                className="w-full rounded-lg"
                name="input-search"
                value={inputSearch}
                onChange={(e) => handleInputSearchChange(e.target.value)}
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
            <LocMenu
              handleClick={handleClickLocMenu}
              handleLocationClick={handleLocationClick}
              isActive={isActive}
              findLoc={findLoc}
            />
          </form>
          <div className="favorit-search mt-5 flex flex-wrap gap-3 items-center">
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
          <div className="pt-5 text-center">
            <h1 className="text-red-500 font-normal">
              {errorSearching && "Data Tidak Ditemukan."}
            </h1>
          </div>
        </div>
      </div>
      <div className="md:w-3/6 md:mt-48 lg:w-2/4 lg:mt-32 hidden md:block">
        <img src={heroSiniLoker} alt="SiniLoker-Hero" className="w-full" />
      </div>
    </section>
  );
}
