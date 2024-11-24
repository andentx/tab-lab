import { useTabSVG } from "@/context/TabSVGContext";
import ReactDOMServer from "react-dom/server";
import { svg2pdf } from "svg2pdf.js";
import { useState } from "react";
import jsPDF from "jspdf";

const SaveButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useTabSVG();
  const tabSVG = state.svgData;

  const handlePDF = async () => {
    setIsLoading(true);

    try {
      const svgElementString = ReactDOMServer.renderToStaticMarkup(tabSVG);
      const parser = new DOMParser();
      const svgElement = parser.parseFromString(
        svgElementString,
        "image/svg+xml"
      ).documentElement;

      const doc = new jsPDF({
        orientation: "portrait",
        unit: "in",
        format: [8.5, 11],
      });

      await svg2pdf(svgElement, doc, {
        x: 0,
        y: 0,
        width: 8.5,
        height: 11,
      });

      doc.save("guitar-tab-template.pdf");
    } catch (err) {
      console.error("Error converting SVG to PDF:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <button
        onClick={handlePDF}
        className="sidebar-button mb-8 bg-lime-200 hover:bg-lime-300"
        disabled={isLoading}
      >
        {isLoading ? "Generating PDF..." : "Save"}
      </button>
    </div>
  );
};

export default SaveButton;
