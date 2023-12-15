import React from 'react';
import './app2.css'

export function Ideas() {
    const [quote, setQuote] = React.useState('Loading...');
    const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
    // const [poll, setPoll] = React.useState('no polls available at this time');


    React.useEffect(() => {
        fetch('https://api.quotable.io/random')
          .then((response) => response.json())
          .then((data) => {
            setQuote(data.content);
            setQuoteAuthor(data.author);
          })
          .catch((error) => {
            console.error('Error fetching quote:', error);
          });

        }, []);
    
    React.useEffect((() => {
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
    }))
        

  return (
    <div className="d-flex flex-column">
        <main className="flex-shrink-0">
        <section className="bg-light py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Inspiration</h1>
                        <p className="lead fw-normal text-muted mb-0">In case you're lost :P</p>
                    </div>
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-6 col-xl-4">
                            <div className="card mb-5 mb-xl-0">
                                <div className="card-body p-5">
                                    <div className="small text-uppercase fw-bold">Quote of the Day</div>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <div id="quote" className="quote-box bg-light text-dark"></div>    
                                        <p className='quote'>{quote}</p>
                                        <p className='author'>{quoteAuthor}</p>                         
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  className="col-lg-6 col-xl-4">
                            <div className="card mb-5 mb-xl-0">
                                <div className="card-body p-5">
                                    <div className="small text-uppercase fw-bold">Random Poll</div>
                                    <p id ="random_poll_landing"></p>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
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
    </div>
  );
  }
