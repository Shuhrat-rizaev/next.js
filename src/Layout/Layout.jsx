"use client";

import { ThemeProvider } from "next-themes";

import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <ThemeProvider attribute={"class"} defaultTheme="class" enableSystem>
      <Navbar />
      {children}
    
    </ThemeProvider>
  );
};

export default Layout;
