import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Lab - Account",
};

export default function AccountPage() {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-gray-200 pt-8 lg:pt-24">
      <header className="custom-prose px-8 mb-10">
        <h1>Account</h1>
        <p>User accounts coming soon...</p>
      </header>
    </div>
  );
}
