import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import heroSiniLoker from "../../assets/heroSiniLoker.png";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-blue-500 flex flex-row">
      <div className="w-full h-[400px] md:h-full md:w-3/4 lg:w-1/2 flex flex-col justify-start mt-16 p-8 gap-8">
        <h1 className="text-2xl font-semibold text-center md:text-start md:text-4xl  text-white">
          Cari Kerja <span className="font-bold">#makin mudah</span> pake
          siniLoker.id
        </h1>
        <div className="cardFilter rounded-lg bg-white w-[95%] p-5 border">
          <div className="input-search flex gap-2">
            <input
              type="text"
              placeholder="Masukkan Kata Kunci"
              className="w-full rounded-lg"
            />
            <button className="bg-blue-500 p-2 rounded-xl">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="lg"
                color="white"
              />
            </button>
          </div>
          <button className="w-[50%] flex items-center border border-slate-500 mt-3 text-slate-500 rounded-lg px-4 py-2 justify-between">
            <div>
              <i className="fas fa-map-marker-alt mr-2 text-slate-950"></i>
              <span>Cari lokasi</span>
            </div>
            <i className="fas fa-chevron-down ml-2"></i>
          </button>
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
        </div>
      </div>
      <div className="md:w-3/6 md:mt-48 lg:w-2/4 lg:mt-32 hidden md:block">
        <img src={heroSiniLoker} alt="SiniLoker-Hero" className="w-full" />
      </div>
    </section>
  );
}
