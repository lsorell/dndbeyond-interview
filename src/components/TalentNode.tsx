import Image from "next/image";
import { FC, MouseEvent, useState } from "react";

interface TalentNodeProps {
  icon: string;
  iconSelected: string;
  iconText: string;
  selected: boolean;
  onClick: () => void;
  onRightClick: (event: MouseEvent) => void;
}

export const TalentNode: FC<TalentNodeProps> = ({
  icon,
  iconSelected,
  iconText,
  selected,
  onClick,
  onRightClick,
}) => {
  const [source, setSource] = useState(icon);

  const determineSource = (isHovered: boolean) => {
    selected || isHovered ? setSource(iconSelected) : setSource(icon);
  };

  const handleMouseEnter = () => determineSource(true);
  const handleMouseLeave = () => determineSource(false);

  return (
    <div
      className={`group w-fit h-fit p-1 ${
        selected ? "bg-talent-blue-bright" : "bg-talent-bright"
      }`}
      onClick={onClick}
      onContextMenu={onRightClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={source} alt={iconText} width={50} height={50} />
    </div>
  );
};
