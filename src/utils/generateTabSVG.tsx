import { TabSettings } from "@/config/defaultTabSettings";

export default function generateTabSVG(tabSettings: TabSettings): JSX.Element {
  const {
    numberOfStrings,
    numberOfMeasures,
    numberOfTabContainers,
    tabWidth,
    tabHeight,
    tabOffset,
    tabGap,
    lineWidth,
    headerHeight,
    showHeaderUnderline,
    showHolePunchTemplate,
  } = tabSettings;

  const pageWidth = 850;
  const pageHeight = 1100;
  const stringSpacing = tabHeight / (numberOfStrings - 1);
  const tabWidthPx = (tabWidth / 100) * pageWidth;
  const horizontalOffset = (pageWidth - tabWidthPx) / 2;
  const tabStartX = horizontalOffset + tabOffset;
  const lineExtension = lineWidth / 2;
  const measureWidthPx = tabWidthPx / numberOfMeasures;
  const holePunchXPosition = 50;
  const holePunchYPositions = [100, 550, 1000];
  const holePunchRadius = 12;

  const headerUnderline = showHeaderUnderline ? (
    <line
      x1={(pageWidth - pageWidth * 0.65) / 2}
      y1={headerHeight - 44}
      x2={(pageWidth - pageWidth * 0.65) / 2 + pageWidth * 0.65}
      y2={headerHeight - 44}
      stroke="black"
      strokeWidth={lineWidth}
    />
  ) : null;

  const holePunchTemplate = showHolePunchTemplate
    ? holePunchYPositions.map((holePunchYPosition) => (
        <circle
          key={holePunchYPosition}
          cx={holePunchXPosition}
          cy={holePunchYPosition}
          r={holePunchRadius}
          stroke="black"
          strokeWidth={lineWidth}
          fill="white"
        />
      ))
    : null;

  const tabContainers: JSX.Element[] = [];
  for (let i = 0; i < numberOfTabContainers; i++) {
    const tabRowY = headerHeight + i * (tabHeight + tabGap);

    const measureLines: JSX.Element[] = [];
    for (let j = 0; j < numberOfMeasures - 1; j++) {
      const measureX = tabStartX + (j + 1) * measureWidthPx;
      measureLines.push(
        <line
          key={j}
          x1={measureX}
          y1={tabRowY - lineExtension}
          x2={measureX}
          y2={tabRowY + tabHeight + lineExtension}
          stroke="black"
          strokeWidth={lineWidth}
        />
      );
    }

    const stringLines: JSX.Element[] = [];
    for (let k = 0; k < numberOfStrings; k++) {
      stringLines.push(
        <line
          key={k}
          x1={tabStartX}
          y1={tabRowY + k * stringSpacing}
          x2={tabStartX + tabWidthPx}
          y2={tabRowY + k * stringSpacing}
          stroke="black"
          strokeWidth={lineWidth}
        />
      );
    }

    tabContainers.push(
      <g key={i}>
        <line
          x1={tabStartX}
          y1={tabRowY - lineExtension}
          x2={tabStartX}
          y2={tabRowY + tabHeight + lineExtension}
          stroke="black"
          strokeWidth={lineWidth}
        />
        <line
          x1={tabStartX + tabWidthPx}
          y1={tabRowY - lineExtension}
          x2={tabStartX + tabWidthPx}
          y2={tabRowY + tabHeight + lineExtension}
          stroke="black"
          strokeWidth={lineWidth}
        />
        {measureLines}
        {stringLines}
      </g>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${pageWidth} ${pageHeight}`}
      width="100%"
      height="100%"
      id="tabSVGElement"
    >
      {headerUnderline}
      {holePunchTemplate}
      {tabContainers}
    </svg>
  );
}
