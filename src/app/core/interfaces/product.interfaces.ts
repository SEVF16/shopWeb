import { Category } from "./category.ionterfaces"
export interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
  cantidad: number
}
