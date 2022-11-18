import React from "react";

import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

function Testimonial() {

    const options = {
        loop: true,
        margin: 10,
        dots: false,
        navText: ["<div className='btn-nav'>&#8249;</div>", "<div className='btn-nav'>&#8250;</div>"],
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
                stagePadding: 250,
            }
        }
    };

    return (
        <>
            <section className="testimonial" id="testi">
                <div className="container-fluid">
                    <div className="testi-header">
                        <h2>Testimonial</h2>
                        <p>Berbagai review positif dari para pelanggan kami</p>
                    </div>
                    <ReactOwlCarousel className="owl-theme"{...options}>

                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src="asset/gambar/img_photo-1.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
                                                    molestiae. Doloribus architecto animi non ipsum omnis quae, dicta
                                                    nobis nam ducimus dolores tempora expedita magnam, voluptate fugiat
                                                    culpa aspernatur delectus.
                                                    </q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src="asset/gambar/img_photo-2.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
                                                molestiae. Doloribus architecto animi non ipsum omnis quae, dicta
                                                nobis nam ducimus dolores tempora expedita magnam, voluptate fugiat
                                                culpa aspernatur delectus.
                                                </q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src="asset/gambar/img_photo-2.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
                                                molestiae. Doloribus architecto animi non ipsum omnis quae, dicta
                                                nobis nam ducimus dolores tempora expedita magnam, voluptate fugiat
                                                culpa aspernatur delectus.</q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="card mb-3">
                                <div className="row">
                                    <div className="col-lg-3 m-auto text-center card-actor">
                                        <img src="asset/gambar/img_photo-2.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="card-body">
                                            <div className="font-10">
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                                <i className="uis uis-star text-success"></i>
                                            </div>
                                            <p className="card-text">
                                                <q>TLorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
                                                molestiae. Doloribus architecto animi non ipsum omnis quae, dicta
                                                nobis nam ducimus dolores tempora expedita magnam, voluptate fugiat
                                                culpa aspernatur delectus.
                                                </q>
                                            </p>
                                            <h5 className="card-title">John Dee 32, Bromo</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ReactOwlCarousel>
                </div>
            </section >
        </>
    );

}

export default Testimonial
