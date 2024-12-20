import { Link } from "react-router";

const IndexPage = () => {
    return (
        <div>
            <nav className="navbar sticky-top shadow-sm navbar-expand-lg navbar-light py-2">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img className="img-fluid" src="./images/logo.png" alt="" width="96px" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header01" aria-controls="header01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="header01">
                        <ul className="navbar-nav ms-auto mt-3 mt-lg-0 mb-3 mb-lg-0 me-4">
                            <li className="nav-item me-4"><a className="nav-link" href="#">About</a></li>
                            <li className="nav-item me-4"><a className="nav-link" href="#">Company</a></li>
                            <li className="nav-item me-4"><a className="nav-link" href="#">Services</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Testimonials</a></li>
                        </ul>
                        <div>
                            <Link className="btn mt-3 bg-gradient-primary" to="/register">
                                Start Sale
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>


            <section className="pb-5">
                <div className="container pt-2">
                    <div className="row align-items-center mb-5">
                        <div className="col-12 col-md-10 col-lg-5 mb-5 mb-lg-0">
                            <h2 className=" fw-bold mb-3">Elevate Your Sales Game with Our Powerful POS Application! </h2>
                            <p className="lead text-muted mb-4">Discover streamlined transactions, real-time inventory management, and actionable insights in one intuitive POS app.</p>
                            <div className="d-flex flex-wrap">
                                <Link className="btn bg-gradient-primary me-2 mb-2 mb-sm-0" to="/register/">
                                    Start Sale
                                </Link>
                                <Link className="btn bg-gradient-primary mb-2 mb-sm-0" to="/login/">
                                    Login
                                </Link>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-1">
                            <img className="img-fluid" src="./images/hero.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <section className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 mx-auto text-center">
                            <span className="text-muted">Happy Clients</span>
                            <p className="lead text-muted">Spotlight on Our Exceptional Client Success</p>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 p-3">
                            <div className="card px-0 text-center">
                                <img className=" card-img-top mb-3 w-100" src="./images/man.jpg" alt="" />
                                <h5>Danny Bailey</h5>
                                <p className="text-muted mb-4">CEO &amp; Founder</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-3">
                            <div className="card px-0 text-center">
                                <img className=" card-img-top mb-3 w-100" src="./images/man.jpg" alt="" />
                                <h5>Danny Bailey</h5>
                                <p className="text-muted mb-4">CEO &amp; Founder</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-3">
                            <div className="card px-0 text-center">
                                <img className=" card-img-top mb-3 w-100" src="./images/man.jpg" alt="" />
                                <h5>Danny Bailey</h5>
                                <p className="text-muted mb-4">CEO &amp; Founder</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-3">
                            <div className="card px-0 text-center">
                                <img className=" card-img-top mb-3 w-100" src="./images/man.jpg" alt="" />
                                <h5>Danny Bailey</h5>
                                <p className="text-muted mb-4">CEO &amp; Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />

            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-5 mb-5 mb-lg-0">
                            <h2 className="fw-bold mb-5">Reach Out to Us: Let's Connect and Explore Opportunities Together</h2>
                            <h4 className="fw-bold">Address</h4>
                            <p className="text-muted mb-5">1686 Geraldine Lane New York, NY 10013</p>
                            <h4 className="fw-bold">Contact Us</h4>
                            <p className="text-muted mb-1">hello@wireframes.org</p>
                            <p className="text-muted mb-0">+ 7-843-672-431</p>
                        </div>
                        <div className="col-12 col-lg-6 offset-lg-1">
                            <form action="#">
                                <input className="form-control mb-3" type="text" placeholder="Name" />
                                <input className="form-control mb-3" type="email" placeholder="E-mail" />
                                <textarea className="form-control mb-3" name="message" cols="30" rows="10" placeholder="Your Message..."></textarea>
                                <button className="btn bg-gradient-primary w-100">Action</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-5 bg-light">
                <div className="container text-center pb-5 border-bottom">
                    <a className="d-inline-block mx-auto mb-4" href="#">
                        <img className="img-fluid" src="./images/logo.png" alt="" width="96px" />
                    </a>
                    <ul className="d-flex flex-wrap justify-content-center align-items-center list-unstyled mb-4">
                        <li><a className="link-secondary me-4" href="#">About</a></li>
                        <li><a className="link-secondary me-4" href="#">Company</a></li>
                        <li><a className="link-secondary me-4" href="#">Services</a></li>
                        <li><a className="link-secondary" href="#">Testimonials</a></li>
                    </ul>
                    <div>
                        <a className="d-inline-block me-4" href="#">
                            <img src="./images/facebook.svg" />
                        </a>
                        <a className="d-inline-block me-4" href="#">
                            <img src="./images/twitter.svg" />
                        </a>
                        <a className="d-inline-block me-4" href="#">
                            <img src="./images/github.svg" />
                        </a>
                        <a className="d-inline-block me-4" href="#">
                            <img src="./images/instagram.svg" />
                        </a>
                        <a className="d-inline-block" href="#">
                            <img src="./images/linkedin.svg" />
                        </a>
                    </div>
                </div>
                <div className="mb-5"></div>
                <div className="container">
                    <p className="text-center">All rights reserved © Learn with Rabbil (LWR) 2023-2024</p>
                </div>
            </footer>
        </div>
    );
};

export default IndexPage;