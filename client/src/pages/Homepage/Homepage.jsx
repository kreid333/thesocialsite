import React, { useState } from "react";
import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Homepage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  function CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.signUpForm}</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function signUpForm() {
    return (
      <form className="text-center">
        <input
          type="text"
          className="d-block mb-2 form-control"
          id="userName"
          placeholder="Username"
        />
        <input
          type="text"
          className="d-block mb-2 form-control"
          id="emailAddress"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="d-block mb-2 form-control"
          id="password"
          placeholder="Password"
        />
        <div className="text-center">
          <button className="mb-2 btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6" id="left">
          <h1 id="logo" className="text-center">
            TheSocialSite
          </h1>
          <div className="ml-3" id="left-content">
            <div className="row mb-5">
              <div className="col-xs-3">
                <FontAwesomeIcon icon={faUserPlus} size="4x" />
              </div>
              <div className="col-xs-9">
                <h2 className="ml-3 key-points">Connect with others</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3">
                <FontAwesomeIcon icon={faUsers} size="4x" />
              </div>
              <div className="col-xs-9">
                <h2 className="ml-3 key-points">Engage in conversations</h2>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xs-3">
                <FontAwesomeIcon icon={faGlobe} size="4x" />
              </div>
              <div className="col-xs-9">
                <h2 className="ml-3 key-points">
                  See what's happening <br /> around the world
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" id="right">
          <div className="row" id="right-content">
            <div className="col-sm-12">
              <form className="text-center">
                <label htmlFor="" className="d-block mb-3">
                  <h2>Login</h2>
                </label>
                <input
                  type="text"
                  className="d-block mb-2 form-control"
                  id="userName"
                  placeholder="Username"
                />
                <input
                  type="text"
                  className="d-block mb-2 form-control"
                  id="password"
                  placeholder="Password"
                />
                <div className="text-center">
                  <button className="mb-2 btn" id="login-btn">
                    Let's go!
                  </button>
                </div>
                <a href="" id="signup-link" onClick={handleShow}>
                  Or Sign Up
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      <CenteredModal show={show} onHide={() => setShow(false)} title="Create your account" signUpForm={signUpForm()} />
    </div>
  );
};

export default Homepage;
