import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/publicLayout/Header";
import Footer from "../components/publicLayout/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet /> {/* This renders the current route */}
      <Footer />
    </>
  );
}
