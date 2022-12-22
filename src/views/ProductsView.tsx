import React, { useEffect } from 'react'
import SFooter from '../sections/SFooter'
import SMainMenu from '../sections/SMainMenu'
import SCurrentPageLocation from '../sections/SCurrentPageLocation'
import SProductGrid from '../sections/SProductGrid'
import { useProductContext } from '../contexts/ProductContext'
import { ProductContextType } from '../models/productModel'

const ProductsView: React.FC = () => {
  const { products, getProducts } = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <SMainMenu />
      <SCurrentPageLocation currentPage="Products" />
      <SProductGrid title="Products" items={products} />
      <SFooter />
    </>
  )
}

export default ProductsView