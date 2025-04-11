/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export interface FieldConfig {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number";
  placeholder?: string;
  validation?: Yup.AnySchema;
  icon?: React.ReactNode;
}

interface FormProps {
  fields: FieldConfig[];

  onSubmit: (values: { [key: string]: any }) => void;
  initialValues?: { [key: string]: any };
}

const myForm: React.FC<FormProps> = ({ fields, onSubmit, initialValues }) => {
  const defaultValues = fields.reduce((acc, field) => {
    acc[field.name] = initialValues?.[field.name] ?? "";
    return acc;
  }, {} as Record<string, any>);

  const validationSchema = Yup.object(
    fields.reduce((f, field) => {
      if (field.validation) f[field.name] = field.validation;
      return f;
    }, {} as Record<string, Yup.AnySchema>)
  );

  return (
    <Formik
      initialValues={defaultValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className="mb-1 font-semibold">
              {field.label}
            </label>
            <div className="relative">
              <Field
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="border border-gray-300 rounded px-3 py-2 w-full pr-10 focus:outline-none focus:ring focus:border-blue-300"
              />
              {field.icon && (
                <div className="absolute inset-y-0 right-3 flex items-center">
                  {field.icon}
                </div>
              )}
            </div>
            <ErrorMessage
              name={field.name}
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default myForm;
