"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const MONTH_OPTIONS = [
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

function MonthSelect() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const defaultMonth = (new Date().getMonth() + 1).toString();
  const month = searchParams.get("month") || defaultMonth;

  function handleMonthSelect(month: string) {
    push(`/?month=${month}`);
  }

  return (
    <Select
      onValueChange={(value) => {
        handleMonthSelect(value);
      }}
      defaultValue={month}
    >
      <SelectTrigger className="w-[150px] rounded-full">
        <SelectValue placeholder="Month"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        {MONTH_OPTIONS.map((option, index) => {
          return (
            <SelectItem key={index} value={option.value}>
              {option.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

export default MonthSelect;
