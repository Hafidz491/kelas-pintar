import React from "react";
import { Link } from "react-router-dom";

export default function CardCourse({
  imageUrl = "/assets/images/thumbnails/th-1.png",
  id = "1",
  title = "Mastering React",
  category = "Programming",
}) {
  return (
    <div className="flex items-center gap-5 card">
      <div className="flex shrink-0 w-[100px] h-20 rounded-[20px] bg-[#D9D9D9] overflow-hidden">
        <img
          src={imageUrl}
          className="object-cover w-full h-full"
          alt="thumbnail"
        />
      </div>
      <div className="w-full">
        <Link
          to={`/student/detail/${id}`}
          className="font-bold text-xl leading-[30px] line-clamp-1"
        >
          {title}
        </Link>
        <div className="flex items-center gap-[6px] mt-[6px]">
          <img src="/assets/images/icons/crown-purple.svg" alt="icon" />
          <p className="text-[#838C9D]">{category}</p>
        </div>
      </div>
    </div>
  );
}
