import React, { Component } from "react";
import _ from "lodash";

class RatingCard extends Component {
  state = {
    currentRate: null,
  };
  render() {
    return (
      <div className="card">
        <div className="card-container">
          <section className="icon">
            <img src="./images/icon-star.svg" alt="icon" />
          </section>
          <section className="text">
            <h2>How did we do?</h2>
            <p>
              Please let us know how we did with yout support request.All
              feedback is appreciated to help us improve our offering!
            </p>
          </section>
          <section className="selector">
            <ul className="select-items">
              {_.range(1, 6).map((i) => (
                <li key={i} className="item">
                  {i}
                </li>
              ))}
            </ul>
          </section>
          <section className="btn">
            <button className="btn">SUBMIT</button>
          </section>
        </div>
      </div>
    );
  }
}

export default RatingCard;
