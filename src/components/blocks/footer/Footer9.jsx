import React from "react";
import { useRouter } from "next/router";
import Popup4 from "../popup/Popup4";
import  Popup5  from "../popup/Popup5";
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
        style={{ backgroundColor: " #0e5d6E " }}
      >
        <div className="container py-5 ">
          <div className="row text-center">
            {/* Privacy Policy */}
            <div
              className="col-md-4 d-flex flex-column align-items-center"
              style={{ color: "white" }}
            >
              <ul className="list-unstyled mb-0" style={{ color: " #ffffff", fontFamily:'Cormorant'}}>
                <li>
                 
                    <Popup4/>
                  
                 
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
                 <Popup5/>
                </li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 text-center" style={{color:'#eab085'}}>
              <p className="mb-0" >© 2024 sowilo. All rights reserved.</p>
              <p>
                Developed by{" "}
                <a
                  href="http://isparxinfotech.com"
                  style={{ color: "#eab085", textDecoration: "none" }}
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
