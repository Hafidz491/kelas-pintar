import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function StudentsItem({
  imageUrl = "/assets/images/photos/photo-3.png",
  name = "Angga Risky Setiawan",
  totalCourse = 183,
  id = 1,
}) {
  return (
    <div className="flex items-center gap-5 card">
      <div className="relative flex w-20 h-20 shrink-0">
        <div className="rounded-[20px] bg-[#D9D9D9] overflow-hidden">
          <img
            src={imageUrl}
            className="object-cover w-full h-full"
            alt="photo"
          />
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[6px] mt-[6px]">
            <img
              src="/assets/images/icons/note-favorite-purple.svg"
              className="w-5 h-5"
              alt="icon"
            />
            <p className="text-[#838C9D]">{totalCourse} Course Joined</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Link
          to={`/manager/students/edit/${id}`}
          className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
        >
          Edit Profile
        </Link>
        <button
          type="button"
          className="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

StudentsItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  totalCourse: PropTypes.number,
  id: PropTypes.number,
};
