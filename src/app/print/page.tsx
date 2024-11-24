import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Lab - Print",
};

export default function Print() {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-gray-200 pt-8 lg:pt-24">
      <div className="prose px-8 text-center">
        <h2 className="text-4xl lg:text-5xl">print</h2>
        <p className="mb-12 text-xl">print page</p>
      </div>
    </div>
  );
}
