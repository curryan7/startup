import React from 'react';


export function Create() {
  React.useEffect(() =>{
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
    window.location.href ="/finish"
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
    `<div className="bg-dark text-light">Someone started a poll!</div>`;
  };
  
  function broadcastEvent(from,type,value) {
    const event = {
      from: from,
      type: type,
      value: value,
    };
    this.socket.send(JSON.stringify(event));
  };


  })
return(
<section className="py-5">
                <div className="container px-5">

                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            
                            <h1 className="fw-bolder">Let's make a poll!</h1>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">

                                <div className="fw-bolder">
                                    <span>Your Poll</span>
                                </div>

                                <form id="poll-form">
                                    <input type="text" id="user_input" placeholder="Enter your option"></input>
                                    <button id="add-option" type="click">Add Idea</button>
                                </form>
                                <br></br>
                                <fieldset id="option-landing">
                                    <p>
                                    </p>
                                  </fieldset>

                                  <div className="my-5 text-center text-xl-start">  
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">

                                        <button id="finish-form" type="click">submit</button>
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