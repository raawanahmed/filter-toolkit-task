import React, { useState } from "react";
import { Select, Input } from "antd";
const { Search } = Input;

type TProps = {
  filterHeader: string;
  filterType: string;
  filterData?: any[];
  filterPlaceholder: string;
  isMultipleSelection?: boolean;
};

const GenericFilter = ({
  filterHeader,
  filterData,
  filterType,
  filterPlaceholder,
  isMultipleSelection,
}: TProps) => {
  return (
    <div>
      <p className="mb-2">{filterHeader}</p>
      {filterType === "dropdown" && (
        <Select
          mode={isMultipleSelection ? "multiple" : undefined}
          allowClear
          placeholder={`Select ${filterPlaceholder}`}
          style={{ width: "100%" }}
        //  onChange={handleChange}
          options={filterData?.map((item) => ({
            label: item.name,
            value: item.code,
          }))}
        />
      )}
      {filterType === "input" && (
        <Search placeholder={`Search for ${filterPlaceholder}`} allowClear />
      )}
    </div>
  );
};

export default GenericFilter;
