import { Fragment, useState } from 'react';
import axios from 'axios';
import CopyToClipboard from "react-copy-to-clipboard";

function URLShortener() {

  const [longURL, setLongURL] = useState("");
  const [shortURL, setShortURL] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("/api/shorten-url", {
      longURL: longURL,
    })
    .then(res => {
      setErrorMessage("");
      setShortURL(res.data["shortURL"]);
    })
    .catch(err => {
      setShortURL("");
      setErrorMessage(err.response.data["error"]);
    })
  } 

  return (
    <Fragment>
      <h1 className="text-center mt-5">URL Shortener</h1>
        <form className="d-flex mt-5" onSubmit={ handleSubmit }>
          <input type="text" className="form-control" placeholder='Input Long URL' value={longURL} onChange={e => setLongURL(e.target.value)}></input>
          <button className="btn btn-info">Shorten</button>
        </form>
        <p style={{color: 'red'}}> {errorMessage} </p>
        {shortURL !== '' ?

          <div className="alert alert-success " style={{justifyContent: 'center', alignItems: 'center'}}>
          <a href={shortURL}>{shortURL}</a>
          <CopyToClipboard text={shortURL}>
            <button className="btn btn-outline-dark ml-5">
              Copy URL
            </button>
          </CopyToClipboard>
        </div> : ''
        }
    </Fragment>
  );
}

export default URLShortener;

