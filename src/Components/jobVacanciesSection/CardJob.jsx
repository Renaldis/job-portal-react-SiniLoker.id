import CardJobType from "./CardJobType";

export default function CardJob({ res }) {
  function formatSalaryRange(salary_min, salary_max) {
    const minInJuta = (salary_min / 1000000).toFixed(0);
    const maxInJuta = (salary_max / 1000000).toFixed(0);

    return `Rp ${minInJuta} - ${maxInJuta} Juta`;
  }
  return (
    <div className="cardJobVacancies mb-5 p-5 md:mb-0 md:min-w-[48%] lg:min-w-[32%] border border-slate-300 rounded-lg group hover:bg-sky-100 hover:border-sky-300 cursor-pointer transition-all duration-200">
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
  );
}
