import React from 'react'
import { useProductFormContext } from '../contexts/ProductFormContext'
import { ProductFormType } from '../models/productModel'

const ProductUpdate = () => {
    const { product, setProduct, updateProduct } = useProductFormContext() as ProductFormType
  return (
    <form className="product-update">
    <h2>Update Product</h2>
    <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="text" placeholder="Enter product article number" />
    <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" placeholder="Update existing name" />
    <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" placeholder="Update existing category" />
    <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type="text" placeholder="Update existing description" />
    <input value={product.price} onChange={(e) => setProduct({...product, price: e.target.valueAsNumber})} type="text" placeholder="Update existing price" />
    <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" placeholder="Update existing image url" />
    <button type="submit" className="btn-theme btn-red" onSubmit={updateProduct}>Update Product</button>
</form>
  )
}

export default ProductUpdate