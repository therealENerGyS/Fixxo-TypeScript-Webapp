import React, { createContext, useContext, useState } from "react";
import CShoppingCart from "../components/CShoppingCart";
import { Product } from '../models/productModel'
import { CartItem } from "../models/ShoppingCartModel";

interface ShoppingCartProviderType {
    children: any
}

export interface ShoppingCartContextType {
    items: CartItem[]
    totalQuantity: number
    increment: (cartItem: CartItem) => void
    decrement: (cartItem: CartItem) => void
    remove: (articleNumber: string) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null)
export const useShoppingCartContext = () => { return useContext(ShoppingCartContext) }

export const ShoppingCartProvider: React.FC<ShoppingCartProviderType> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([])
    const totalQuantity = items.reduce((quantity, item) => item.quantity + quantity, 0)

    const increment = (cartItem: CartItem) => {
        const { articleNumber, product } = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber) == null) {
                return [...items, { articleNumber, product, quantity: 1 }]
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    const decrement = (cartItem: CartItem) => {
        const { articleNumber } = cartItem

        setItems(items => {
            if (items.find(item => item.articleNumber === articleNumber)?.quantity === 1) {
                return items.filter(item => item.articleNumber !== articleNumber)
            }
            else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity - 1 }
                    }
                    else {
                        return item
                    }
                })
            }
        })
    }

    const remove = (articleNumber: string) => {
        setItems(items => { return items.filter(item => item.articleNumber !== articleNumber) })
    }

    return <ShoppingCartContext.Provider value={{ items, totalQuantity, increment, decrement, remove }}>
        {children}
        <CShoppingCart />
    </ShoppingCartContext.Provider>
}