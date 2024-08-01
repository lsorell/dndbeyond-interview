import Image from "next/image";
import { FC, MouseEvent } from "react";

interface TalentNodeProps {
  icon: string;
  iconText: string;
  selected: boolean;
  onClick: () => void;
  onRightClick: (event: MouseEvent) => void;
}

export const TalentNode: FC<TalentNodeProps> = ({
  icon,
  iconText,
  selected,
  onClick,
  onRightClick,
}) => {
  return (
    <div
      className={`p-4 ${selected ? "bg-blue-500" : "bg-gray-700"}`}
      onClick={onClick}
      onContextMenu={onRightClick}
    >
      <Image
        src={icon}
        alt={iconText}
        width={50}
        height={50}
        className="w-8 h-8 md:w-12 md:h-12"
      />
    </div>
  );
};
