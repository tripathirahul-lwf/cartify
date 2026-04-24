import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
