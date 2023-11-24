import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://the-food-nest-server.vercel.app",
});
export default function useAxiosPublic() {
  return axiosPublic;
}
