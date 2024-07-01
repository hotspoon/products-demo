import Image from "next/image"

export default function Home() {
  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4 text-center">
        <h1>Home Page</h1>
        {/* go to product page */}
        <a href="/products" className="text-blue-600 underline">
          Go to Product Page
        </a>
      </div>
    </div>
  )
}
