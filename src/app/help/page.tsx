import { DocumentIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Lab - Help",
};

export default function HelpPage() {
  return (
    <div className="flex min-h-full w-full flex-col items-center bg-gray-200 pt-8 lg:pt-24">
      <div className="custom-prose px-8 mb-10">
        <h1>Help</h1>

        <h2>Creating a Template</h2>
        <p>To create a tab template, follow these steps:</p>
        <ol>
          <li>
            Navigate to
            <span className="inline-flex items-center align-text-bottom">
              <DocumentIcon className="w-5 mr-1 ml-2" aria-hidden="true" />
              <span className="font-semibold text-base leading-none mr-2">
                Page Preview
              </span>
            </span>
            in the sidebar to see a preview of the template.
          </li>
          <li>Adjust the settings to fit your needs.</li>
          <li>
            Click <strong>Save</strong> to save as PDF.
          </li>
          <li>
            Click <strong>Print</strong> to open print window.
          </li>
        </ol>

        <h2>A Note on Printer Settings</h2>
        <p>
          Every printer is different. Be sure to adjust print settings on the
          print dialogue, as well as settings on Tab Lab, to accommodate for
          differences between browsers and printers.
        </p>

        <h2>Contact Support</h2>
        <p>
          If you need additional assistance, or would like to send feedback,
          please send a message to{" "}
          <a
            href="mailto:support@grizzlyguitar.com"
            className="underline hover:text-black focus-visible:outline-none font-bold focus-visible:ring focus-visible:ring-lime-400 focus-visible:ring-offset-gray-200 ring-offset-4 rounded"
          >
            support@grizzlyguitar.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
