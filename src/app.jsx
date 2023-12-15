import React from 'react';
import './footer.css'
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Ideas } from './ideas/ideas';
import { Chat } from './chat/chat';
import { Login } from './home/home'
import { Create } from './create-poll/create-poll'
import { Landing } from './poll-landing/poll-landing'
import { Finish } from './finish/finish'

function App() {
    return (
      <BrowserRouter>
      <div className="d-flex flex-column h-100">
        <div className="flex-shrink-0">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3">
            <div className="container px-4 px-lg-5">
              <NavLink className="navbar-brand" to="">Me and You</NavLink>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto my-2 my-lg-0">
                    <li className="nav-item"><NavLink className="nav-link" to="">Get Started</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="about">About</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="ideas">Ideas</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="chat">Open Chat</NavLink></li>
              </ul>
                </div>
              </div>
            </nav>
          </div>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/finish' element={<Finish />} />
        <Route path='/ideas' element={<Ideas />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/create' element={<Create />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
        </div>



        </BrowserRouter>
    );
  }

  function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
  }
  
  export default App;
  