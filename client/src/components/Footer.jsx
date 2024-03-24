import React, { PureComponent } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="My-Foot">
          <div className="footer-in">
            <div className="foot">
              <ul>
                <p>
                  <Link to="/" className="hui">
                    Help Center
                  </Link>
                </p>
                {/* <p><a href="abc">Investor Relation</a></p>
                <p><a href="abc">Privacy</a></p>
                <p><a href="abc">Speed Test</a></p>
                <p><a href="abc">Netflix India </a></p> */}
              </ul>
            </div>
            <div className="foot">
              <ul>
                <p>
                  <Link to="/" className="hui">
                    Privacy
                  </Link>
                </p>
                {/* <p><a href="abc">Job</a></p>
                <p><a href="abc">Cookies Preferences</a></p>
                <p><a href="abc">Leagal Notice</a></p> */}
              </ul>
            </div>
            <div className="foot">
              <ul>
                <p>
                  <Link to="/" className="hui">
                    About
                  </Link>
                </p>
                {/* <p><a href="abc">Ways to Watch</a></p>
                <p><a href="abc">Corporate Information</a></p>
                <p><a href="abc">Only on Netflix</a></p> */}
              </ul>
            </div>
            <div className="foot">
              <ul>
                {/* <p><a href="abc">Media Center</a></p>
                <p><a href="abc">Terms of Use</a></p> */}
                <p>
                  <Link to="/" className="hui">
                    Contact Us
                  </Link>
                </p>
              </ul>
            </div>
          </div>

          <div className="footer-copyright">
            @ 2024 BitProphecy. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
}
