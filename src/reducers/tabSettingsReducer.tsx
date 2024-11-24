import { TabSettingsState } from "@/context/TabSettingsContext";
import { UPDATE_TAB_SETTINGS } from "@/actions";

type Action = {
  type: typeof UPDATE_TAB_SETTINGS;
  payload: Partial<TabSettingsState>;
};

const tabSettingsReducer = (
  state: TabSettingsState,
  action: Action
): TabSettingsState => {
  if (action.type === UPDATE_TAB_SETTINGS) {
    return { ...state, ...action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tabSettingsReducer;
