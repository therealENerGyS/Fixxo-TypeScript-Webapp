import React from 'react'
import { useProductFormContext } from '../contexts/ProductFormContext'
import { ProductFormType } from '../models/productModel'

const ProductCreate = () => {
    const { productRequest, setProductRequest, createProduct } = useProductFormContext() as ProductFormType 

    return (
        <form className="product-create">
            <h2>Create Product</h2>
            <input value={productRequest.name} onChange={(e) => setProductRequest({ ...productRequest, name: e.target.value })} type="text" placeholder="Enter product name" />
            <input value={productRequest.category} onChange={(e) => setProductRequest({ ...productRequest, category: e.target.value })} type="text" placeholder="Enter product category" />
            <input value={productRequest.description} onChange={(e) => setProductRequest({ ...productRequest, description: e.target.value })} type="text" placeholder="Enter product description" />
            <input value={productRequest.price} onChange={(e) => setProductRequest({ ...productRequest, price: e.target.valueAsNumber })} type="text" placeholder="Enter product price" />
            <input value={productRequest.imageName} onChange={(e) => setProductRequest({ ...productRequest, imageName: e.target.value })} type="text" placeholder="Enter product image url" />
            <button type="submit" className="btn-theme btn-red" onSubmit={createProduct}>Create Product</button>
        </form>
    )
}

export default ProductCreate