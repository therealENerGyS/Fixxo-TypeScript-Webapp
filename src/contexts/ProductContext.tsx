import React, { useContext, useState } from "react"
import { createContext } from 'react'
import { Product, ProductContextType } from '../models/productModel'

interface ProductProviderType {
    children: any
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {
    const EMPTY_PRODUCT: Product = { tag: '', articleNumber: '', description: '', name: '', category: '', price: 0, imageName: '' }
    const baseUrl: string = 'http://localhost:5000/api/products'

    const [product, setProduct] = useState<Product>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<Product[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
    const [twoForProducts, setTwoForProducts] = useState<Product[]>([])
    const [topProducts, setTopProducts] = useState<Product[]>([])

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }
    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }
    const getFeaturedProducts = async (take: number = 0) => {
        let url = `${baseUrl}/featured`
        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setFeaturedProducts(await res.json())
    }
    const getTwoForProducts = async (take: number = 0) => {
        let url = `${baseUrl}/twofor`
        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setTwoForProducts(await res.json())
    }
    const getTopProducts = async (take: number = 0) => {
        let url = `${baseUrl}/top`
        if (take !== 0)
            url += `/${take}`

        const res = await fetch(url)
        setTopProducts(await res.json())
    }

    return <ProductContext.Provider value={{ product, products, featuredProducts, twoForProducts, topProducts, getProduct, getProducts, getFeaturedProducts, getTwoForProducts, getTopProducts }}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider