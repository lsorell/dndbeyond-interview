"use client";

import Image from "next/image";
import { TalentPath } from "@/components/TalentPath";
import { MouseEvent, useState } from "react";

const CLICK_INPUT = {
  SELECT: true,
  DESELECT: false,
} as const;
type CLICK_INPUT = (typeof CLICK_INPUT)[keyof typeof CLICK_INPUT];

export default function TalentCalculator() {
  const MAX_POINTS = 6;

  const [pointsUsed, setPointsUsed] = useState(0);
  const [talentPaths, setTalentPaths] = useState([
    {
      title: "Talent Path 1",
      talentNodes: [
        {
          icon: "/faded-chevron-sprite.png",
          iconSelected: "/chevron-sprite.png",
          altText: "Chevron",
          selected: false,
        },
        {
          icon: "/faded-utensils-sprite.png",
          iconSelected: "/utensils-sprite.png",
          altText: "Utensils",
          selected: false,
        },
        {
          icon: "/faded-cake-sprite.png",
          iconSelected: "/cake-sprite.png",
          altText: "Cake",
          selected: false,
        },
        {
          icon: "/faded-crown-sprite.png",
          iconSelected: "/crown-sprite.png",
          altText: "Crown",
          selected: false,
        },
      ],
    },
    {
      title: "Talent Path 2",
      talentNodes: [
        {
          icon: "/faded-boat-sprite.png",
          iconSelected: "/boat-sprite.png",
          altText: "Boat",
          selected: false,
        },
        {
          icon: "/faded-scuba-sprite.png",
          iconSelected: "/scuba-sprite.png",
          altText: "Scuba",
          selected: false,
        },
        {
          icon: "/faded-bolt-sprite.png",
          iconSelected: "/bolt-sprite.png",
          altText: "Bolt",
          selected: false,
        },
        {
          icon: "/faded-skull-sprite.png",
          iconSelected: "/skull-sprite1.png",
          altText: "Skull",
          selected: false,
        },
      ],
    },
  ]);

  const handleNodeClick = (pathIndex: number, nodeIndex: number) => {
    if (isValidInput(pathIndex, nodeIndex, CLICK_INPUT.SELECT)) {
      const updatedPaths = updatePaths(
        pathIndex,
        nodeIndex,
        CLICK_INPUT.SELECT
      );
      setTalentPaths(updatedPaths);
      setPointsUsed(pointsUsed + 1);
    }
  };

  const handleNodeRightClick = (
    pathIndex: number,
    nodeIndex: number,
    event: MouseEvent
  ) => {
    event.preventDefault(); // Prevent context menu from appearing
    if (isValidInput(pathIndex, nodeIndex, CLICK_INPUT.DESELECT)) {
      const updatedPaths = updatePaths(
        pathIndex,
        nodeIndex,
        CLICK_INPUT.DESELECT
      );
      setTalentPaths(updatedPaths);
      setPointsUsed(pointsUsed - 1);
    }
  };

  const updatePaths = (
    pathIndex: number,
    nodeIndex: number,
    clickInput: CLICK_INPUT
  ) => {
    const copy = talentPaths;
    copy[pathIndex].talentNodes[nodeIndex].selected = !!clickInput;
    return copy;
  };

  const isValidInput = (
    pathIndex: number,
    nodeIndex: number,
    clickInput: CLICK_INPUT
  ) => {
    if (clickInput === CLICK_INPUT.SELECT) {
      if (pointsUsed === MAX_POINTS) return false;
      // If the TalentNode is already selected
      if (talentPaths[pathIndex].talentNodes[nodeIndex].selected === true)
        return false;
      if (nodeIndex === 0) return true;
      // Return if the TalentNode before the selected TalentNode is selected
      return (
        talentPaths[pathIndex].talentNodes[nodeIndex - 1].selected === true
      );
    } else {
      if (pointsUsed === 0) return false;
      // If the TalentNode is already deselected
      if (talentPaths[pathIndex].talentNodes[nodeIndex].selected === false)
        return false;
      if (nodeIndex === talentPaths[pathIndex].talentNodes.length - 1)
        return true;
      // Return if the TalentNode after the selected TalentNode is deselected
      return (
        talentPaths[pathIndex].talentNodes[nodeIndex + 1].selected === false
      );
    }
  };

  return (
    <main className="w-screen h-screen bg-talent-bg flex justify-center items-center">
      <div className="w-[998px] h-[373px] flex flex-col items-center bg-talent-calc bg-cover border-talent-border border-2">
        <div className="w-[95%] h-fit my-5 py-1 bg-talent-mid text-center">
          <h1 className="text-2xl">
            TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
          </h1>
        </div>
        <div className="flex">
          <div>
            {talentPaths.map((path, index) => (
              <TalentPath
                key={index}
                title={path.title}
                talentNodes={path.talentNodes}
                onNodeClick={(nodeIndex) => handleNodeClick(index, nodeIndex)}
                onNodeRightClick={(nodeIndex, event) =>
                  handleNodeRightClick(index, nodeIndex, event)
                }
              />
            ))}
          </div>
          <div className="w-[192px] h-[96px] ml-8 mt-16 flex flex-col justify-center items-center text-2xl bg-talent-dark border-2 border-talent-point-border">
            <h2>{`${pointsUsed} / ${MAX_POINTS}`}</h2>
            <h2 className="text-talent-blue">Points Spent</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
