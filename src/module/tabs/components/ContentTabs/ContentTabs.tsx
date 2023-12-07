import React from "react";
import { type DetailsProps } from "../../common/types";
import { Table } from "./table/Table";
import { CardList } from "./card/CardList";

export const ContentTab = ({ data }: { data: DetailsProps[] }) => {
  return (
    <div>
      <div className="md:block hidden">
        <Table data={data} />
      </div>
      <div className="block md:hidden">
        <CardList data={data} />
      </div>
    </div>
  );
};

ContentTab.displayName = "ContentTab";
