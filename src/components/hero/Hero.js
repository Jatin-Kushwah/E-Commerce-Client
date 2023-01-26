import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.scss";

function Hero() {
    const navigate = useNavigate();
    return (
        <div className="Hero">
            <div className="hero-content center">
                <h2 className="heading">Exclusive Comics and Mangas</h2>
                <p className="subheading">
                    Latest collections of your favourite Comics and Mangas.
                </p>
                <button
                    onClick={() => navigate("/category")}
                    className="cta btn-primary"
                >
                    Explore more
                </button>
            </div>
        </div>
    );
}

export default Hero;
