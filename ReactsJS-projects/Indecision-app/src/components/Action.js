import React from 'react';

// REUSABLE ITEM IN OTHER PIECES OF CODE
const Action = (props) => (
  <div>
    <button
      className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}
    >
      What should I do?
      </button>
  </div>
);

export default Action