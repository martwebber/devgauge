

import React from "react";

export default function Footer(){
    return(
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className=" px-2 text-muted">Contact us</a></li>
      <li className="nav-item"><a href="#" className=" px-2 text-muted">FAQs</a></li>
      <li className="nav-item"><a href="#" className=" px-2 text-muted">About</a></li>
      <li className="nav-item"><a href="#" className=" px-2 text-muted">Blog</a></li>
    </ul>
    <p className="text-center text-muted">&copy; 2022 devgauge, Inc</p>
  </footer>
</div>
    );
}