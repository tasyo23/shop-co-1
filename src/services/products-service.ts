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
      `/products?_start=0&_limit=${count}`,
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
      `/products?_start=4&_limit=${count}`,
      {}
    );
    return result.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getProduct(id: number): Promise<Product | null> {
  try {
    const result = await api.get<Product>(`/products/${id}`);
    return result.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function deleteBadProducts(start: number, finish: number) {
  for (let i = start; i <= finish; i++) {
    try {
      const result = await api.delete(`/products/${i}`);
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
}
