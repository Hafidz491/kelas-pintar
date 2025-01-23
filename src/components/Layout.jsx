import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet, useMatch } from "react-router-dom";

export default function Layout({ isAdmin = true }) {
  const isManagerPreview = useMatch("/manager/courses/:id/preview");
  const isStudentPreview = useMatch("/student/detail/:id");

  return (
    <>
      {isManagerPreview !== null || isStudentPreview !== null ? (
        <Outlet />
      ) : (
        <div className="flex min-h-screen">
          <Sidebar isAdmin={isAdmin} />
          <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <Header />
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
}
