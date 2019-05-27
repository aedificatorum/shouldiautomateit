import React, { useState, useEffect } from "react";

const ShareModal = ({ url, id }) => {
  const urlInputId = `${id}-share-url`;
  const [copied, setCopied] = useState(false);

  const shareButtonClick = () => {
    const shareUrl = document.getElementById(urlInputId);
    shareUrl.select();
    setCopied(true);
    document.execCommand("copy");
  };

  return (
    <div id={id} className="modal">
      <div className="modal-content">
        <h4>Share</h4>
        <input type="text" id={urlInputId} value={url} readOnly />
      </div>
      <div className="modal-footer">
        <button
          className="waves-effect waves-green btn-flat"
          onClick={shareButtonClick}
        >
          {copied ? "Copied" : "Copy to Clipboard"}
        </button>
      </div>
    </div>
  )
};

export default ShareModal;