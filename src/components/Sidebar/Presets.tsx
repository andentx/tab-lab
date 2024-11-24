import { TabSettingsState } from "@/context/TabSettingsContext";
import { useTabSettings } from "@/context/TabSettingsContext";
import presets from "@/config/defaultTabPresets";
import { useState } from "react";

const Presets = () => {
  const { updateTabSettings } = useTabSettings();
  const [activePreset, setActivePreset] = useState<keyof typeof presets | null>(
    null
  );

  const handlePresetClick = (presetName: keyof typeof presets) => {
    setActivePreset(presetName);
    const presetSettings = presets[presetName];
    if (presetSettings) {
      for (const [key, value] of Object.entries(presetSettings)) {
        updateTabSettings(
          key as keyof TabSettingsState,
          value as number | boolean
        );
      }
    }
  };

  return (
    <>
      <div className="text-xs font-semibold leading-6 text-gray-200">
        Presets
      </div>
      <ul role="list" className="-mx-2 mb-12 mt-2 space-y-1">
        {Object.keys(presets).map((presetName) => (
          <li key={presetName}>
            <button
              className={`${
                activePreset === presetName
                  ? "bg-gray-700 text-white"
                  : "text-gray-200 hover:bg-gray-700 hover:text-white"
              } flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 w-full`}
              onClick={() =>
                handlePresetClick(presetName as keyof typeof presets)
              }
            >
              <span
                className={`${
                  activePreset === presetName ? "bg-lime-300" : "bg-gray-500"
                } h-6 w-6 shrink-0 rounded-lg border border-gray-400 text-[0.625rem]`}
              ></span>
              <span className="truncate">{presetName}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Presets;
