import PrintButton from "@/components/Sidebar/PrintButton";
import SaveButton from "@/components/Sidebar/SaveButton";
import Presets from "@/components/Sidebar/Presets";
import Links from "@/components/Sidebar/Links";
import BuiltByAndrew from "./BuiltByAndrew";
import SettingsMenu from "./SettingsMenu";

const SidebarNavigation = () => {
  return (
    <nav className="flex flex-1 flex-col">
      <ul role="list" className="mb-10 flex flex-1 flex-col">
        <li>
          <Links />
        </li>
        <li>
          <SaveButton />
        </li>
        <li>
          <PrintButton />
        </li>
        <li>
          <Presets />
        </li>
        <li>
          <SettingsMenu />
        </li>
        <li>
          <BuiltByAndrew />
        </li>
      </ul>
    </nav>
  );
};

export default SidebarNavigation;
