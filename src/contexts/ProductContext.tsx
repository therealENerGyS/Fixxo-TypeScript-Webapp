import React, { useContext, useState, createContext } from "react"
import { Product, ProductContextType, ProductRequest } from '../models/productModel'

interface ProductProviderType {
    children: any
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }

const ProductProvider: React.FC<ProductProviderType> = ({ children }) => {
    const EMPTY_PRODUCT: Product = { tag: '', articleNumber: '', description: '', name: '', category: '', price: 0, imageName: '' }
    const EMPTY_PRODUCT_REQUEST: ProductRequest = { tag: '', description: '', name: '', category: '', price: 0, imageName: '' }
    const baseUrl: string = 'http://localhost:5000/api/products'

    const [product, setProduct] = useState<Product>(EMPTY_PRODUCT)
    const [productRequest, setProductRequest] = useState<ProductRequest>(EMPTY_PRODUCT_REQUEST)
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

    const createProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productRequest)
        })
        if (res.status === 201)
            setProductRequest(EMPTY_PRODUCT_REQUEST)
        else
            throw new Error(res.statusText)
    }
    
    const updateProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await fetch(`${baseUrl}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        if (res.status === 200)
            setProduct(await res.json())
    }

    const deleteProduct = async (articleNumber: string) => {
        const res = await fetch(`${baseUrl}/${articleNumber}`, {
            method: 'delete'
        })
        if (res.status === 204)
            setProduct(EMPTY_PRODUCT)
    }

    return <ProductContext.Provider value={{ productRequest, product, products, featuredProducts, twoForProducts, topProducts, getProduct, getProducts, getFeaturedProducts, getTwoForProducts, getTopProducts, createProduct, updateProduct, deleteProduct }}>
        {children}
    </ProductContext.Provider>
}

export default ProductProvider