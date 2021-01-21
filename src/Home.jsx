import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import './styles/main.scss';
import Form from './Form.jsx';
import Bio from './wintern-bios/Bio.jsx';

function Home({ bioToShow }) {
  const { useState } = React;
  const [method, setMethod] = useState('');
  const [endpoint, setEndpoint] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showIntro, setShowIntro] = useState(true);


  const toggleButton = (method, endpoint) => {
    setMethod(method);
    setEndpoint(endpoint);
    setShowForm(true);
    setShowIntro(false);
  };

  const shouldShowBio = bioToShow.length > 0;

  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="dropdown">
            <button className="dropbtn">Home

            </button>
            <div className="dropdown-contenttwo">
              <a href="#">Meet The Team</a>
              <a href="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/Comments">Help Center</a>
              <a href="#">Space</a>
            </div>

          </div>
          <div className="dropdownone">
            <button className="dropbtnone">API

            </button>
            <div className="dropdown-contentone">
              <a href="#">What is API?</a>
              <a href="#">Example of API</a>
              <a href="#">API Explorer</a>
            </div>
          </div>
        </div>

      </div>
      <div className="main">
        <div className="sidebar">
          <div className="sidenav">
            <a href="#" onClick={() => toggleButton("GET", '/bitlinks/{Your_bitlink}')}><span className="Get">Retrieve</span> a Bitlink</a>
            <a href="#" onClick={() => toggleButton("GET", '/bitlinks/{Your_bitlink}/clicks')}><span className="Get">GET</span> clicks for a Bitlink</a>
            <a href="#" onClick={() => toggleButton("GET", '/groups/{Your_group_guid}/bitlinks')}><span className="Get">Retrieve</span> Bitlinks by Group</a>
            <a href="#" onClick={() => toggleButton("POST", '/expand')}><span className="Post">Expand</span> a Bitlink</a>
            <a href="#" onClick={() => toggleButton("POST", '/bitlinks')}><span className="Post">Create</span> a Bitlink</a>
            <a href="#" onClick={() => toggleButton("POST", '/shorten')}><span className="Post">Shorten</span> a Link</a>
            <a href="#" onClick={() => toggleButton("PATCH", '/bitlinks/{bitlink}')}><span className="Patch">Update</span> a Bitlink</a>
            <a href="#" onClick={() => toggleButton("PATCH", '/user')}><span className="Patch">Update</span> a User</a>
            <a href="#" onClick={() => toggleButton("PATCH", '/groups/{group_guid}')}><span className="Patch">Update</span> a Group</a>
            <a href="#" onClick={() => toggleButton("DELETE", '/groups/{group_guid}')}><span className="Delete">Delete</span> a Group</a>
            <Link to="/Andrea">Andrea</Link>
            <Link to="/Tajra">Tajra</Link>
            <Link to="/Roma">Roma</Link>
            <Link to="/Lara">Lara</Link>
            <Link to="/Dana">Dana</Link>
            <Link to="/Comments">Comments</Link>
            <Link to="/APIExample">API Example</Link>
            <Link to="/Meetteam">Meet The Team</Link>
            <Link to="/APIinfo">What even is an API?</Link>
          </div>
        </div>
        <div className="center">
          {!shouldShowBio && <div className="centerButtons">
            <button className='methodButton getbutton' onClick={() => toggleButton("GET")}>Get</button>
            <button className='methodButton postbutton' onClick={() => toggleButton("POST")}>Post</button>
            <button className='methodButton patchbutton' onClick={() => toggleButton("PATCH")}>Patch</button>
            <button className='methodButton deletebutton' onClick={() => toggleButton("DELETE")}>Delete</button>
          </div>}
          <div className="centerCard">
            {showIntro && !shouldShowBio && <div className="intro">
              <p>
                Introduction: Welcome to the Bitly API!If you'd like to use Bitly to shorten, brand, share, or retrieve data from links programmatically, you've come to the right place.If you're interested in integrating
              </p>
              <p>
                     your app or software platform with Bitly, you'll need to register and authenticate your service with our API. To do so please contact us at API_sales@bit.ly
              </p>
              <p>
                We currently provide our documentation in the form of an OpenAPI 2.0 document.We do not support any code-generation at this time but feel free to use the specification if you would like.
              </p>
              <Bio myProp={'myProp'} color={'blue'} />
              <Bio myProp={'myProp'} />
              <Bio myProp={'myProp'} />
              <Bio myProp={'myProp'} />
            </div> }
          </div>
          <div className='bio-cards'>
          <div className="row">
          <div className="column">
          <div className="card card-1">
            <div className="card-body">
              <h3 className="card-title"> Meet The Team </h3>
              <p className="card-text"> Meet our hard working team and get to know more about each team member. </p>
              <p> <button className="btn btn-primary1"> View </button> </p>
            </div>
            </div>
            </div>
            <div className="column">
            <div className="card card-2">
            <div className="card-body">
              <h3 className="card-title"> What is an API? </h3>
              <p className="card-text"> API stands for Application Programming Interface which is a software that allows for two applications to communicate with each other. </p>
              <p> <button className="btn btn-primary2"> Learn More </button> </p>
            </div>
            </div>
            </div>
            <div className="column">
            <div className="card card-3">
            <div className="card-body">
              <h3 className="card-title"> Any Questions? </h3>
                <div className="comments">
                  <form action="/action_page.php">
                    <p> </p>
                    <label for="name"> Name </label>
                    <input type="text" id="name" name="name" placeholder="Your name.."></input>

                    <label for="quest">Question</label>
                    <input type="text" id="quest" name="question" placeholder="Your question.."></input>
                  
                    <input type="submit" value="Submit"></input>
                  </form>
                </div>
              <p className="card-text"> </p>
            </div>
            </div>
            </div>
            </div>
          </div>
          <div className="footer">
            <div className="footertext">
              <p className="center-links">
                <a className="ft link-1" href="#"> Home </a>
                <a className="ft link-2" href="#"> About </a>
                <a className="ft link-3" href="#"> Help </a>
                <a className="ft link-4" href="#"> Legal </a>
                <a className="ft link-5" href="#"> Contact </a>
              </p>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-github"></a>
              <a href="#" className="fa fa-instagram"></a>
              <a href="#" className="fa fa-linkedin"></a>
            </div>
            <p className="under-text"> Bitly Winterns &copy; 2021</p>
          </div>

          {(showForm && !shouldShowBio) && <Form endpoint={endpoint} method={method} />}
          {shouldShowBio && <Bio bioToShow={bioToShow} />}
        </div>

        <a href="https://5000-f90c103f-207a-4a06-b5f7-18ea2ff191af.ws-us03.gitpod.io/#/"><img className="logo" alt="bitly logo" src="https://docrdsfx76ssb.cloudfront.net/static/1610484866/pages/wp-content/uploads/2019/02/bitly.png" /></a>
      </div>
    </>
  );
}

export default Home;
