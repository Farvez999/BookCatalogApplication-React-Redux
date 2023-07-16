import React from "react";
import Books from "./Books";
import MainLayout from "@/layouts/MainLayout";

const Home = () => {
  return (
    <div>
      <MainLayout></MainLayout>
      <Books></Books>
    </div>
  );
};

export default Home;
