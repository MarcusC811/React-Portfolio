import React, { useState } from 'react';

export default (function Jumbotron () {
    return(
        <header className="jumbotron">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Marcus Carlough</h1>
                        <h2 className="job-title mx-auto mt-2 mb-5">Junior Full Stack Developer</h2>
                        <a className="btn btn-primary" href="#about">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
    )
})