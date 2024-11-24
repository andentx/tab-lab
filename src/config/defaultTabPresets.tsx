import { TabSettingsState } from "@/context/TabSettingsContext";

const defaultTabPresets: Record<string, Partial<TabSettingsState>> = {
  "Bass Tabs": {
    numberOfStrings: 4,
    numberOfMeasures: 1,
    numberOfTabContainers: 7,
    tabWidth: 80,
    tabHeight: 80,
    tabOffset: 0,
    tabGap: 50,
    lineWidth: 2,
    headerHeight: 150,
    showHeaderUnderline: true,
    showHolePunchTemplate: false,
  },
  "Guitar Tabs": {
    numberOfStrings: 6,
    numberOfMeasures: 1,
    numberOfTabContainers: 6,
    tabWidth: 80,
    tabHeight: 100,
    tabOffset: 0,
    tabGap: 50,
    lineWidth: 2,
    headerHeight: 150,
    showHeaderUnderline: true,
    showHolePunchTemplate: false,
  },
  "Scale Chart": {
    numberOfStrings: 6,
    numberOfMeasures: 12,
    numberOfTabContainers: 6,
    tabWidth: 80,
    tabHeight: 100,
    tabOffset: 0,
    tabGap: 50,
    lineWidth: 2,
    headerHeight: 150,
    showHeaderUnderline: true,
    showHolePunchTemplate: false,
  },
};

export default defaultTabPresets;
