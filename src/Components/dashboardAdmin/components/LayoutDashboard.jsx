import { useEffect, useState } from "react";
import NavbarDashboard from "./NavbarDashboard";
import AsideRouter from "./asideRouter/AsideRouter";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Layout(props) {
  const [pageName, setPageName] = useState("Dashboard");
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setPageName("Dashboard");
        break;
      case "/dashboard/profile":
        setPageName("Profile");
        break;
      case "/dashboard/list-job-vacancy":
        setPageName("List Data Perusahaan");
        break;
      case "/dashboard/list-job-vacancy/create":
        setPageName("Tambah Data Baru");
        break;
      case `/dashboard/list-job-vacancy/edit/${id}`:
        setPageName("Edit Data Lowongan Kerja");
        break;
      default:
        setPageName("");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="flex flex-row h-screen overflow-hidden">
        <AsideRouter className="bg-slate-800 w-1/6 lg:w-1/6 border-r-2 border-gray-400 overflow-y-hidden" />

        <div className="flex flex-col w-full border">
          <NavbarDashboard className="border-b-2" pageName={pageName} />

          <main className="flex-1 h-screen">{props.children}</main>
        </div>
      </div>
    </>
  );
}
