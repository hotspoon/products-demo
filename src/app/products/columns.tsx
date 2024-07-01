"use client"

import { DataTableColumnHeader } from "@/components/datatable/data-table-column-header"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image"
import Link from "next/link"
import { title } from "process"

// Assuming the Product type now includes title, description, price, pictureUrl, and category
export type Product = {
  id: string
  title: string
  description: string
  price: number
  pictureUrl: string
  category: string
  thumbnail: string
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Title" />
  },
  {
    accessorKey: "description",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Description" />
  },
  {
    accessorKey: "price",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Price" />,
    enableSorting: true // Enable sorting by price
  },
  {
    accessorKey: "pictureUrl",
    // header: ({ column }) => <DataTableColumnHeader column={column} title="Picture" />
    header: "Picture",
    cell: ({ row }) => (
      <Image src={row.original.thumbnail} width={100} height={100} alt="Product Image" />
    )
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />
    // header: "Category"
  },
  {
    id: "detail", // id is used instead of accessorKey because this column doesn't correspond directly to a single data field
    header: "Details",
    cell: ({ row }) => (
      <Link href={`/products/${row.original.id}`} className="text-blue-600 hover:text-blue-800">
        <Button>View Details</Button>
      </Link>
    )
  }
]
