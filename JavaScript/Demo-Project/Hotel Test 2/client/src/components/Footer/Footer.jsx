import "./Footer.css";

const Footer = ({ close }) => {
  return (
    <>
      <div className="model-wrapper" onClick={close}></div>
      <div className="footer ">
        <div className="sb_footer section_padding">
          <div className="sb__footer-links">
            <div className="sb__footer-links_div">
              <h4 className="font-semibold">Support</h4>
              <a className="a" href="/employer">
                <p className="custom-underline">Help Center</p>
              </a>
              <a className="a" href="/healthplan">
                <p className="custom-underline">Get help with a safety issue</p>
              </a>
              <a className="a" href="/employer">
                <p className="custom-underline">Anti-discrimination</p>
              </a>
              <a className="a" href="/employer">
                <p className="custom-underline">Cancellation options</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4 className="font-semibold">Hosting</h4>
              <a className="a" href="/employer">
                <p className="custom-underline">Four Seasons your home</p>
              </a>
              <a className="a" href="/employer">
                <p className="custom-underline">Hosting Resources</p>
              </a>
              <a className="a" href="/employer">
                <p className="custom-underline">Community forum</p>
              </a>
              <a className="a" href="/employer">
                <p className="custom-underline">Hosting responsibly</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4 className="font-semibold">Four Seasons</h4>
              <a className="a" href="/about">
                <p className="custom-underline">Newsroom</p>
              </a>
              <a className="a" href="/press">
                <p className="custom-underline">Careers</p>
              </a>
              <a className="a" href="/career">
                <p className="custom-underline">Newfeatures</p>
              </a>
              <a className="a" href="/contact">
                <p className="custom-underline">Investors</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4 className="font-semibold">Coming soon on</h4>
              <div className="socialmedia">
                {/* <p><img src={fb} alt="facebook"/></p>
          <p><img src={twitter} alt="twiiter"/></p>
          <p><img src={linkedin} alt="linkedin"/></p>
          <p><img src={insta} alt="instagram"/></p> */}
              </div>
            </div>
          </div>
          <hr className="HR"></hr>
          <div className="sb__footer-below">
            <div className="sb__footer-copyright">
              <p>@{new Date().getFullYear()} CodeInn.All right reserved.</p>
            </div>
            <div className="sb__footer-below-links">
              <a href="/terms">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>
              <a href="/privacy">
                <div>
                  <p>Privacy</p>
                </div>
              </a>
              <a href="/security">
                <div>
                  <p>Security</p>
                </div>
              </a>
              <a href="/cookie">
                <div>
                  <p>Cookie Declaration</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
