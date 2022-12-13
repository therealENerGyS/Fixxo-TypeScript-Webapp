import React from "react";
import CSpeciality from "../components/CSpeciality";

const SSpeciality = () => {
  return (
    <section className="speciality">
      <div className="_container">
        <div className="specials-background">
          <h2 className="specials-header">Our Speciality</h2>
          <div className="features">
            <CSpeciality title="Track Your Order" />
            <CSpeciality title="Make a Return" />
            <CSpeciality title="Request a Price Adjustment" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SSpeciality;
