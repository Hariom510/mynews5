import React from 'react'
import { useState, useEffect } from "react";

function Business() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://inshorts.deta.dev/news?category=business`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })
        .then((actualData) => {
          setData(actualData);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="App">
        <h1>Business News</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {data &&
            data.data.map(({id,title,content,imageUrl, url }) => (
              <li key={id}>
                <div className='images'>
                <img src={imageUrl} alt="" />
                </div>
                <p>{title}</p>
                <a className='seePost' href={url}>See post</a>
                <br />
              </li>
            ))}
        </ul>
      </div>
    );
  
  }

export default Business