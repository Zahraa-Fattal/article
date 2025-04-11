/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import * as Yup from "yup";
import MyForm, { FieldConfig } from "@/components/form/form";
import Link from "next/link";

export default function Register() {
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
      type: "password",
      placeholder: "Enter your password...",
      validation: Yup.string()
        .min(8, "8 characters at least")
        .required("Required"),
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm your password...",
      validation: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Please confirm your password"),
    },
  ];

  const handleSubmit = (values: any) => {
    console.log("submitted values", values);
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6  rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-semibold text-center mb-6">Register</h1>
      <MyForm fields={field} onSubmit={handleSubmit} />
      <p className="mt-4 text-sm text-center">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}
