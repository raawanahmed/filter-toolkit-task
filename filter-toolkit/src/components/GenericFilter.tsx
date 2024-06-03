import React from "react";
import { Select, Input } from "antd";
import useFiltersStore from "@/stores/filter";

const { Search } = Input;

type TProps = {
  filterHeader: string;
  filterType: string;
  filterData?: any[];
  filterPlaceholder: string;
  isMultipleSelection?: boolean;
  filterKey: string;
  onChange: (values: string[], filterKey: string) => void;
};

const GenericFilter = ({
  filterHeader,
  filterData,
  filterType,
  filterPlaceholder,
  isMultipleSelection,
  filterKey,
  onChange,
}: TProps) => {
  const selectedOptions = useFiltersStore(
    (state) => state.selectedFilteredOptions[filterKey] || []
  );

  return (
    <div>
      <p className="mb-2">{filterHeader}</p>
      {filterType === "dropdown" && (
        <Select
          mode={isMultipleSelection ? "multiple" : undefined}
          allowClear
          placeholder={`Select ${filterPlaceholder}`}
          style={{ width: "100%" }}
          value={selectedOptions}
          onChange={(values) => onChange(values, filterKey)}
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
