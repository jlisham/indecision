import React from "react";

const Header = props => (
  <div>
    <h3>{props.title}</h3>
    {props.subTitle && <h4>{props.subTitle}</h4>}
  </div>
);

Header.defaultProps = {
  title: "Indecision"
  //subTitle:"silly lil app..."
};

export default Header;
