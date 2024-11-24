"use client";

import { useTabSVG } from "@/context/TabSVGContext";

const GeneratedTabTemplate = () => {
  const { state } = useTabSVG();
  const tabSVG = state.svgData;

  return (
    <>
      <div className="h-full w-full">{tabSVG}</div>
    </>
  );
};

export default GeneratedTabTemplate;
