"use client"
import React from "react";
import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};