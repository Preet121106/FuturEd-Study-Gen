import { useContext, useState } from "react";
import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserInputType } from "@/types/types";

const SelectOption = () => {
  const { userInput, setUserInput } = useContext(UserInputContext);
  const [warning, setWarning] = useState(false);

  const handleInputChange = (
    fieldName: keyof UserInputType,
    value: string | number
  ) => {
    if (fieldName === "totalChapters") {
      const numChapters = Number(value);
      if (numChapters > 36) {
        setWarning(true);
      } else {
        setWarning(false);
      }
      setUserInput((prev) => ({
        ...prev,
        [fieldName]: Math.min(numChapters, 36), // Ensures it doesn't exceed 36
      }));
    } else {
      setUserInput((prev) => ({ ...prev, [fieldName]: value }));
    }
  };

  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label className="text-sm">🎓 Difficulty Level</label>
          <Select
            onValueChange={(value) => handleInputChange("difficulty", value)}
            defaultValue={userInput?.difficulty}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">⏳ Course Duration</label>
          <Select
            onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userInput?.duration}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hour">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">
                More than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">🎥 Add Video</label>
          <Select
            onValueChange={(value) => handleInputChange("video", value)}
            defaultValue={userInput?.video}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="text-sm">📄 No. of Chapters</label>
          <Input
            type="number"
            min="1"
            max="36"
            onChange={(e) =>
              handleInputChange("totalChapters", e.target.value)
            }
            value={userInput?.totalChapters ?? ""}
          />
          {warning && (
            <p className="text-red-500 text-sm mt-1">
              ⚠️ Maximum allowed chapters are 36.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectOption;
