export default function DashboardJobForm() {
  return (
    <section
      id="dashboardJobForm"
      className="overflow-auto p-4 h-[400px] md:h-[510px]"
    >
      <div className="px-3 md:p-5 w-[90%] mx-auto border flex flex-col items-center border-gray-400 text-white shadow-md bg-slate-700 rounded-md">
        <h1 className="text-xl md:text-2xl">Buat Lowongan Kerja Baru</h1>
        <form className="py-2 w-full">
          <div className="flex flex-col gap-1 py-1">
            <label>Job Title</label>
            <input type="text" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Company Name</label>
            <input type="text" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Company City</label>
            <input type="text" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Company Image</label>
            <input
              type="text"
              className="rounded-md border-slate-300"
              placeholder="Input URL Logo"
            />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Salary Minimum</label>
            <input type="number" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Salary Maximum</label>
            <input type="number" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Job Description</label>
            <textarea className="rounded-md border-slate-300"></textarea>
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Job Kualification</label>
            <input type="text" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Job Type</label>
            <input type="text" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Job Tenure</label>
            <input type="text" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 py-1">
            <label>Job Status</label>
            <input type="number" className="rounded-md border-slate-300" />
          </div>
          <div className="flex flex-col gap-1 pt-4">
            <button className="bg-blue-500 py-2 rounded-lg hover:bg-blue-800 hover:text-slate-50 transition-all duration-200">
              Buat Lowongan
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
