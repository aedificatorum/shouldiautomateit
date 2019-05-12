import React from "react";

const Pluralize = ({ count, addition = "s", children }) => {
  return (
    <React.Fragment>
      {count !== 1 ? children + addition : children}
    </React.Fragment>
  );
};

export default Pluralize;
