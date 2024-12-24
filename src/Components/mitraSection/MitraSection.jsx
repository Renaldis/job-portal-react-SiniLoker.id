import { useEffect, useState } from "react";
import dataCompany from "../../dataCompany";
import CardMitra from "./CardMitra";

export default function MitraSection() {
  const [dataCompanies, setDataCompanies] = useState(null);
  useEffect(() => {
    setDataCompanies(dataCompany);
  }, []);
  return (
    <section id="mitraSection" className="bg-white pb-10">
      <h1 className="text-xl font-semibold text-black text-center ml-8 pt-8">
        Dipercaya 100+ Mitra Terpercaya
      </h1>
      <div className="flex flex-wrap w-[80%] mx-auto items-center bg-white gap-5 justify-center">
        {dataCompanies !== null &&
          dataCompanies.map((res, idx) => {
            return <CardMitra key={idx} res={res} />;
          })}
      </div>
      <p className="text-xl font-normal text-black ml-8 p-1 flex justify-center items-center ">
        dan <strong className="px-2">20+</strong> perusahaan lainnya
      </p>
    </section>
  );
}
