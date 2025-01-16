import Cookies from "js-cookie";
import { useState } from "react";
import axios from "axios";

export default function DashboardProfile() {
  // CHANGE PASSWORD DAN UPDATE PROFILE API NYA BELUM BISA
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isEditPassword, setIsEditPassword] = useState(false);
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditProfile(!isEditProfile);
  };
  const handleEditPassword = () => {
    setIsEditPassword(true);
  };
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    let { current_password, new_password, new_confirm_password } = input;
    // Validasi input
    if (!current_password || !new_password || !new_confirm_password) {
      alert("Semua kolom harus diisi!");
      return;
    }
    if (new_password !== new_confirm_password) {
      alert("Konfirmasi password tidak cocok dengan password baru.");
      return;
    }
    alert("masih dalam tahap pengembangan");
    setIsEditPassword(false);
    return;
    axios
      .put(
        "https://final-project-api-alpha.vercel.app/api/change-password",
        { current_password, new_password, new_confirm_password },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateProfile = () => {
    alert("masih dalam tahap pengembangan");
    setIsEditProfile(false);
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  return (
    <section
      id="dashboardProfile"
      className="overflow-auto p-4 h-[400px] md:h-[410px] lg:h-[510px]"
    >
      <div className="p-3 md:p-5 w-[90%] mx-auto border flex flex-col items-center border-gray-400 text-white shadow-md bg-slate-700 rounded-md">
        <h1 className="text-sm md:text-xl font-bold">Profil Akun</h1>
      </div>
      <div className="mt-3 p-3 md:p-5 w-[90%] mx-auto border flex flex-col items-center border-gray-400 text-slate-800 shadow-md bg-slate-100 rounded-md">
        <img
          src={Cookies.get("profileImg")}
          alt={Cookies.get("userName")}
          className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover shadow-xl border border-slate-400"
        />
        <div
          className={`flex flex-col items-center ${
            (isEditProfile || isEditPassword) && "hidden"
          }`}
        >
          <h1 className="text-sm md:text-xl font-bold mt-5 text-center">
            {Cookies.get("userName")}
          </h1>
          <h1 className="text-sm md:text-xl font-normal text-center">
            {Cookies.get("email")}
          </h1>
          <div className="flex gap-2">
            <button
              className="text-slate-200 bg-blue-600 rounded-full shadow-2xl text-sm md:text-base py-1 px-3 md:px-6 md:py-1 mt-2 hover:bg-blue-800 hover:text-slate-100"
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>
            <button
              className="text-slate-200 bg-blue-600 rounded-full shadow-2xl text-sm md:text-base py-1 px-3 md:px-6 md:py-1 mt-2 hover:bg-blue-800 hover:text-slate-100"
              onClick={handleEditPassword}
            >
              Ubah Password
            </button>
          </div>
        </div>

        <div className={`w-full ${isEditProfile ? "block" : "hidden"}`}>
          <form onClick={handleUpdateProfile}>
            <div className="flex flex-col w-[50%] mx-auto">
              <label>Profile Image Url</label>
              <input
                type="text"
                className="w-full rounded-md"
                name="image_url"
              />
            </div>
            <div className="flex flex-col w-[50%] mx-auto">
              <label>Full Name</label>
              <input type="text" className="w-full rounded-md" name="name" />
            </div>
            <div className="flex flex-col w-[50%] mx-auto">
              <label>Email</label>
              <input type="text" className="w-full rounded-md" name="email" />
            </div>
            <button
              className="text-slate-200 bg-blue-600 rounded-full shadow-2xl text-sm md:text-base py-1 px-3 md:px-6 md:py-1 mt-2 hover:bg-blue-800 hover:text-slate-100 w-[50%] flex justify-center mx-auto"
              onClick={handleEditProfile}
            >
              Update Profil
            </button>
          </form>
        </div>

        <div className={`w-full ${isEditPassword ? "block" : "hidden"}`}>
          <form onSubmit={handleUpdatePassword}>
            <div className="flex flex-col w-[50%] mx-auto">
              <label>Password Saat ini</label>
              <input
                type="password"
                className="w-full rounded-md"
                name="current_password"
                value={input.current_password}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col w-[50%] mx-auto">
              <label>Password baru</label>
              <input
                type="password"
                className="w-full rounded-md"
                name="new_password"
                value={input.new_password}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col w-[50%] mx-auto">
              <label>Konfirm password baru</label>
              <input
                type="password"
                className="w-full rounded-md"
                name="new_confirm_password"
                value={input.new_confirm_password}
                onChange={handleInput}
              />
            </div>
            <button
              type="submit"
              className="text-slate-200 bg-blue-600 rounded-full shadow-2xl text-sm md:text-base py-1 px-3 md:px-6 md:py-1 mt-2 hover:bg-blue-800 hover:text-slate-100 w-[50%] flex justify-center mx-auto"
            >
              Update Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
