import React from 'react';

export default (function Projects () {
    return(
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-8"><img className="img-fluid mb-3 mb-lg-0" src="./Gig Genie.jpg" alt="..." /></div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="featured-text text-center text-lg-left">
                            <h4 className='text-white-50'> <a href='https://marcusc811.github.io/Gig-Genie/'> Gig Genie </a></h4>
                            <p className="text-white-50 mb-0">A web application that allows users to search and sign up for open mics / music venues in their area.</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="./Aniverse.jpg" alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white"><a href='https://aniverse-app.herokuapp.com/'> Aniverse </a></h4>
                                    <p className="mb-0 text-white-50">A full stack web application that allows others to post and chat in a forum and share your fav animes with other people around the world and discuss why your anime is better or worse while receiving new suggestions!</p>
                                    <hr className="d-none d-lg-block mb-0 ms-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="./Aniverse.jpg" alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Mountains</h4>
                                    <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                    <hr className="d-none d-lg-block mb-0 me-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})