import React from "react";

const ShareButton = ({id}) => {
    let target = `#${id}`;

    return (
        <a className="share-button-float  modal-trigger" href={target}>
          <i className="fas fa-share-alt small my-button" />
        </a>
    )
}

export default ShareButton;