import React from "react"

const Pluralize = ({count, addition = "s", children}) => {
    return count !== 1 ? children + addition : children;
}

export default Pluralize