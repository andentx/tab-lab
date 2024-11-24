import { TabSVGState } from "@/context/TabSVGContext";
import { UPDATE_TAB_SVG } from "@/actions";

type Action = {
  type: typeof UPDATE_TAB_SVG;
  payload: JSX.Element;
};

const tabSVGReducer = (state: TabSVGState, action: Action): TabSVGState => {
  if (action.type === UPDATE_TAB_SVG) {
    return { ...state, svgData: action.payload };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default tabSVGReducer;
