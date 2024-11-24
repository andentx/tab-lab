import { useTabSVG } from "@/context/TabSVGContext";
import ReactDOMServer from "react-dom/server";
import { svg2pdf } from "svg2pdf.js";
import { useState } from "react";
import jsPDF from "jspdf";

const PrintButton = () => {
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

      const pdfData = doc.output("blob");
      const url = URL.createObjectURL(pdfData);

      const printWindow = window.open(url);
      if (printWindow) {
        printWindow.addEventListener("load", async () => {
          await new Promise((resolve) => setTimeout(resolve, 300));
          printWindow.print();
          URL.revokeObjectURL(url);
        });
      } else {
        console.error("Error opening print window");
      }
    } catch (err) {
      console.error("Error handling PDF:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <button
        onClick={handlePDF}
        className="sidebar-button mb-12 bg-lime-300 hover:bg-lime-400"
        disabled={isLoading}
      >
        {isLoading ? "Preparing to Print..." : "Print"}
      </button>
    </div>
  );
};

export default PrintButton;
