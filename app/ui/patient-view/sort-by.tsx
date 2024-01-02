'use client';
import { Label, Select } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function SortBy() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const updateOrder = useDebouncedCallback((order: string) => {
    console.log(`Ordering by ${order}`);
    const params = new URLSearchParams(searchParams);

    if (order) {
      params.set('orderBy', order);
    } else {
      params.delete('orderBy');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  const updateSort = useDebouncedCallback((sortBy: string) => {
    console.log(`Sorting by ${sortBy}`);
    const params = new URLSearchParams(searchParams);

    if (sortBy) {
      params.set('sortBy', sortBy);
    } else {
      params.delete('sortBy');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex">
      <Label htmlFor="sortBy" className="self-center mr-2" value="Sort By:"/>
      <Select id="sortBy" className="mr-2" onChange={(e) => {
        updateSort(e.target.value)
      }}>
        <option value="visit_time">Visit Date</option>
        <option value="administration_location">Administration Location</option>
        <option value="administering_nurse">Administering Nurse</option>
        <option value="medication">Medication</option>
        <option value="visit_duration_seconds">Visit Duration</option>
        <option value="medication_tolerance">Medication Tolerance</option>
        <option value="heartrate_bpm">Heart Rate</option>
        <option value="blood_pressure">Blood Pressure</option>
        <option value="pain_level">Pain Level</option>
      </Select>
      <Label htmlFor="orderBy" className="self-center mr-2" value="Order:"/>
      <Select id="orderBy" onChange={(e) => {
        updateOrder(e.target.value)
      }}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </Select>
    </div>
  )
}