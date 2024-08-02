import { Fragment, MouseEvent } from "react";
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
    <div className="flex justify-start items-center ml-5 mt-10">
      <h3 className="uppercase w-28 text-sm text-talent-path-font mr-10">
        {title}
      </h3>
      {talentNodes.map((node, index) => (
        <Fragment key={index}>
          <TalentNode
            icon={node.icon}
            iconSelected={node.iconSelected}
            altText={node.altText}
            selected={node.selected}
            onClick={() => onNodeClick(index)}
            onRightClick={(event) => onNodeRightClick(index, event)}
          />
          {index !== talentNodes.length - 1 ? (
            <div className="w-[108px] h-[16px] z-0 bg-talent-mid border-talent-path-border border-y-2" />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
};
