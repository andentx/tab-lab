"use client";

import { createContext, useReducer, useContext, ReactNode } from "react";
import { defaultTabSettings } from "@/config/defaultTabSettings";
import tabSettingsReducer from "@/reducers/tabSettingsReducer";
import { UPDATE_TAB_SETTINGS } from "@/actions";

export type TabSettingsState = typeof defaultTabSettings;

type TabSettingsContextType = {
  state: TabSettingsState;
  updateTabSettings: (
    name: keyof TabSettingsState,
    value: number | boolean
  ) => void;
};

const initialTabSettings: TabSettingsState = {
  ...defaultTabSettings,
};

const TabSettingsContext = createContext<TabSettingsContextType | undefined>(
  undefined
);

export const TabSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(tabSettingsReducer, initialTabSettings);

  const updateTabSettings = (
    name: keyof TabSettingsState,
    value: number | boolean
  ) => {
    dispatch({
      type: UPDATE_TAB_SETTINGS,
      payload: { [name]: value },
    });
  };

  return (
    <TabSettingsContext.Provider value={{ state, updateTabSettings }}>
      {children}
    </TabSettingsContext.Provider>
  );
};

export const useTabSettings = () => {
  const context = useContext(TabSettingsContext);
  if (!context) {
    throw new Error("useTabSettings must be used within a TabSettingsProvider");
  }
  return context;
};
