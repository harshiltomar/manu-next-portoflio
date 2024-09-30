"use client";
import React from "react";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 text-center text-md text-neutral-500 border-neutral-100 bg-white">
      <span className="font-semibold">{new Date().getFullYear()} </span>
      &#8212; With 🍕 @Harshil
    </div>
  );
};