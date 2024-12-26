import { useState } from "react";
import axios from "axios";

export default function DeleteAccount() {
  const [input, setInput] = useState({
    email: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    let { email } = input;
    axios
      .delete("https://final-project-api-alpha.vercel.app/api/auth/login", {
        data: { email },
      })
      .then((res) => {
        console.log(res);
        // let data = res.data;
        // Cookies.set("token", data.token, { expires: 1 });
        // Cookies.set("userName", data.user.name, { expires: 1 });
        // navigate("/dashboard");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <h1>Delete Akun</h1>
      <form className="w-[50%] border" onSubmit={handleSubmit}>
        <div className="">
          <div className="flex items-center gap-2 mb-2">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="w-full p-1 border rounded-lg"
              onChange={handleInput}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-red-600 px-6 py-1 rounded-full text-white"
              type="submit"
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
