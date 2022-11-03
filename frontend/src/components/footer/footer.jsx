

import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link to={'contact-us'} className=" px-2 text-muted">Contact Us</Link></li>
      <li className="nav-item"><Link to={'faqs'} className=" px-2 text-muted">Faqs</Link></li>
      <li className="nav-item"><Link to={'about-us'} className=" px-2 text-muted">About</Link></li>
      <li className="nav-item"><Link to={'blog'} className=" px-2 text-muted">Blog</Link></li>
    </ul>
    <p className="text-center text-muted">&copy; 2022 devgauge, Inc</p>
  </footer>
</div>
    );
}

