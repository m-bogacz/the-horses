import React from "react";
import { tabOptions } from "./common/utils";
import { Tab } from "./components/Tab";

export const Tabs = () => {
  return (
    <div className="my-2 md:my-5">
      <div className="mx-auto">
        <div className="mb-4 md:flex flex-wrap md:text-center md:space-x-4 p-2 bg-white rounded-lg shadow-md border grid grid-cols-2 max-w-52">
          {tabOptions.map((tab) => {
            return (
              <Tab key={tab.name} tabSlug={tab.slug}>
                {tab.name}
              </Tab>
            );
          })}
        </div>
      </div>
    </div>
  );
};
