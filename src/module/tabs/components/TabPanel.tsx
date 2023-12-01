"use client";

import { type TabSlugProps } from "../common/types";
import { ContentTab } from "./ContentTabs/ContentTabs";

export const TabsPanel = ({
  currentTab,
  data,
}: {
  currentTab: TabSlugProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}) => {
  switch (currentTab) {
    case "news":
    case "veterinarians":
    case "vaccinations":
    case "farrieries":
      return <ContentTab data={data} />;

    // case "gallery":
    // return <Tab tabName={tab}>Gallery</Tab>;

    // return <Tab tabName={tab}>BlackSmith</Tab>;

    // case "genealogy":
    // return <Tab tabName={tab}>Genealogy</Tab>;

    default:
      return <div>Default</div>;
    // return <Tab tabName={tab}>Newsss</Tab>;
  }
};
