import { useTabSettings, TabSettingsState } from "@/context/TabSettingsContext";
import tabSettingsConfig, { TabSetting } from "@/config/tabSettingsConfig";
import CustomSlider from "@/components/CustomSlider";
import CustomToggle from "@/components/CustomToggle";

const SettingsMenu = () => {
  const { state, updateTabSettings } = useTabSettings();

  const handleChange = (
    name: keyof TabSettingsState,
    value: number | boolean
  ) => {
    updateTabSettings(name, value);
  };

  return (
    <>
      <div className="mb-4 text-xs font-semibold leading-6 text-gray-200">
        Settings
      </div>
      <form className="mb-16">
        {tabSettingsConfig.map((setting: TabSetting) => {
          const { id, label, name, type } = setting;

          return (
            <div key={id}>
              {type === "slider" ? (
                <CustomSlider
                  id={id}
                  label={label}
                  value={state[name] as number}
                  min={setting.min}
                  max={setting.max}
                  step={1}
                  onChange={(value: number) => handleChange(name, value)}
                />
              ) : (
                <CustomToggle
                  id={id}
                  label={label}
                  enabled={state[name] as boolean}
                  onToggle={(value: boolean) => handleChange(name, value)}
                />
              )}
            </div>
          );
        })}
      </form>
    </>
  );
};

export default SettingsMenu;
