export interface TabSettings {
  numberOfStrings: number;
  numberOfMeasures: number;
  numberOfTabContainers: number;
  tabWidth: number;
  tabHeight: number;
  tabOffset: number;
  tabGap: number;
  lineWidth: number;
  headerHeight: number;
  showHeaderUnderline: boolean;
  showHolePunchTemplate: boolean;
}

export const defaultTabSettings: TabSettings = {
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
};
