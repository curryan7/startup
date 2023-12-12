// storing name and phonenumber in index.html
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
            document.location.href = "createpoll.html";
        }
        
        else{
            const errorMessage = document.getElementById("error");
            errorMessage.textContent = "Please enter a valid phone number."
        }
        
    }   
);


const dsubmit = document.getElementById("endsubmit")
var access = JSON.parse(localStorage.getItem("polls"));
var dfirst_name = document.getElementById("dfirstname").value;
var dphone_number = document.getElementById("dphonenumber").value;
// console.log(access[0].pn)


dsubmit.addEventListener("click", event => {
    event.preventDefault();
    const phoneNumberPattern = /^\d{3}\d{3}\d{4}$/;
    if (phoneNumberPattern.test(dphonenumber.value)) {
        for (let i = 0; i<access.length; i++) {
            var dphone_number = document.getElementById("dphonenumber").value;
            if (access[i].pn === dphone_number) {
                var dfirst_name = document.getElementById("dfirstname").value;
                var dphone_number = document.getElementById("dphonenumber").value;
                var dlogin = {"dfirst_name":dfirst_name,"dphonenumber":dphone_number}
                localStorage.setItem("d_login", JSON.stringify(dlogin));
                document.location.href = "poll-landing.html";
            }
        };
    }
    else {
        const errorMessage = document.getElementById("error");
            errorMessage.textContent = "Please enter a valid phone number."
    }

    
    // JSON.parse(localStorage.getItem("polls"))
})