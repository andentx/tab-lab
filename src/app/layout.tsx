import { TabSettingsProvider } from "@/context/TabSettingsContext";
import { TabSVGProvider } from "@/context/TabSVGContext";
import Sidebar from "@/components//Sidebar/Sidebar";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tab Lab",
  description:
    "Create customizable templates for guitar tabs, bass tabs, and scale charts, with support for instruments like 8-string guitars and 5-string basses. Save or print your templates effortlessly.",
  authors: [{ name: "Andrew Dent", url: "https://andrewdent.dev" }],
  openGraph: {
    title: "Tab Lab",
    description:
      "Create customizable templates for guitar tabs, bass tabs, and scale charts, with support for instruments like 8-string guitars and 5-string basses. Save or print your templates effortlessly.",
    url: "https://andrewdent.dev",
    siteName: "Tab Lab",
    images: [
      {
        url: "https://res.cloudinary.com/dsz45zrla/image/upload/v1724014815/Screenshot_2024-08-18_at_1.58.54_PM_ba8pw5.png",
        width: 1200,
        height: 630,
        alt: "Tab Lab, a custom guitar tab template generator.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-600 print:h-auto">
      <body className={`${inter.className} h-full bg-gray-600 print:h-auto`}>
        <TabSettingsProvider>
          <TabSVGProvider>
            <Sidebar />
            <main className="h-full-minus-3.5rem bg-gray-200 lg:h-full lg:pl-72 print:h-auto print:pl-0">
              {children}
            </main>
          </TabSVGProvider>
        </TabSettingsProvider>
      </body>
    </html>
  );
}
