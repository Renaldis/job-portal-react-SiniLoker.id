import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import VacancyDropDown from "./VacancyDropDown";

export default function VacancyMenu({
  handleClickVacancyMenu,
  isActiveVacancyMenu,
  handleVacancyClick,
  findVacancy,
}) {
  const { data } = useContext(JobContext);

  // Pastikan data ada sebelum memproses
  const uniqueCities = Array.from(
    new Set(data?.map((item) => item.company_name) || [])
  );

  // Tentukan icon dropdown berdasarkan status aktif
  const IClasses = isActiveVacancyMenu
    ? "fas fa-chevron-up ml-2"
    : "fas fa-chevron-down ml-2";

  return (
    <>
      <div className="border rounded-lg w-[100%] sm:w-[50%] md:w-[30%] py-2 border-slate-500">
        <button
          className=""
          onClick={handleClickVacancyMenu}
          aria-haspopup="true"
          aria-expanded={isActiveVacancyMenu}
        >
          <i className="fas fa-map-marker-alt mr-2 text-slate-950"></i>
          <span>
            {findVacancy.length > 15
              ? findVacancy.slice(0, 15) + "..."
              : findVacancy}
          </span>
          <i className={IClasses}></i>
        </button>
        {isActiveVacancyMenu && (
          <div
            className="absolute bg-white border shadow-sm w-[30%] md:w-[20%] max-h-60 overflow-y-auto mt-1"
            role="menu"
          >
            <div
              className="border-b p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleVacancyClick("Semua Perusahaan")}
            >
              Semua Perusahaan
            </div>
            {uniqueCities.map((vacancy, idx) => (
              <VacancyDropDown
                key={idx}
                vacancy={vacancy}
                onClick={() => handleVacancyClick(vacancy)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
