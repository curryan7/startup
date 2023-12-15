import React from "react";

export function Finish(){
React.useEffect(() =>{
    window.addEventListener('DOMContentLoaded', event => {

        // Navbar shrink function
        var navbarShrink = function () {
            const navbarCollapsible = document.body.querySelector('#mainNav');
            if (!navbarCollapsible) {
                return;
            }
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink')
            } else {
                navbarCollapsible.classList.add('navbar-shrink')
            }
        };
    
        // Shrink the navbar 
        navbarShrink();
    
        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', navbarShrink);
    
        // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#mainNav');
        if (mainNav) {
            new bootstrap.ScrollSpy(document.body, {
                target: '#mainNav',
                rootMargin: '0px 0px -40%',
            });
        };
    
        // Collapse responsive navbar when toggler is visible
        const navbarToggler = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
            document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem) {
            responsiveNavItem.addEventListener('click', () => {
                if (window.getComputedStyle(navbarToggler).display !== 'none') {
                    navbarToggler.click();
                }
            });
        });


    
        // Activate SimpleLightbox plugin for portfolio items
        new SimpleLightbox({
            elements: '#portfolio a.portfolio-box'
        });
    
    });
    
    const fsubmit = document.getElementById("gohome")
    fsubmit.addEventListener("click", event => {
        event.preventDefault();
        window.location.href = "/";
            })

}
)
return(
<div id="page-top">
<header className="masthead">
            <div className="container px-4 px-lg-5 h-100">
                <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-8 align-self-end">
                        <h1 className="text-white font-weight-bold">Congratulations on finishing your poll!</h1>
                        <hr className="divider" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className="text-white-75 mb-5">Now you might be wondering, what happens next?</p>
                        <a className="btn btn-primary btn-xl" href="#about">Click Here</a>
                    </div>
                </div>
            </div>
        </header>
        <section className="page-section bg-primary" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 className="text-white mt-0">We've got what you need!</h2>
                        <hr className="divider divider-light" />
                        <p className="text-white-75 mb-4">You'll now be sent an email with your pair code. Send this code to your date to access the poll you created! You'll be notified when your date has filled out the poll through your email.</p>
                        <a className="btn btn-light btn-xl" href="#services">Tips on dating</a>
                        <button className="btn btn-light btn-xl" id="gohome" type="button">Create another poll</button>

                    </div>
                </div>
            </div>
        </section>
        <section className="page-section" id="services">
            <div className="container px-4 px-lg-5">
                <h2 className="text-center mt-0">We Gotchu!</h2>
                <hr className="divider" />
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2"><a href="https://au.reachout.com/articles/11-things-to-do-if-youre-feeling-lonely">Dating Article of the Month</a></h3>
                            <p className="text-muted mb-0">Learn about how to up your dating game through articles we bring to you!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2"><a href='https://www.16personalities.com/free-personality-test'>MBTI</a></h3>
                            <p className="text-muted mb-0">Learn more about yourself through this popular personality test</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2"><a href="https://www.instagram.com/">Follow us on Instagram!</a></h3>
                            <p className="text-muted mb-0">More content and tips found there!</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="mt-5">
                            <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                            <h3 className="h4 mb-2"><a href="https://www.everydayhealth.com/self-care/">Made with Love</a></h3>
                            <p className="text-muted mb-0">All you baby, you got this!</p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white"><a href="https://github.com/curryan7/startup">My GitHub</a></div></div>
                </div>
            </div>
        </footer>
        </section>
</div>


)
}