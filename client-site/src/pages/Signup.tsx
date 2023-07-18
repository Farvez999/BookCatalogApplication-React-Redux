/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { setLoading } from "../redux/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSignUpMutation } from "@/redux/features/users/usersApi";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [signUpMutation] = useSignUpMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const credential = { email, password };
      dispatch(setLoading(true));
      const response: any = await signUpMutation(credential);
      if (response.data) {
        swal(response?.data?.message, "", "success");
        navigate("/login");
        setEmail("");
        setPassword("");
      } else {
        swal(response?.error?.data?.message, "", "error");
      }
      dispatch(setLoading(false));
    } catch (error: any) {
      console.error("Sign-up failed:", error);
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://celadonbooks.com/wp-content/uploads/2021/02/what-is-nonfiction.gif)",
        }}
      >
        <div className="bg-white w-[500px] shadow-md rounded-lg p-8 flex">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
              Create An Account
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={email}
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  defaultValue={password}
                  type="password"
                  id="password"
                  className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500"
                  placeholder="Enter your password"
                  required
                />
              </div>
              {isLoading ? (
                <button
                  disabled
                  className="w-full bg-green-500 text-black py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-green-500 text-black py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                >
                  Sign Up
                </button>
              )}
              <p className="text-gray-700 text-md mt-4">
                Already have an account?{" "}
                <Link to="/login">
                  <a className="text-green-500 font-semibold hover:text-green-700">
                    Sign In
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
