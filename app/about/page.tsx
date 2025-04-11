import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-center bg-white rounded-lg shadow-lg">
      <Image
        src="/image (2).png"
        alt="About"
        width={500}
        height={300}
        className="mx-auto rounded-lg mb-6"
      />
      <p className="text-lg text-gray-700 mb-4">
        Welcome to our blog! We write about technology, development, and other
        cool stuff.
      </p>
    </div>
  );
}
