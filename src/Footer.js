import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer blue-grey lighten-2">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h4 className="white-text" id="about">About</h4>
          <p className="grey-text text-lighten-4">Should I automate it? is designed for anyone interested to see when a
            manual
            process would benefit from being automated.</p>
        </div>
        <div className="col l4 offset-l2 s12">
          <h4 className="white-text">Links</h4>
          <ul>
            <a className="grey-text text-lighten-3" href="https://github.com/aedificatorum/shouldiautomateit"
                target="blank"><i className="fab fa-github small"></i></a>
            <a className="grey-text text-lighten-3" href="https://twitter.com/aedificatorum" target="blank"><i className="fab fa-twitter small"></i></a>
            <a className="grey-text text-lighten-3" href="#"><i className="fas fa-envelope small"></i></a>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright black">
      <div className="container">
        <img src="aedificatorum-logo.png" className="logo" alt="logo" />
        <span className="footer-built-by">
        Built by <a href="https://github.com/aedificatorum">Aedificatorum</a>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer;