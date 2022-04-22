import React from "react";

export default function Navbar() {
  return (
    <div className="row align-content-center justify-content-center p-3 bg-white">
      <div className="col-8 ps-5">
        <a href="#">
          <img className="logo" src="/images/logo.svg" alt="Logo" />
        </a>
      </div>
      <div className="col-4 d-flex align-items-center justify-content-center">
        <div>
          <a className="mx-2" href="#">
            FAQ
          </a>
          <a className="mx-2" href="#">
            Hakkımızda
          </a>
          <a className="mx-2" href="#">
            Bize Ulaşın
          </a>
        </div>
      </div>
    </div>
  );
}
