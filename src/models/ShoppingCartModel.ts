import { Product } from './productModel'

export interface CartItem {
    articleNumber: string
    product: Product
    quantity: number
}