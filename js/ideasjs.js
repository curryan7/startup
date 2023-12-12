poll1 = document.getElementById("land1")
poll2 = document.getElementById("land2")

access = JSON.parse(localStorage.getItem("polls"))

poll_idea1 = access[0].response_list
poll_idea2 = access[1].response_list

poll_idea1.forEach((poll_value) => {
    let div = document.createElement("div")
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = poll_value;
    const label = document.createElement("label");
    checkbox.classList.add("spaced")
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(checkbox.value));
    div.appendChild(label)
    poll1.appendChild(div);
})

poll_idea2.forEach((poll_value) => {
    let div = document.createElement("div")
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = poll_value;
    const label = document.createElement("label");
    checkbox.classList.add("spaced")
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(checkbox.value));
    div.appendChild(label)
    poll2.appendChild(div);
})