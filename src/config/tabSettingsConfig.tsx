import { TabSettingsState } from "@/context/TabSettingsContext";

export type TabSetting =
  | {
      id: string;
      label: string;
      name: keyof TabSettingsState;
      type: "slider";
      min: number;
      max: number;
    }
  | {
      id: string;
      label: string;
      name: keyof TabSettingsState;
      type: "toggle";
    };

const tabSettingsConfig: TabSetting[] = [
  {
    id: "numberOfStringsSelect",
    label: "Number of Strings",
    name: "numberOfStrings",
    type: "slider",
    min: 2,
    max: 12,
  },
  {
    id: "numberOfMeasuresSelect",
    label: "Frets / Measures",
    name: "numberOfMeasures",
    type: "slider",
    min: 1,
    max: 24,
  },
  {
    id: "numberOfTabContainersSelect",
    label: "Number of Tabs",
    name: "numberOfTabContainers",
    type: "slider",
    min: 0,
    max: 12,
  },
  {
    id: "tabWidthSelect",
    label: "Tab Width",
    name: "tabWidth",
    type: "slider",
    min: 50,
    max: 150,
  },
  {
    id: "tabHeightSelect",
    label: "Tab Height",
    name: "tabHeight",
    type: "slider",
    min: 50,
    max: 150,
  },
  {
    id: "tabOffsetSelect",
    label: "Tab Offset",
    name: "tabOffset",
    type: "slider",
    min: -150,
    max: 150,
  },
  {
    id: "tabGapSelect",
    label: "Tab Gap",
    name: "tabGap",
    type: "slider",
    min: 0,
    max: 150,
  },
  {
    id: "lineWidthSelect",
    label: "Line Width",
    name: "lineWidth",
    type: "slider",
    min: 1,
    max: 5,
  },
  {
    id: "headerHeightSelect",
    label: "Header Height",
    name: "headerHeight",
    type: "slider",
    min: 0,
    max: 200,
  },
  {
    id: "showHeaderUnderlineSelect",
    label: "Show Header Underline",
    name: "showHeaderUnderline",
    type: "toggle",
  },
  {
    id: "showHolePunchTemplateSelect",
    label: "Show 3 Hole Punch",
    name: "showHolePunchTemplate",
    type: "toggle",
  },
];

export default tabSettingsConfig;
