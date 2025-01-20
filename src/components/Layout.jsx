import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useMatch } from "react-router-dom";

export default function Layout() {
  const isPreview = useMatch("/manager/courses/:id/preview");

  return (
    <>
      {isPreview !== null ? (
        <Outlet />
      ) : (
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <Header />
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}
