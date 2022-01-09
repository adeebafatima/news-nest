import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=25a6fd0894394cc7989db44d1545a5a4";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>News Nest - Top Headlines</h2>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              element && (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://image.shutterstock.com/image-illustration/breaking-news-minimalistic-logo-on-260nw-1298244646.jpg"
                    }
                    newsurl={element.url}
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
