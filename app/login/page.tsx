/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import MyForm, { FieldConfig } from "@/components/form/form";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

const data = {
  login: {
    id: 1,
    email: "test@example.com",
    password: "$2a$10$EixZaYVK1fsbw1ZfbX3OXe",
  },
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const field: FieldConfig[] = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email...",
      validation: Yup.string().email("Invalid email").required("Required"),
    },
    {
      name: "password",
      label: "Password",
      type: showPassword ? "text" : "password",
      placeholder: "Enter your password...",
      validation: Yup.string()
        .min(8, "8 characters at least")
        .required("Required"),
      icon: (
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      ),
    },
  ];

  const handleSubmit = (values: any) => {
    const { email, password } = values;

    if (email === data.login.email && password === "password123") {
      localStorage.setItem("isAuthenticated", "true");
      setTimeout(() => {
        router.push("/");
      }, 100);
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6  rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-semibold text-center mb-6">Login</h1>
      <MyForm fields={field} onSubmit={handleSubmit} />
      {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      <p className="mt-4 text-sm text-center">
        Dont have an account?
        <Link href="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  );
}
