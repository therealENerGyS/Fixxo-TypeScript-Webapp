import React from 'react'
import { NavLink } from 'react-router-dom'

const SProductDiscount = () => {
    return (
        <section className="product-discount-section">
            <div className="_container">
                <NavLink className="discount-link" to="/">
                    <h2 className="discount-text">Get 25% OFF at the Fixxo Selection - Shop Now!</h2>
                </NavLink>
            </div>
        </section>
    )
}

export default SProductDiscount