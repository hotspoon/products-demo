"use client"

import Image from "next/image"
import React, { useState, useEffect } from "react"

// Assuming Product type is defined elsewhere or you can define it here
type Product = {
  id: string
  title: string
  description: string
  price: number
  category: string
  images: string[]
  thumbnail: string
}

type ProductListProps = {
  products: Product[]
}

function ProductList({ products }: ProductListProps) {
  console.log(products)
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filterCategory, setFilterCategory] = useState<string>("")
  const [sortOrder, setSortOrder] = useState<string>("asc")

  useEffect(() => {
    let processedProducts = products

    // Filter by category if filterCategory is not empty
    if (filterCategory) {
      processedProducts = processedProducts.filter((product) => product.category === filterCategory)
    }

    // Sort by price
    processedProducts.sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price))

    setFilteredProducts(processedProducts)
  }, [products, filterCategory, sortOrder])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {filteredProducts.map((product) => (
        <div key={product.id} className="card">
          <Image
            src={product.images.length > 0 ? product.images[0] : product.thumbnail}
            alt={product.title}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList
