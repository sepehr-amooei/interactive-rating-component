import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

class RatingCard extends Component {
  state = {
    currentRate: null,
  };
  handleSelect = (rate) => {
    const currentRate = rate;
    this.setState({ currentRate });
  };
  render() {
    const { currentRate } = this.state;
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
          <section>
            <ul className="select-items">
              {_.range(1, 6).map((i) => (
                <li
                  key={i}
                  onClick={() => this.handleSelect(i)}
                  className={i === currentRate ? "item selected" : "item"}
                >
                  {i}
                </li>
              ))}
            </ul>
          </section>
          <section>
            <Link
              to={`/${currentRate}`}
              className={currentRate ? "btn" : "btn disabled"}
            >
              SUBMIT
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default RatingCard;
