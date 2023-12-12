/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

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
    document.location.href="finish.html";
    }
);

function configureWebSocket() {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    this.socket.onopen = (event) => {
      this.displayMsg()
    };
    this.socket.onclose = (event) => {
      this.displayMsg();
    };
    this.socket.onmessage = async (event) => {
      this.displayMsg();
    }
  };
  
  function displayMsg() {
    const chatText = document.querySelector('#voter-messages')
    chatText.innerHTML = 
    `<div class="bg-dark text-light">Someone started a poll!</div>`;
  };
  
  function broadcastEvent(from,type,value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  };




