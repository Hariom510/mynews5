import React from 'react'
import { useState, useEffect } from "react";

function Science() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch(`https://newsapi.org/v2/everything?q=science&pageSize=15&apiKey=3d2b4d0a937c4a75817996e4416238d5`)
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
        <h1>Science News</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        <ul>
          {data &&
            data.articles.map(({ author, title,description,urlToImage,content,publishedAt, url }) => (
              <li key={title}>
                <img src={urlToImage} alt="" />
                <h4>{title}</h4>
                <h6>{description}</h6>
                <a href={url}>See post</a>
                <br /><br /> <br />
    
              </li>
            ))}
        </ul>
      </div>
    );
  
  }
  
export default Science