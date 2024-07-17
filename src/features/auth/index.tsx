import { ChangeEvent, FormEvent, useState } from "react";

import { postLogin } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const handOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e);

    const payload = {
      username,
      password,
    };

    try {
      const response = await postLogin(payload);

      localStorage.setItem("token", response?.token as string);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handOnSubmit}
      className="flex flex-col justify-center items-center h-screen gap-3"
    >
      <label>AUTHENTICATION</label>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
        className="border border-gray-400 rounded-lg py-2 px-6"
        placeholder=" username"
      />
      <input
        type="password"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        className="border border-gray-400 rounded-lg py-2 px-6"
        placeholder=" password"
      />
      <button className="bg-black text-white rounded-sm py-2 px-5">
        Login
      </button>
    </form>
  );
};

export default Auth;
