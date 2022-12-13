import React from 'react'
import CProductCard from './CProductCard'
import { Product } from '../models/productModel'

interface ITopProductProps {
    title: string
    items: Product[]
}

const CTopProducts: React.FC<ITopProductProps> = ({title, items}) => {
    return (
        <>
            <div className="grid">
                <h1 className="product-h1">{title}</h1>
                {
                    items.map(product => <CProductCard key={product.articleNumber} item={product} />)
                }
            </div>
        </>
    )
}

export default CTopProducts