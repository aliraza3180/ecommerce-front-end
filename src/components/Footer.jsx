import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] text-sm gap-14 my-10 mt-40">
        <div>
          <img src={assets.logo} alt="" className="w-32 mb-5" />
          <p className="w-full md:w-1/2 text-gray-600">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <NavLink id="custom-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink id="custom-link" to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink id="custom-link" to="/">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink id="custom-link" to="/">Delivery</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="tel:+92 325 0573249">+92 325 0573249</a>
            </li>
            <li>
              <a href="mailto:aliraza.dev08@gmail.com">
                aliraza.dev08@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ greatstack.dev - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
