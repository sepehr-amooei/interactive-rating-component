import React from "react";

const MassageCard = () => {
  return (
    <div className="card">
      <div className="card-container massage-card">
        <section>
          <img src="./images/illustration-thank-you.svg" alt="" />
        </section>
        <section>
          <p className="resault">you selected 4 out of 5</p>
        </section>
        <section className="text center-text">
          <h2>Thank you!</h2>
          <p>
            we appreciate you taking the time to give a rating.if you ever need
            more support, don't hesitate to get in touch!
          </p>
        </section>
      </div>
    </div>
  );
};

export default MassageCard;
