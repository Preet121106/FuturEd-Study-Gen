import { ChapterType } from "@/types/types";
import React from "react";
import { LuTimer } from "react-icons/lu";

type ChapterListCardProps = {
  chapter: ChapterType;
  index: number;
};

const ChapterListCard = ({ chapter, index }: ChapterListCardProps) => {
  return (
    <div className="flex items-center gap-3 p-3 border-b hover:bg-gray-100 cursor-pointer transition w-full">
      {/* Chapter Number */}
      <div className="flex-none">
        <h2 className="p-2 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
          {index + 1}
        </h2>
      </div>

      {/* Chapter Details */}
      <div className="flex-grow">
        <h2 className="font-medium text-sm whitespace-normal break-words leading-tight">
          {chapter.chapter_name}
        </h2>
        <h2 className="text-xs text-primary flex items-center gap-1">
          <LuTimer size={14} /> {chapter.duration}
        </h2>
      </div>
    </div>
  );
};

export default ChapterListCard;
