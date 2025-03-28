import { CourseType } from "@/types/types";
import { BarChart2, Timer, BookOpen, FileVideo } from "lucide-react";


type CourseDetailProps = {
  courseDetail: CourseType | null;
};

const CourseDetail = ({ courseDetail }: CourseDetailProps) => {
  return (
    <div className="border p-7 rounded-xl shadow-sm mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {/* Skill Level */}
        <div className="flex gap-2">
          <BarChart2 className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Skill Level</h2>
            <h2 className="font-medium text-lg">{courseDetail?.level ?? "N/A"}</h2>
          </div>
        </div>

        {/* Duration */}
        <div className="flex gap-2">
          <Timer className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Duration</h2>
            <h2 className="font-medium text-lg">
              {courseDetail?.courseOutput?.duration ?? "N/A"}
            </h2>
          </div>
        </div>

        {/* Chapters */}
        <div className="flex gap-2">
          <BookOpen className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Chapters</h2>
            <h2 className="font-medium text-lg">
              {courseDetail?.courseOutput?.chapters?.length ?? 0}
            </h2>
          </div>
        </div>

        {/* Video Included */}
        <div className="flex gap-2">
          <FileVideo className="text-4xl text-primary" />
          <div>
            <h2 className="text-xs text-gray-500">Video Included</h2>
            <h2 className="font-medium text-lg">
              {courseDetail?.isVideo ? "Yes" : "No"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
