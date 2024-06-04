"use client";

import React, { useEffect, useState } from "react";
import { Button } from "antd";
import useFiltersStore from "@/stores/filter";
import GenericFilter from "./GenericFilter";
import { PLPFilter } from "@/mocks/filters";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const FilterSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [hasSelectedValues, setHasSelectedValues] = useState(false);
//   const selectedOptions = useFiltersStore(
//     (state) => state.selectedFilteredOptions
//   );
//   const hasSelectedValues = Object.values(selectedOptions).some(
//     (values) => values.length > 0
//   );

  useEffect(() => {
    const checkSelectedValues = () => {
      const hasValues = PLPFilter.filters.some((filter) => {
        const filterValues = searchParams.get(filter.name);
        return filterValues && filterValues.split(",").length > 0;
      });
      setHasSelectedValues(hasValues);
    };

    checkSelectedValues();
  }, [searchParams]);

  const handlOnChange = (values: string[], filterKey: string) => {
    // the old way while using the zustand store
    useFiltersStore.setState((state) => ({
      selectedFilteredOptions: {
        ...state.selectedFilteredOptions,
        [filterKey]: values,
      },
    }));
  };

  const handleClearFilters = () => {
    // the old way while using the zustand store
    // const filterKeys = PLPFilter.filters.map((filter) => filter.key);
    // filterKeys.forEach((key) => {
    //   useFiltersStore.setState((state) => ({
    //     selectedFilteredOptions: {
    //       ...state.selectedFilteredOptions,
    //       [key]: [],
    //     },
    //   }));
    // });
    router.push(pathname);
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
          <Button onClick={handleClearFilters} disabled={!hasSelectedValues}>
            Clear Filters
          </Button>
          <Button type="primary" disabled={!hasSelectedValues}>
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
