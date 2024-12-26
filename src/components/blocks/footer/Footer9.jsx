import React from "react";
import { useRouter } from "next/router";

const Footer9 = () => {
  const router = useRouter();

  // Function to navigate to different pages
  const navigateToPage = (path) => {
    router.push(path);
  };

  return (
    <>
      {/* Footer Section */}
      <footer
        className="bg-teal-300 text-white"
        style={{ backgroundColor: "rgb(38, 108, 102)" }}
      >
        <div className="container py-5 ">
          <div className="row text-center">
            {/* Privacy Policy */}
            <div
              className="col-md-4 d-flex flex-column align-items-center"
              style={{ color: "white" }}
            >
              <ul className="list-unstyled mb-0" style={{ color: " #ffffff" }}>
                <li>
                  <button
                    onClick={() => navigateToPage("/privacy-policy")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    Privacy Policy & Terms and Condition
                  </button>
                </li>
              </ul>
            </div>

            {/* Logo */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <img
                src="/img/sowilo1.png"
                alt="hello"
                style={{
                  width: "200px",
                  background: "none",
                  border: "none",
                }}
              />
            </div>

            {/* Contact Us */}
            <div className="col-md-4 d-flex flex-column align-items-center">
              <ul className="list-unstyled mb-0 color-white">
                <li>
                  <button
                    onClick={() => navigateToPage("/contact-us")}
                    style={{
                      background: "none",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    CONTACT US
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center">
              <p className="mb-0">© 2024 sowilo. All rights reserved.</p>
              <p>
                Developed by{" "}
                <a
                  href="http://isparxinfotech.com"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Isparxinfotech.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer9;
