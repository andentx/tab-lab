import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab Lab",
};

import PagePreview from "@/components/PagePreview";

export default function Home() {
  return <PagePreview />;
}
