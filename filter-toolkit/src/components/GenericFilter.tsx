import React, { useCallback, useEffect, useState } from "react";
import { Select, Input } from "antd";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    const filterValues = searchParams.get(filterPlaceholder);
    console.log(filterValues);
    if (filterValues) {
      setSelectedOptions(filterValues.split(","));
    } else {
      setSelectedOptions([]);
    }
  }, [searchParams, filterPlaceholder]);

  const createQueryString = useCallback(
    (values: string[]) => {
      const params = new URLSearchParams(searchParams.toString());
      if (values.length) params.set(filterPlaceholder, values.join(","));
      else params.set(filterPlaceholder, values[0]);
      return params.toString();
    },
    [filterPlaceholder, searchParams]
  );

  const handleChange = (values: string[]) => {
    setSelectedOptions(values);
    const params = createQueryString(values);
    router.push(pathname + "?" + params.toString());
  };

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
          onChange={(value) => handleChange(value)}
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
