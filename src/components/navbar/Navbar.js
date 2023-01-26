import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { BsCart2 } from "react-icons/bs";
import Cart from "../cart/Cart";

function Navbar() {
    const [openCart, setOpenCart] = useState(false);
    return (
        <>
            <div className="Navbar">
                <div className="container nav-container">
                    <div className="nav-left">
                        <ul className="link-group">
                            <li className="hover-link">
                                <Link
                                    className="link"
                                    to="/products?category=marvel"
                                >
                                    MRVEL
                                </Link>
                            </li>
                            <li className="hover-link">
                                <Link
                                    className="link"
                                    to="/products?category=dc"
                                >
                                    DC
                                </Link>
                            </li>
                            <li className="hover-link">
                                <Link
                                    className="link"
                                    to="/products?category=manga"
                                >
                                    MANGA
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-center">
                        <Link to="/">
                            <h1 className="banner">Comic Library</h1>
                        </Link>
                    </div>
                    <div className="nav-right">
                        <div
                            className="nav-cart hover-link"
                            onClick={() => setOpenCart(!openCart)}
                        >
                            <BsCart2 className="icon" />
                            <span className="cart-count center">99+</span>
                        </div>
                    </div>
                </div>
            </div>
            {openCart && <Cart onClose={() => setOpenCart(false)} />}
        </>
    );
}

export default Navbar;
