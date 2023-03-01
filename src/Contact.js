import React from "react";

function Contact() {
  return (
    <>
      <div style={{ backgroundColor: "#101820FF" }}>
        <div className="contact-container">Contact Us</div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-white">Follow us on:</h5>
              <div
                class="icons col-12"
                id="contact"
                style={{ transform: "none" }}
              >
                <div className="text-white">
                  <a href="https://github.com/Ragunath-Arjun/" target="_blank">
                    <span className="contact_fontsize">Github</span>
                  </a>
                  <br />
                </div>
                <div className="text-white">
                  <a
                    href="https://www.linkedin.com/in/ragunath-m-957ba2118/"
                    target="_blank"
                  >
                    <span className="contact_fontsize">LinkedIn</span>
                  </a>
                  <br />
                </div>
                <div className="text-white">
                  <a
                    href="https://www.instagram.com/ragunath_arjun/"
                    target="_blank"
                  >
                    <span className="contact_fontsize">Instagram</span>
                  </a>
                  <br />
                </div>
                <div className="text-white">
                  <a
                    href="https://www.facebook.com/ragunath.ragu.16/"
                    target="_blank"
                  >
                    <span className="contact_fontsize">Facebook</span>
                  </a>
                  <br />
                </div>
                <div className="text-white">
                  <a
                    href="https://www.linkedin.com/in/ragunath-m-957ba2118/"
                    target="_blank"
                  >
                    <span className="contact_fontsize">Twitter</span>
                  </a>
                  <br />
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-white">
              <span className="contact_fontsize">Address:</span>
              <address>
                #9,Door no.A2,
                <br />
                3rd cross street,Perunthalaivar kamaraj Nagar,
                <br />
                Perungudi,
                <br />
                Chennai-600096
                <br />
                Tamilnadu
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
