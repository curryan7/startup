import React from 'react';
import './about2.css'
import './about.css'

export function About() {
  return (
    <main>
        <header class="py-5">
          <div class="container px-5">
              <div class="row justify-content-center">
                  <div class="col-lg-8 col-xxl-6">
                      <div class="text-center my-5">
                          <h1 class="fw-bolder mb-3">What is Me and You?</h1>
                          <p class="lead fw-normal text-muted mb-4">Me and You is voting app where you and your date can decide on date ideas together. One of you will create a poll with your ideas for the date and the other person can access the poll using a keycode that the original user creates. Both of you vote on ideas and when both of you have voted, the results that you both agree on will turn green where the ideas you both didn't select will turn red.</p>
                          <a class="btn btn-primary btn-lg" href="#scroll-target">Learn more</a>
                      </div>
                  </div>
              </div>
          </div>
      </header>
       <section class="py-5 bg-light" id="scroll-target">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0" src="https://media2.foxnews.com/BrightCove/694940094001/2019/01/22/694940094001_5992454956001_5992450756001-vs.jpg" alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">How do I use Me and You?</h2>
                            <p class="lead fw-normal text-muted mb-0">Click the link below to start a poll. Once you've accessed your poll, input your date ideas for your significant other! Once you have inputted all of your ideas, copy, save, and paste the code provided to you below. Share that code with your date so they can vote too. Once you both have voted, both of you will receive an email based on your results! Click <a href="index.html">here</a> to create a poll.</p>
                        </div>
                    </div>
                </div>
             </section>
           <section class="py-5">
               <div class="container px-5 my-5">
                   <div class="row gx-5 align-items-center">
                       <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src="https://cdn.psychologytoday.com/sites/default/files/styles/article-inline-half-caption/public/field_blog_entry_images/2021-04/shutterstock_323420627_0.jpg?itok=ocVOHswb" alt="..." /></div>
                       <div class="col-lg-6">
                           <h2 class="fw-bolder">Need date ideas?</h2>
                           <p class="lead fw-normal text-muted mb-0">Click <a href="https://au.reachout.com/articles/11-things-to-do-if-youre-feeling-lonely">here</a> for our nominated dating article for the month!</p>
                       </div>
                   </div>
               </div>
           </section>
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
    
     </main>
  );
}