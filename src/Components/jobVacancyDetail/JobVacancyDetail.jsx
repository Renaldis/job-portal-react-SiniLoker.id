import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import { useParams } from "react-router-dom";
import iconLocation from "../../assets/location.png";
import iconFolder from "../../assets/folder.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function JobVacancyDetail() {
  const navigate = useNavigate();
  const { data, formatSalaryRange, timeElapsed } = useContext(JobContext);
  const { id } = useParams();

  const job = data.find((data) => data._id === id);

  if (!job) {
    return <div>Lowongan tidak ditemukan</div>;
  }

  const handleApplyJob = () => {
    Swal.fire({
      title: "Yakin ingin melamar posisi ini?",
      text: "Proses ini tidak dapat dibatalkan setelah Anda mengonfirmasi.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Sangat Yakin!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Lamaran Anda Telah Dikirim!",
          text: "Terima kasih telah melamar, silakan tunggu konfirmasi lebih lanjut dari tim HRD.",
          icon: "success",
        });
        navigate("/");
      }
    });
  };
  return (
    <section id="jobVacancyDetail" className="bg-slate-50 p-10">
      <div className="flex flex-col-reverse md:flex-row flex-wrap justify-between">
        <div className="card w-[100%] md:w-[60%] bg-white border border-slate-200 rounded-md shadow-sm p-5">
          <div className="flex justify-center">
            <img
              src={job.company_image_url}
              alt={job.company_name}
              className="w-36 h-36 md:hidden p-5"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between">
            <h1 className="font-bold text-base mb-2 md:mb-0 md:text-2xl">
              {job.title}
            </h1>
            <button
              onClick={handleApplyJob}
              className="py-1 px-2 md:py-2 md:px-6 bg-blue-600 rounded-md text-white hover:bg-blue-800 hidden md:block"
            >
              Lamar Pekerjaan
            </button>
          </div>
          <div className="flex flex-wrap gap-4 my-1">
            <div className="flex items-center gap-1">
              <i className="fas fa-building text-slate-500"></i>
              <p className="text-blue-600">{job.company_name}</p>
            </div>
            <div className="flex items-center gap-1">
              <i className="fas fa-calendar-day text-slate-500"></i>
              <p className="text-slate-600 font-normal">
                Sekitar {timeElapsed(job.createdAt)}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap justify-between">
              <div className="items-center gap-1">
                <div className="flex items-center">
                  <img src={iconLocation} alt="location" className="w-5" />
                  <div className="ml-1">
                    <p className="mt-5">Lokasi</p>
                    <p className="text-slate-600 font-normal">
                      {job.company_city}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={iconFolder} alt="location" className="w-5" />
                  <div className="ml-1">
                    <p className="mt-5">Fungsi</p>
                    <p className="text-slate-600 font-normal">{job.title}</p>
                  </div>
                </div>
              </div>
              <div className="items-center gap-1">
                <div className="flex items-center">
                  <img src={iconLocation} alt="location" className="w-5" />
                  <div className="ml-1">
                    <p className="mt-5">Tipe Pekerjaan</p>
                    <p className="text-slate-600 font-normal">{job.job_type}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img src={iconFolder} alt="location" className="w-5" />
                  <div className="ml-1">
                    <p className="mt-5">Masa Kerja</p>
                    <p className="text-slate-600 font-normal">
                      {job.job_tenure}
                    </p>
                  </div>
                </div>
              </div>
              <div className="items-center gap-1">
                <div className="flex items-center">
                  <img src={iconFolder} alt="location" className="w-5" />
                  <div className="ml-1">
                    <p className="mt-5">Gaji Min - Maks</p>
                    <p className="text-slate-600 font-normal">
                      {formatSalaryRange(job.salary_min, job.salary_max)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center sm:justify-end">
              <button
                onClick={handleApplyJob}
                className="mt-3 py-1 px-2 md:py-2 md:px-6 bg-blue-600 rounded-md text-white hover:bg-blue-800 md:hidden"
              >
                Lamar Pekerjaan
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex flex-col justify-center items-center bg-white border border-slate-200 rounded-md shadow-sm hidden md:w-2/6">
          <div className="flex items-center">
            <img
              src={job.company_image_url}
              alt={job.company_name}
              className="w-36 h-36 md:w-48 md:h-48 p-5"
            />
          </div>
          <div className="pb-10">
            <h1>{job.company_name}</h1>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        <div>
          <h1 className="text-xl font-semibold">Deskripsi</h1>
          <p>{job.job_description}</p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Kualifikasi</h1>
          <p>{job.job_qualification}</p>
        </div>
      </div>
    </section>
  );
}
