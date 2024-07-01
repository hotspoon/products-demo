"use client"

import { Table } from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "./data-table-view-options"
import { DataTableFacetedFilter } from "./data-table-faceted-filter"
import { statuses } from "./data"
import { Button } from "../ui/button"
import { Cross2Icon } from "@radix-ui/react-icons"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  categories: any[]
}

export function DataTableToolbar<TData>({ table, categories }: DataTableToolbarProps<TData>) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 space-x-2">
        <Input
          placeholder="Cari kata kunci..."
          value={table.getState().globalFilter ?? ""}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <Select
          onValueChange={(value) => {
            // Assuming the event.target.value holds the selected category's value
            const selectedCategoryValue = value
            // Check if there's a specific column to apply the filter on, e.g., "category"
            const categoryColumn = table.getColumn("category")
            if (categoryColumn) {
              // Set the filter value for the column, or clear it if no category is selected
              categoryColumn.setFilterValue(
                selectedCategoryValue.length ? selectedCategoryValue : undefined
              )
            }
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Category</SelectLabel>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {/* <DataTableViewOptions table={table} /> */}
    </div>
  )
}
