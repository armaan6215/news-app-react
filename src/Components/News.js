import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import Error from "../Components/Error";
import PropTypes from "prop-types";

export default function News(props) {
  const apiKey = process.env.REACT_APP_GNEWS_API_KEY_MANISH;
  const [article, setArticle] = useState([]);
  const [errors, setErrors] = useState(0);

  const updateNews = async () => {
    // const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&pageSize=${props.pageSize}&apiKey=${apiKey}`;
    let url = `https://gnews.io/api/v4/top-headlines?topic=${props.topic}&token=${apiKey}`;

    let response = await fetch(url);
    let data = await response.json();
    console.log("data: ", data);
    if (data !== undefined) {
      if (data.errors != null) {
        setErrors(data.errors);
        console.log("error is: ", errors);
      } else {
        setArticle(data.articles);
        console.log("data length is:", article.length);
      }
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  if (article.length > 0) {
    console.log("success");
    return (
      <div>
        <h2>News - Headlines </h2>
        <hr />
        <div className="container my-3">
          <div className="row container my-3">
            {article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Card
                    title={element.title}
                    description={element.description}
                    imageUrl={element.image}
                    author={element.author}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    console.log("error");
    return <Error />;
  }
}

// return (
//       <div>
//         <h2>News - Headlines </h2>
//         <hr />
//       <div className="container my-3">

//         <div className="row container my-3">
//         {article.map((element)=> {
//           return <div className="col-md-4" key={element.url}>
//           <Card
//             title={element.title}
//             description={element.description}
//             imageUrl={element.image}
//             author={element.author}
//             newsUrl={element.url}
//           />
//         </div>
//         })}
//         </div>
//       </div>
//       </div>
//     );

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
