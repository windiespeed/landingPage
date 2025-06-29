import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="hero-section d-flex justify-content-end align-items-center">
      <div className="hero-text text-end pe-5">
        <h1 className="display-4">Designing your story</h1>
        <p className="lead">One element at a time</p>

        <br />
        <br />
        <br />

        <div className="text-center ctaButton">
          <p>😎 Portfolio is a current work in progress...</p>
          <p>Please check back soon!</p>
        </div>
      </div>
    </div>
  );
}
