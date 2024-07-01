import { DataTable } from "@/components/datatable/data-table"
import { fetchProductCategories, fetchProducts } from "@/services/product-services"
import React from "react"
import { columns } from "./columns"
import ProductList from "./_components/ProductList"

async function Page() {
  const products = await fetchProducts()
  const categories = await fetchProductCategories()
  //   console.log(categories)
  return (
    <div className="container py-10">
      <h1 className="text-center text-4xl font-bold">Product Page</h1>
      <div className=" mx-auto py-10">
        <DataTable columns={columns} data={products} categories={categories} />
        {/* <ProductList products={products} /> */}
      </div>
    </div>
  )
}

export default Page
