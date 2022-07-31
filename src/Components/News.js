import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import PropTypes from "prop-types";

export default function News(props) {
  const apiKey = process.env.REACT_APP_API_KEY; //replace with your API key
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&apiKey=${apiKey}`;
    
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${props.page}&pageSize=${props.pageSize}&apiKey=${apiKey}`;

    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setArticles(articles.concat(data));
    setTotalResults(data.totalResults);
  };

  return (
    <div>
      <h2>News - Headlines</h2>
      <hr />
    <div className="container my-3">

      <div className="row container my-3">
      {articles.map((element)=> {
        return <div className="col-md-4" key={element.url}>
        <Card
          title={element.title}
          description={element.description}
          imageUrl={element.urlToImage}
          author={element.author}
        />
      </div>
      })}
      </div>
    </div>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "science",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};