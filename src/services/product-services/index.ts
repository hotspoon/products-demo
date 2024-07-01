import Axios from "@/lib/axiosInstance"

// Function to fetch all products
async function fetchProducts() {
  try {
    const response = await Axios().get("/products?limit=0")
    return response.data.products // Assuming the API returns an object with a 'products' array
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error // Rethrow the error for further handling if needed
  }
}

// Function to fetch a single product by ID
async function fetchProductById(productId: number) {
  try {
    const response = await Axios().get(`/products/${productId}`)
    return response.data // Assuming the API returns a product object
  } catch (error) {
    console.error(`Error fetching product with ID ${productId}:`, error)
    throw error // Rethrow the error for further handling if needed
  }
}

// Function to fetch product categories and format them
async function fetchProductCategories() {
  try {
    const response = await Axios().get("/products/category-list")
    const categories = response.data // Assuming the API returns an object with a 'categories' array
    return categories.map((category: string) => ({
      value: category.toLowerCase(), // Convert to lowercase for value
      label: category.charAt(0).toUpperCase() + category.slice(1) // Capitalize the first letter for label
    }))
  } catch (error) {
    console.error("Error fetching product categories:", error)
    throw error // Rethrow the error for further handling if needed
  }
}

export { fetchProducts, fetchProductById, fetchProductCategories }
