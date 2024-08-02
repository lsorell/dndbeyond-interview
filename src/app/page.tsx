"use client";

import { TalentNode } from "@/components/TalentNode";
import { MouseEvent, useState } from "react";

export default function TalentCalculator() {
  const [pointsUsed, setPointsUsed] = useState(0);
  const [selected, setSelected] = useState(false);

  const handleNodeClick = () => {
    setSelected(true);
  };

  const handleNodeRightClick = (event: MouseEvent) => {
    event.preventDefault(); // Prevent context menu from appearing
    setSelected(false);
  };

  return (
    <main className="w-screen h-screen bg-talent-bg flex justify-center items-center">
      <div className="w-[998px] h-[373px] flex flex-col align-center bg-talent-calc bg-cover border-talent-border border-2">
        <div className="w-[95%] h-fit my-5 py-1 bg-talent-mid text-center">
          <h1 className="text-2xl">
            TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000
          </h1>
        </div>
        <div>
          <TalentNode
            icon="/faded-chevron-sprite.png"
            iconSelected="/chevron-sprite.png"
            iconText="Chevron"
            selected={selected}
            onClick={handleNodeClick}
            onRightClick={handleNodeRightClick}
          />
        </div>
      </div>
    </main>
  );
}
