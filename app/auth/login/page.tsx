"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log("login");
    router.push("/");
  };
  return (
    <section className="w-[100vw] h-[100vh] bg-secondary  flex justify-center items-center">
      <div className="w-[30vw] rounded-2xl p-8 bg-primary flex flex-col">
        <h1 className="text-xl font-bold">Login</h1>
        <div className="flex flex-col gap-1 mt-5">
          <label className="text-md font-medium">User Name:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className=" bg-white h-10 rounded-xl p-4"
          />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <label className="text-md font-medium">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" bg-white h-10 rounded-xl p-4"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-supporting1 h-10 rounded-xl mt-10"
        >
          Login
        </button>
      </div>
    </section>
  );
}
