import { fetchProductById } from "@/services/product-services"
import Product from "./product"

export default async function Page({ params }: { params: { id: string } }) {
  const product = await fetchProductById(Number(params.id))
  return (
    <>
      <div className="container py-10">
        <Product product={product} />
      </div>
    </>
  )
}
