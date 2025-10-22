"use client";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import "./navbar.css";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Left: Logo */}
        <Link href="/" className="navbar-brand fw-bold logo">
          Studio
        </Link>

        {/* Center: Nav Links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link href="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about-us" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact-us" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Cart + Login */}
        <div className="d-flex align-items-center gap-3 position-relative">
          <Link href="/addtocart" className="position-relative">
            <FaCartShopping className="fs-4 cart-icon" />
            {cartCount > 0 && (
              <span
                className="cart-count-badge"
              >
                {cartCount}
              </span>
            )}
          </Link>
          <Link href="/login">
            <button className="loginBtn">Login</button>
          </Link>
        </div>

        {/* Toggler (Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}
