"use client"
import * as React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // Import carousel styles
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription
} from "@/components/ui/card" // Adjust the import path as necessary

export default function Product({
  product
}: {
  product: {
    id: string
    title: string
    description: string
    price: number
    images: string[]
    available: boolean
  }
}) {
  return (
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel showThumbs={false} autoPlay infiniteLoop emulateTouch showStatus={false}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Product Image ${index + 1}`} className="rounded-lg" />
            </div>
          ))}
        </Carousel>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-lg font-semibold">Price: ${product.price}</p>
        <div className="ml-auto">
          {product.available ? (
            <span className="text-green-500">Available</span>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
