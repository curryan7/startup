import React from 'react';
import './app2.css';

export function Landing() {
    React.useEffect(() =>{ 
        async function loadPoll() {
            let poll_list = [];
            const response = await fetch('api/ideas');
            poll_list = await response.json();
            return poll_list
        }
        async function loader(){
        
            const random_poll= await loadPoll();
            random_poll.poll.forEach((poll_value) => {
                const landing = document.getElementById("random_poll_landing")
                let div = document.createElement("div")
                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.value = poll_value;
                const label = document.createElement("label");
                checkbox.classList.add("spaced")
                label.appendChild(checkbox);
                label.appendChild(document.createTextNode(checkbox.value));
                div.appendChild(label)
                landing.appendChild(div);
            })
            };
            loader();

const submitForm = document.getElementById("submit-form")
var access = JSON.parse(localStorage.getItem("polls"));

submitForm.addEventListener("click", event => {
        window.location.href="/finish";
    }
);

    }) 
    return(

        <section className="py-5">
                <div className="container px-5">
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">                      
                                <div className="fw-bolder">
                                    <span>Your Poll</span>
                                </div>
                                <fieldset id="random_poll_landing">
                                    <p>
                                    </p>
                                  </fieldset>

                                  <div className="my-5 text-center text-xl-start">  
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                        <button id="submit-form" type="button">submit</button>
                                    </div>
                                </div>
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
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white"><a href="https://github.com/curryan7/startup">My GitHub</a></div></div>
                </div>
            </div>
        </footer>
        </section>
    )
}