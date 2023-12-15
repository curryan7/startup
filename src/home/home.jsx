import React from 'react';
import './app2.css';


export function Login() {
  React.useEffect(() =>{          
    var first_name = document.getElementById("firstname");
var phone_number = document.getElementById("phonenumber");
const submit = document.getElementById("startsubmit");

submit.addEventListener("click", event => {
    event.preventDefault();
        var nameinput = document.createElement("input");
        var phoneinput = document.createElement("input")
        nameinput.id=first_name;
        nameinput.value=first_name.value;
        phoneinput.id=phone_number;
        phoneinput.value=phone_number.value;
        
        console.log(nameinput.value);
        console.log(phoneinput.value);
        const phoneNumberPattern = /^\d{3}\d{3}\d{4}$/;

        if (phoneNumberPattern.test(phoneinput.value)) {
            var login = new Object({Firstname:nameinput.value, pn:phoneinput.value})

            localStorage.setItem('userinfo', JSON.stringify(login));
            window.location.href = "/create";
        }
        
        else{
            const errorMessage = document.getElementById("error");
            errorMessage.textContent = "Please enter a valid phone number."
        }
        
    }   
);


const dsubmit = document.getElementById("endsubmit")
var access = JSON.parse(localStorage.getItem("polls"));



dsubmit.addEventListener("click", event => {
    event.preventDefault();
    var dfirst_name = document.getElementById("dfirstname").value;
    var dphone_number = document.getElementById("dphonenumber").value;  
    const phoneNumberPattern = /^\d{3}\d{3}\d{4}$/;
    if (phoneNumberPattern.test(dphone_number)) {
        
        for (let i = 0; i<access.length; i++) {
            var dphone_number = document.getElementById("dphonenumber").value;
            console.log("pass")
            if (access[i].pn === dphone_number) {
                
                var dfirst_name = document.getElementById("dfirstname").value;
                var dphone_number = document.getElementById("dphonenumber").value;
                var dlogin = {"dfirst_name":dfirst_name,"dphonenumber":dphone_number}
                localStorage.setItem("d_login", JSON.stringify(dlogin));
                
            }
        };
        window.location.href = "/landing";
    }
    else {
        const errorMessage = document.getElementById("error");
            errorMessage.textContent = "Please enter a valid phone number."
    }
})

})
return (
  <header className="masthead">
              <div className="container px-5">
                  <div className="row gx-5 align-items-center justify-content-center">
                      <div className="col-lg-8 col-xl-7 col-xxl-6">
                           <div className="my-5 text-center text-xl-start">
                              <h1 className="display-5 fw-bolder text-white mb-2">Welcome to Me and You!</h1>
                          
                              <p className="lead fw-normal text-white-50 mb-4">Quickly design an interactive voting poll to possibly meet your next significant other!</p>
                          
                                  <p className="lead fw-normal text-white-50 mb-4">Enter your info to start a new poll!</p>
                                  <div className="form-floating mb-3" id="namebox">
                                      <input className="form-control" id="firstname" type="text" placeholder="enter your name" data-sb-validations="required" />
                                      <label  htmlFor="firstname">Email</label>
                                  </div>
                                  <div className="form-floating mb-3" id="phonebox">
                                      <input className="form-control" id="phonenumber" type="text" placeholder="enter date's phonenumber" data-sb-validations="required" />
                                      <label htmlFor="phonenumber">Phone Number</label>
                                  </div>
                                  <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                      <button id="startsubmit" type="click">Create a new poll</button>
                                  </div>
                                  <br></br>
                                  <p className="lead fw-normal text-white-50 mb-4">Already been invited?</p>
                          <div className="form-floating mb-3" id="namebox">
                              <input className="form-control" id="dfirstname" type="text" placeholder="enter date's phonenumber" data-sb-validations="required" />
                              <label htmlFor="dfirstname">Enter your date's email</label>
                          </div>
                          <div className="form-floating mb-3" id="phonebox">
                              <input className="form-control" id="dphonenumber" type="text" placeholder="enter date's phonenumber" data-sb-validations="required" />
                              <label htmlFor="dphonenumber">Enter your date's phone number here</label>
                          </div>
                          <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                              <button id="endsubmit" type="click">Go to poll</button>
                          </div>
                                <div id="error"></div>                                
                          
                             </div>
                        </div>   
                   </div>
               </div>

      <section className="py-5" id="features">
    <div className="container px-5 my-5">
        <div className="row gx-5">
            <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A super easy way to arrange dates</h2></div>
            <div className="col-lg-8">
                <div className="row gx-5 row-cols-1 row-cols-md-2">
                    <div className="col mb-5 h-100">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                        <h2 className="h5">Convenient</h2>
                        <p className="mb-0">Don't fumble around shooting a million different ideas. Just put some ideas forward and get it out of the way quickly!</p>
                    </div>
                    <div className="col mb-5 h-100">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                        <h2 className="h5">Meaningful</h2>
                        <p className="mb-0">Get to know your date a bit more through the options they post!</p>
                    </div>
                    </div>
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
   </header>

   

);
}