"use client";

import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { defaultTabSettings } from "@/config/defaultTabSettings";
import { useTabSettings } from "@/context/TabSettingsContext";
import generateTabSVG from "@/utils/generateTabSVG";
import reducer from "@/reducers/tabSVGReducer";
import { UPDATE_TAB_SVG } from "@/actions";

export type TabSVGState = {
  svgData: JSX.Element;
};

const initialTabSVGState: TabSVGState = {
  svgData: generateTabSVG(defaultTabSettings),
};

type TabSVGContextType = {
  state: TabSVGState;
};

const TabSVGContext = createContext<TabSVGContextType | undefined>(undefined);

export const TabSVGProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialTabSVGState);
  const { state: tabSettings } = useTabSettings();

  useEffect(() => {
    const tabSVG = generateTabSVG(tabSettings);
    dispatch({ type: UPDATE_TAB_SVG, payload: tabSVG });
  }, [tabSettings, dispatch]);

  return (
    <TabSVGContext.Provider value={{ state }}>
      {children}
    </TabSVGContext.Provider>
  );
};

export const useTabSVG = () => {
  const context = useContext(TabSVGContext);
  if (!context) {
    throw new Error("useTabSVG must be used within a TabSVGProvider");
  }
  return context;
};
