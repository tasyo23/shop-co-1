import NotFound from "@/app/not-found";
import { Product } from "@/types/product";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;
const api = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

export async function getProducts(count = 5): Promise<Product[] | null> {
  try {
    const result = await api.get<Array<Product>>(
      `/products?offset=0&limit=${count}`,
      {}
    );
    return result.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getProductsTopselling(
  count = 5
): Promise<Product[] | null> {
  try {
    const result = await api.get<Array<Product>>(
      `/products?offset=6&limit=${count}`,
      {}
    );
    return result.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}
