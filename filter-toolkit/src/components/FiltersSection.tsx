"use client";

import React from "react";
import { Button } from "antd";
import useFiltersStore from "@/stores/filter";
import GenericFilter from "./GenericFilter";
import { PLPFilter } from "@/mocks/filters";

const FilterSection = () => {
  const handlOnChange = (values: string[], filterKey: string) => {
    useFiltersStore.setState((state) => ({
      selectedFilteredOptions: {
        ...state.selectedFilteredOptions,
        [filterKey]: values, 
      },
    }));
  };

  const handleClearFilters = () => {
    const filterKeys = PLPFilter.filters.map((filter) => filter.key);
    filterKeys.forEach((key) => {
      useFiltersStore.setState((state) => ({
        selectedFilteredOptions: {
          ...state.selectedFilteredOptions,
          [key]: [],
        },
      }));
    });
  };
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
                filterKey={filter.key} 
                onChange={(values) => handlOnChange(values, filter.key)}
              />
            </div>
          );
        })}
        <div className="flex flex-col gap-3">
          <Button onClick={handleClearFilters}>Clear Filters</Button>
          <Button type="primary">Apply Filters</Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
