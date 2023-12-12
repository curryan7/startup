var pollsite = document.getElementById("option-landing");
key = JSON.parse(localStorage.getItem("d_login"));

// var access = JSON.parse(localStorage.getItem("polls"))[0];
access = JSON.parse(localStorage.getItem("polls"));
const landing = document.getElementById("option-landing");

const submitForm = document.getElementById("submit-form")

    for (let i = 0; i<access.length; i++) {
        if (key.dphonenumber === access[i].pn){
            my_array = access[i].response_list
            my_array.forEach((poll_value) => {
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
        }
    };


submitForm.addEventListener("click", event => {
    if (localStorage.getItem("polls")===null){
        localStorage.setItem("polls", JSON.stringify([]))
    }
        responder= access.response_list
        var r_list = {key,responder};
        var full_list = JSON.parse(localStorage.getItem("polls"));
        full_list.push(r_list);
        localStorage.setItem("polls",JSON.stringify(full_list));
        document.location.href="finish.html";
    }
);