import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Lab - Settings",
};

export default function SettingsPage() {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-gray-200 pt-8 lg:pt-24">
      <header className="custom-prose px-8 mb-10">
        <h1>Settings</h1>
        <p>User settings coming soon...</p>
      </header>
    </div>
  );
}
