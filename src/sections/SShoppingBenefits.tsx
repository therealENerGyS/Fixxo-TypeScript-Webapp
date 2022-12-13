import React from 'react'
import CShoppingBenefit from '../components/CShoppingBenefit'

const SShoppingBenefits = () => {
    return (
        <section className="shopping-benefits">
            <div className="_container">
                <CShoppingBenefit icon="fa-regular fa-phone-office" title="Customer Support" />
                <CShoppingBenefit icon="fa-regular fa-credit-card" title="Secured Payment" />
                <CShoppingBenefit icon="fa-regular fa-truck" title="Free Home Delivery" />
                <CShoppingBenefit icon="fa-regular fa-truck" title="30 Day Retuers" />
            </div>
        </section>
    )
}

export default SShoppingBenefits