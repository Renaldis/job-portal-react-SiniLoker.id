import ListCompany from "../../DataCompany";
import CardJob from "./CardJob";
import { useEffect, useState } from "react";

export default function jobVacanciesSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(ListCompany);
  }, []);
  return (
    <section id="jobVacanciesSection" className="mb-10">
      <h1 className="ml-8 mt-10 text-xl font-semibold text-black">
        Lowongan Kerja Terpopuler
      </h1>
      <div className="card w-[95%] mt-5 mx-auto md:flex md:flex-wrap md:justify-around md:gap-5">
        {data !== null &&
          data.map((res, index) => {
            return <CardJob key={index} res={res} />;
          })}
      </div>
    </section>
  );
}
