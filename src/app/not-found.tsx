import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Lab - Page Not Found",
};

export default function Custom404() {
  return (
    <div className="flex min-h-full flex-col items-center justify-center">
      <div className="mb-8 flex flex-row items-center justify-center">
        <h2 className="mr-5 border-r border-solid border-r-black pr-6 text-2xl font-medium">
          404
        </h2>
        <h2 className="text-sm font-normal">This page could not be found.</h2>
      </div>
      <a
        href="/"
        className="group flex min-w-16 cursor-pointer items-center justify-center rounded-md bg-gray-500 px-4 py-2 text-2xl font-bold tracking-tight text-white shadow hover:bg-gray-600 hover:text-gray-200 focus-visible:outline-none focus-visible:ring focus-visible:ring-lime-200"
      >
        tab
        <span className="group ml-1 text-lime-300 group-hover:text-lime-400">
          lab
        </span>
      </a>
    </div>
  );
}
