import React, { useState, useContext, createContext } from 'react'
import { Product, ProductFormType, ProductRequest } from '../models/productModel'



export const ProductFormContext = createContext<ProductFormType | null>(null)
export const useProductFormContext = () => { return useContext(ProductFormContext)}

interface ProductProviderProp { children: any }

const ProductFormProvider = ({children} : ProductProviderProp) => {
    
    const url = 'http://localhost:5000/api/products'
    const DEFAULT_VALUES: Product = { articleNumber: '', tag: '', imageName: '', description: '', name: "", category: '', price: 0 }
    const REQUEST_DEFAULT_VALUES: ProductRequest = { tag: '', imageName: '', description: '', name: "", category: '', price: 0 }
    const [product, setProduct] = useState<Product>(DEFAULT_VALUES)
    const [productRequest, setProductRequest] = useState<ProductRequest>(REQUEST_DEFAULT_VALUES)
    const [products, setProducts] = useState<Product[]>([])    
    
    const createProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await fetch(`${url}`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productRequest)
            })
            if (res.status !== 201) {
                throw new Error(res.statusText)
            }
            setProductRequest(DEFAULT_VALUES)
        } catch (e) {
            console.log(e)
        }
    }

    const updateProduct = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await fetch(`${url}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        if (result.status === 200) {
            setProduct(await result.json())
        }
    }

    const removeProduct = async (articleNumber: string) => {

    }

    const getProduct = async (articleNumber?: string) => {
        const result = await fetch(`${url}/${articleNumber}` )
        
        if (result.status === 200)
            setProduct(await result.json())
    }
    
    const getProducts =async () => {
        const result = await fetch(`${url}` )
        
        if (result.status === 200)
        setProducts(await result.json())
    }

    return (
        <ProductFormContext.Provider value={{/* getProduct, getProducts, */ product, setProduct, productRequest, setProductRequest, products, setProducts, createProduct, updateProduct, removeProduct}}> 
            {children}
        </ProductFormContext.Provider>
    )

}

export default ProductFormProvider