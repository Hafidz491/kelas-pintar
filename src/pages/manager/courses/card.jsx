import React from "react";
import { Link, useRevalidator } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useMutation } from "@tanstack/react-query";
import { deleteCourse } from "../../../service/courseService";

export default function CardCourse({
  id = 1,
  imageUrl = "/assets/images/thumbnails/th-1.png",
  name = "Responsive Design Triclorem Lorem, ipsum dolor.",
  totalStudents = 354,
  category = "Programming",
}) {
  const revalidator = useRevalidator();

  const { isLoading, mutateAsync } = useMutation({
    mutationFn: () => deleteCourse(id),
  });
  const handleDelete = async () => {
    try {
      await mutateAsync();
      revalidator.revalidate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center gap-5 card">
      <div className="flex shrink-0 w-[140px] h-[110px] rounded-[20px] bg-[#D9D9D9] overflow-hidden">
        <img
          src={imageUrl}
          className="object-cover w-full h-full"
          alt="thumbnail"
        />
      </div>
      <div className="w-full">
        <h3 className="font-bold text-xl leading-[30px] line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-[6px] mt-[6px]">
            <img
              src="/assets/images/icons/profile-2user-purple.svg"
              className="w-5 h-5"
              alt="icon"
            />
            <p className="text-[#838C9D]">{totalStudents}</p>
          </div>
          <div className="flex items-center gap-[6px] mt-[6px]">
            <img
              src="/assets/images/icons/crown-purple.svg"
              className="w-5 h-5"
              alt="icon"
            />
            <p className="text-[#838C9D]">{category}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-3">
        <Link
          to={`/manager/courses/${id}`}
          className="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
        >
          Manage
        </Link>
        <button
          type="button"
          onClick={handleDelete}
          disabled={isLoading}
          className="w-fit rounded-full border p-[14px_20px] font-semibold text-nowrap bg-red-500 text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

CardCourse.PropsTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  totalStudents: PropTypes.number,
  category: PropTypes.string,
};
