import React from "react";

import { GrMapLocation } from "react-icons/gr";
import moment from "moment/moment";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const TravelStoryCard = ({
  imgUrl,
  title,
  date,
  story,
  visitedLocation,
  isFavourite,
  onFavouriteClick,
  onClick,
}) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white hover:shadow-lg hover:shadow-slate-200 transition-all ease-in-out realtive cursor-pointer">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-56 object-cover rounded-lg"
        onClick={onClick}
      />
      <div className="mt-2 flex items-center justify-end mr-1">
        <button
          className="w-12 h-12 flex items-center justify-center bg-black/40 rounded-lg border border-white/30"
          onClick={onFavouriteClick}
        >
          <FaHeart
            className={`icon-btn ${
              isFavourite ? "text-red-500" : "text-white"
            }`}
          />
        </button>
      </div>
      <div className="p-4" onClick={onClick}>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <h6 className="text-sm font-medium">{title}</h6>
            <span className="text-xs text-slate-500">
              {date ? moment(date).format("Do MMM YYYY") : "-"}
            </span>
          </div>
        </div>
        <p>{story?.slice(0, 60)}</p>
        <div className="inline-flex items-center gap-2 text-[13px] text-cyan-600 bg-cyan-200/40 rounded mt-3 px-2 py-1">
          <GrMapLocation className="text-sm" />
          {visitedLocation.map((item, index) =>
            visitedLocation.length == index + 1 ? `${item}` : `${item}, `
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelStoryCard;
