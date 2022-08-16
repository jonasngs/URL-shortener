import { Fragment, useEffect, useState, useRef } from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';

function HandleRedirect() {

  const [destination, setDestination] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [longURL, setLongURL] = useState("");

  const {shortId} = useParams();

  useEffect(() => {
    async function getLongURL() {
      return axios
        .get(`/api/${shortId}`)
        .then((res) => {
          setDestination(res.data["longURL"])})
        .catch((err) => {
          setErrorMessage(err.response.data["error"]);
        });
    }
    getLongURL();
  }, []);

  useEffect(() => {
      if (destination !== "") {
        window.location.replace(destination);
      }
  }, [destination]);

  return (
    <Fragment>
      {errorMessage === "" ?
        <div className='h-100 mt-4 d-flex align-items-center justify-content-center'>
          <div className="spinner-border text-primary" role="status" >
          <span className="sr-only">Loading...</span>
        </div>
        </div> :
        <div>
        <h1> Error: {errorMessage} </h1>
        <a href="https://url-shortener-tap.herokuapp.com/"> Return to homepage </a>
        </div>
      }
    </Fragment>
  );
}

export default HandleRedirect;

