'use client'
import { PLPFilter } from "@/mocks/filters";
import GenericFilter from "./GenericFilter";
import { Button } from "antd";
import { useEffect, useState } from "react";
const FilterSection = () => {
  const [isShowSelectedValues, setIsShowSelectedValues] = useState(false);
  const handleClearFilters = () => {};
  const handleApplyFilters = () => {};
  return (
    <div className="w-1/5">
      <div className="border">
        <h3 className="ml-3 my-4 font-medium text-base">Filters</h3>
      </div>
      <div className="border-x border-b p-2.5">
        {PLPFilter.filters.map((filter) => {
          return (
            <div key={filter.key} className="mb-8">
              <GenericFilter
                filterHeader={filter.name}
                filterPlaceholder={filter.name}
                filterType={filter.type}
                filterData={filter.values}
                isMultipleSelection={filter.multi}
                isShowSelectedValues={isShowSelectedValues}
              />
            </div>
          );
        })}
        <div className="flex flex-col gap-3">
          <Button onClick={()=> setIsShowSelectedValues(true)}>Clear Filters</Button>
          <Button onClick={handleApplyFilters} type="primary">
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
