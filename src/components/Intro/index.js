import React from "react";

export default function Intro() {
  return (
    <div className="row intro-container">
      <div className="col-6">
        <h1 className="intro-title my-4 text-white">
          Hi, I’m Alyvia. I help my clients succeed online.
        </h1>
        <p className="fs-4 mb-5 text-white">
          I will handle your website design and production, social media
          accounts and digital advertisements for you, at an affordable price.
        </p>
        <a className="intro-button" href="#">
          Contact Me
        </a>
      </div>
      <div className="col-6">
        <img className="intro-img" src="/images/hero.png" alt="intro" />
      </div>
    </div>
  );
}
