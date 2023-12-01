"use client";

import { useParams, useSearchParams } from "next/navigation";
import { ContentTab } from "./ContentTabs/ContentTabs";

export const TabsPanel = () => {
  const searchParams = useSearchParams();
  const params = useParams();
  console.log(params);
  const currentTab = searchParams.get("tab") ?? "news";
  switch (currentTab) {
    case "news":
    case "veterinarians":
    case "vaccinations":
    case "farrieries":
      return <ContentTab tab={currentTab} horseSlug={String(params.slug)} />;

    case "gallery":
    // return <Tab tabName={tab}>Gallery</Tab>;

    // return <Tab tabName={tab}>BlackSmith</Tab>;

    case "genealogy":
    // return <Tab tabName={tab}>Genealogy</Tab>;

    default:
      return <div>Default</div>;
    // return <Tab tabName={tab}>Newsss</Tab>;
  }
};
