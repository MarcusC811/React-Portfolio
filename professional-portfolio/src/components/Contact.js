import React from 'react';

export default (function Contact () {
    return(
        <section className="contact-section bg-black" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fa-sharp fa-solid fa-calendar-days"></i>
                                <h4 className="text-uppercase m-0">calendly</h4>
                                <hr className="my-4 mx-auto" />
                                <a className="small text-black-50" href='https://calendly.com/marcuscarlough'>Book a session!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fa-solid fa-envelope"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto" />
                                <a className="small text-black-50" href="#!">marcuscarlough@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fa-solid fa-phone"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto" />
                                <a className="small text-black-50" href="tel:9197715340">+1 (919) 771-5340</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                            <i class="fa-brands fa-github"></i>
                                <h4 className="text-uppercase m-0">GitHub</h4>
                                <hr className="my-4 mx-auto" />
                                <a className="small text-black-50" href="https://github.com/MarcusC811">MarcusC811</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})