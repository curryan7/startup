/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// poll additions
// mind this for functionality
var login_info = JSON.parse(localStorage.getItem("userinfo"))
const add_option = document.getElementById("add-option")
var userInput = document.getElementById("user_input")
const pollForm = document.getElementById("poll-form")
const landing = document.getElementById("option-landing")
var response_list = [];


add_option.addEventListener("click", event => {
    event.preventDefault();
            
            let div = document.createElement("div")
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = userInput;
            checkbox.value = userInput.value;

            const label = document.createElement("label");
            checkbox.classList.add("spaced")
            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(userInput.value));
            div.appendChild(label)
            landing.appendChild(div);
            response_list.push(userInput.value)
            userInput.value = "";        
    }
);


//send the poll to local
const finishForm = document.getElementById("finish-form")

async function savePoll(poll) {
    const newPoll = {user_info: login_info, poll: poll};
    await fetch('/api/ideas', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(newPoll)
        })
};

finishForm.addEventListener("click", async event => {
    if (localStorage.getItem("polls")===null){
        localStorage.setItem("polls", JSON.stringify([]))
    }
    
    await savePoll(response_list)


        // var full_list = JSON.parse(localStorage.getItem("polls"));
        // full_list.push(r_list);
        // localStorage.setItem("polls",JSON.stringify(full_list));
        // document.location.href="finish.html";
    }
);






