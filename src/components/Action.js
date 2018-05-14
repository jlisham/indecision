import React from "react";

const Action = props => (
  <div>
    <button
      className="button button-big"
      disabled={!props.hasOptions}
      onClick={props.selOption}
    >
      what should i do?
    </button>
  </div>
);

export default Action;
