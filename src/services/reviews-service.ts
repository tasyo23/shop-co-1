import { Review } from "@/types/review";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const api = axios.create({
  timeout: 5000,
});
export async function getReviews(): Promise<Review[] | null> {
  try {
    const result = await api.get<Review[]>(
      "https://my.api.mockaroo.com/reviews.json?key=3d925f80"
    );
    return result.data;
  } catch (e) {
    return null;
  }
}
