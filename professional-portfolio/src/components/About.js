import React from 'react';

export default (function About () {
    return(
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-black mb-4">Who am I?</h2>
                        <p className="text-black-50">
                            I am
                        </p>
                    </div>
                </div>
                <img className="img-fluid" src="./Marcus.jpg" alt="head shot of Marcus" />
            </div>
        </section>
    )
})