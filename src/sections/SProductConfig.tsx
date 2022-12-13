import React from 'react'
import ProductCreate from '../components/ProductCreate'
import ProductUpdate from '../components/ProductUpdate'
import ProductDelete from '../components/ProductDelete'


const SProductConfig: React.FC = () => {
    return (
        <section className="product-config">
            <div className="_container">
                <ProductCreate />
                {/* <ProductUpdate /> */}
                <ProductDelete />
            </div>
        </section>
    )
}

export default SProductConfig