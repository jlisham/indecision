import React from "react";

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.selOption}>
        what should i do?
      </button>
    </div>
  );
};

export default Action;
