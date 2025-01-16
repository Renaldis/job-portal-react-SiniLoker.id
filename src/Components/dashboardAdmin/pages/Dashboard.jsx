import Cookies from "js-cookie";
export default function Dashboard() {
  return (
    <section
      id="dashboard"
      className="flex justify-center h-[100%] bg-slate-300 shadow-md rounded-md"
    >
      <div className="welcome flex flex-col justify-center items-center">
        <h1 className="text-2xl">Selamat Datang {Cookies.get("userName")}</h1>
        <h1 className="text-2xl font-bold text-center">
          Halaman Dashboard Admin
        </h1>
      </div>
    </section>
  );
}
