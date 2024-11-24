"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import SidebarNavigation from "@/components/Sidebar/SidebarNavigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/components/Sidebar/Logo";
import { useState } from "react";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Dialog
        className="relative z-50 lg:hidden print:hidden"
        open={sidebarOpen}
        onClose={setSidebarOpen}
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/40 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5 duration-300 ease-in-out data-[closed]:opacity-0">
                <button
                  type="button"
                  className="-m-2.5 rounded p-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200"
                  onClick={() => setSidebarOpen(false)}
                >
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </TransitionChild>
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-600 px-6">
              <Logo />
              <SidebarNavigation />
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col print:hidden">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-600 px-6">
          <Logo />
          <SidebarNavigation />
        </div>
      </div>

      <div className="sticky top-0 z-40 flex items-center gap-x-4 bg-gray-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden print:hidden">
        <button
          type="button"
          className="-m-2.5 rounded p-2.5 text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-200 lg:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <div className="flex-1 text-xl font-bold leading-6 tracking-tight text-white">
          tab<span className="ml-1 text-lime-300">lab</span>
        </div>
      </div>
    </>
  );
}
