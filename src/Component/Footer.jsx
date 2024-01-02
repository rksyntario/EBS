import React from "react";
import '../App.css';
import logo from "../images/drop logo.svg";

const Footer = () => {
    return (
        <>

{/* <hr class="my-3" > */}
    <section className="p-3 pt-0">

        <div className="container">
        <div className="row d-flex justify-content-between ">
            <div className="col-lg-4">
        <img src={logo} alt="logo" className="footer-img" />
        <h1><a className="navbar-brand fs-2 fw-bolder" href="#">EBS</a></h1>
        </div>



        <div class="col-lg-8">
                <a class="btn btn-outline-light btn-floating m-1 text-black fs-5" role="button">
                    <i class="fab fa-facebook-f"></i>
                    </a>
                <a class="btn btn-outline-light btn-floating m-1 text-black fs-5" role="button">
                    <i class="fab fa-twitter"></i>
                    </a>
                <a class="btn btn-outline-light btn-floating m-1 text-black fs-5" role="button">
                    <i class="fab fa-google"></i>
                    </a>
                <a class="btn btn-outline-light btn-floating m-1 text-black fs-3" role="button">
                    <i class="fab fa-instagram"></i>
                    </a>
            </div>
            </div>
            </div>
<hr />
            <div class="col-12 text-center">
                <p>Copyrights 2023, EBS,All rights reserved</p>
            </div>
    </section>


    <section className="footer">
<div className="container d-flex justify-content-between">
    <div className="row d-flex justify-content-between">
        <div className="logo d-flex">
        <img src={logo} alt="logo" className="footer-img" />
        <h1><a className="navbar-brand fs-2 fw-bolder" href="#">EBS</a></h1>
        </div>
        <div className="footer-right">
        <div className="icons">
        <a class="btn btn-outline-light btn-floating m-1 text-black fs-5" role="button">
                    <i class="fab fa-facebook-f"></i>
                    </a>
                <a class="btn btn-outline-light btn-floating m-1 text-black fs-5" role="button">
                    <i class="fab fa-twitter"></i>
                    </a>
                <a class="btn btn-outline-light btn-floating m-1 text-black fs-5" role="button">
                    <i class="fab fa-google"></i>
                    </a>
                <a class="btn btn-outline-light btn-floating m-1 text-black fs-3" role="button">
                    <i class="fab fa-instagram"></i>
                    </a>
        </div>
        </div>
    </div>
</div>
    </section>

    </>

    );
}

export default Footer;
