import axios from "axios"

const URL = "https://dummyjson.com"

const Axios = () => {
  return axios.create({
    baseURL: `${URL}`,
    headers: {
      "Cache-Control": "no-cache"
    }
  })
}
export default Axios
