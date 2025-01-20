"use client";

import { BASE_BACK_URL } from "@/constant";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setIsLogin, setUserUserName } from "@/redux/slices/userSlice";
import { toast } from "react-toastify";
import { Formik } from "formik";
import * as Yup from "yup";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const initialValues = {
    userName: "",
    password: "",
  };

  const schema = Yup.object().shape({
    userName: Yup.string().required("Please enter the user name"),
    password: Yup.string().required("Please enter the password"),
  });

  const handleLogin = (userName: string, password: string) => {
    console.log("login");
    setLoading(true);
    axios
      .post(`${BASE_BACK_URL}/admin/login`, {
        userName,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.data.token) {
          Cookies.set("token", res.data.data.token);
          dispatch(setIsLogin(true));
          dispatch(setUserUserName(res.data.data.user.userName));
          router.push("/");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please try again");
        setLoading(false);
      });
  };
  useEffect(() => {
    const handlePressEnter = (e: KeyboardEvent) => {
      console.log(e);
      if (e.key === "Enter") {
        if (btnRef.current) btnRef.current.click();
      }
    };
    if (btnRef.current) {
      document.addEventListener("keydown", handlePressEnter);
    }

    return () => document.removeEventListener("keydown", handlePressEnter);
  }, []);
  return (
    <section className="w-full h-[100vh] bg-secondary  flex justify-center items-center">
      <div className="w-[30vw] rounded-2xl p-8 bg-primary flex flex-col">
        <h1 className="text-xl font-bold">Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            handleLogin(values.userName, values.password);
          }}
        >
          {({ values, errors, handleSubmit, handleChange, touched }) => (
            <>
              <div className="flex flex-col gap-1 mt-5">
                <label className="text-md font-medium">User Name:</label>
                <input
                  type="text"
                  name="userName"
                  value={values.userName}
                  onChange={handleChange}
                  className=" bg-white h-10 rounded-xl p-4"
                />
                {errors.userName && touched.userName && (
                  <span className="text-red-600 text-sm">
                    {errors.userName}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <label className="text-md font-medium">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className=" bg-white h-10 rounded-xl p-4"
                />
                {errors.password && touched.password && (
                  <span className="text-red-600 text-sm">
                    {errors.password}
                  </span>
                )}
              </div>
              <button
                ref={btnRef}
                disabled={loading}
                onClick={() => handleSubmit()}
                className="bg-supporting1 h-10 rounded-xl mt-10 disabled:opacity-70"
              >
                Login
              </button>
            </>
          )}
        </Formik>
      </div>
    </section>
  );
}
