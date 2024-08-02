import Image from "next/image";
import { FC, MouseEvent, useState } from "react";

export interface TalentNodeOptions {
  icon: string;
  iconSelected: string;
  altText: string;
  selected: boolean;
}

interface TalentNodeProps extends TalentNodeOptions {
  onClick: () => void;
  onRightClick: (event: MouseEvent) => void;
}

export const TalentNode: FC<TalentNodeProps> = ({
  icon,
  iconSelected,
  altText,
  selected,
  onClick,
  onRightClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const source = selected || isHovered ? iconSelected : icon;
  return (
    <div
      className={`w-fit h-fit z-10 p-1 ${
        selected ? "bg-talent-blue-bright shadow-glow" : "bg-talent-bright"
      }`}
      onClick={onClick}
      onContextMenu={onRightClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={source} alt={altText} width={50} height={50} />
    </div>
  );
};
