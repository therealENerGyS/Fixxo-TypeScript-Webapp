import React from "react"
import showcase_1 from "../assets/images/header-img-l.svg"
import showcase_2 from "../assets/images/header-img-r.svg"

const SMainShowcase = () => {
  return (
    <section className="showcase">
    <div className="_container">
        <img src={showcase_1} alt="" />
        <div className="showcase-text">
        <h1 className="showcase-header">Sale Up<br />To 50% Off</h1>
        <p className="showcase-p">Online shopping free home delivery over $100</p>
        <button type="button" className="btn-theme btn-red">SHOP NOW</button>
        </div>
        <img src={showcase_2} alt="" />
    </div>
    </section>
  )
}

export default SMainShowcase