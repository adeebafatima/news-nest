import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              imageurl
                ? imageurl
                : "https://www.shutterstock.com/image-illustration/graphical-modern-digital-world-news-background-431516872"
            }
            className="card-img-top"
            alt="..."
            style={{ width: "auto", height: "18rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>

            <p className="card-text">{description}...</p>
            <span
              className="position-absolute top-0 translate-middle badge rounded-pill bg-secondary"
              style={{ zIndex: 1, left: "90%" }}
            >
              {source}
            </span>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
