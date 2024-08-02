import { MouseEvent } from "react";
import { TalentNode, TalentNodeOptions } from "./TalentNode";

interface TalentPathProps {
  title: string;
  talentNodes: TalentNodeOptions[];
  onNodeClick: (index: number) => void;
  onNodeRightClick: (index: number, event: MouseEvent) => void;
}

export const TalentPath: React.FC<TalentPathProps> = ({
  title,
  talentNodes,
  onNodeClick,
  onNodeRightClick,
}) => {
  return (
    <div className="flex justify-start items-center m-5">
      <h2 className="uppercase text-sm text-talent-path-font mr-10">{title}</h2>
      {talentNodes.map((node, index) => (
        <>
          <TalentNode
            key={index}
            icon={node.icon}
            iconSelected={node.iconSelected}
            altText={node.altText}
            selected={node.selected}
            onClick={() => onNodeClick(index)}
            onRightClick={(event) => onNodeRightClick(index, event)}
          />
          {index !== talentNodes.length - 1 ? (
            <div
              key={index}
              className="w-[108px] h-[16px] z-0 bg-talent-mid border-talent-path-border border-y-2"
            />
          ) : null}
        </>
      ))}
    </div>
  );
};
