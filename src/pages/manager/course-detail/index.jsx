import React from "react";
import TableContent from "./table-content";
import { Link, useParams } from "react-router-dom";

export default function ManageCourseDetailPage() {
  const { id } = useParams();

  return (
    <>
      <div
        id="Breadcrumb"
        className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5"
      >
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Dashboard
        </span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Manage Course
        </span>
        <span className="last-of-type:after:content-[''] last-of-type:font-semibold">
          Details
        </span>
      </div>
      <header className="flex items-center justify-between gap-[30px]">
        <div>
          <h1 className="font-extrabold text-[28px] leading-[42px]">
            Mastering React TypeScript 7 <br />
            Website Development
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to={`/manager/courses/edit/${id}`}
            className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
          >
            Edit Course
          </Link>
          <Link
            to="/manager/courses/1/preview"
            className="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
          >
            Preview
          </Link>
        </div>
      </header>
      <section id="CourseInfo" className="flex gap-[50px]">
        <div
          id="Thumbnail"
          className="flex shrink-0 w-[480px] h-[250px] rounded-[20px] bg-[#D9D9D9] overflow-hidden"
        >
          <img
            src="/assets/images/thumbnails/th-4.png"
            className="object-cover w-full h-full"
            alt="thumbnail"
          />
        </div>
        <div className="grid w-full grid-cols-2 gap-5">
          <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
            <img
              src="/assets/images/icons/profile-2user-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">12,489 Students</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
            <img
              src="/assets/images/icons/crown-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">Programming</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
            <img
              src="/assets/images/icons/note-favorite-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">873 Contents</p>
          </div>
          <div className="flex flex-col rounded-[20px] border border-[#CFDBEF] p-5 gap-4">
            <img
              src="/assets/images/icons/cup-purple.svg"
              className="w-8 h-8"
              alt="icon"
            />
            <p className="font-semibold">Certificate</p>
          </div>
        </div>
      </section>
      <TableContent />
    </>
  );
}
