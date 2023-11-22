import React from "react";

class MenuItem extends React.Component {
  render() {
    const { image, name, price } = this.props;

    return (
      <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})` }}> </div>
        <h1> {name} </h1>
        <p> ${price} </p>
      </div>
    );
  }
}

export default MenuItem;
