function displayQuote(data) {
  fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#quote');

      const quoteEl = document.createElement('p');
      quoteEl.classList.add('quote');
      const authorEl = document.createElement('p');
      authorEl.classList.add('author');

      quoteEl.textContent = data.content;
      authorEl.textContent = data.author;

      containerEl.appendChild(quoteEl);
      containerEl.appendChild(authorEl);
    });
}
displayQuote();

async function loadPoll() {
    let poll_list = [];
    const response = await fetch('api/ideas');
    poll_list = await response.json();
    return poll_list
}

async function loader(){

const random_poll= await loadPoll();
random_poll.poll.forEach((poll_value) => {
landing = document.getElementById("random_poll_landing")
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