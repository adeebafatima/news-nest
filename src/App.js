import React, { Component, Fragment } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <News
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  />
                }
              />

              <Route
                exact
                path="/general"
                element={
                  <News
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  ></News>
                }
              />

              <Route
                exact
                path="/business"
                element={
                  <News
                    key="business"
                    pageSize={this.pageSize}
                    country="in"
                    category="business"
                  ></News>
                }
              />

              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="in"
                    category="entertainment"
                  ></News>
                }
              />

              <Route
                exact
                path="/health"
                element={
                  <News
                    key="health"
                    pageSize={this.pageSize}
                    country="in"
                    category="health"
                  ></News>
                }
              />

              <Route
                exact
                path="/science"
                element={
                  <News
                    key="science"
                    pageSize={this.pageSize}
                    country="in"
                    category="science"
                  ></News>
                }
              />

              <Route
                exact
                path="/sports"
                element={
                  <News
                    key="sports"
                    pageSize={this.pageSize}
                    country="in"
                    category="sports"
                  ></News>
                }
              />

              <Route
                exact
                path="/technology"
                element={
                  <News
                    key="technology"
                    pageSize={this.pageSize}
                    country="in"
                    category="technology"
                  ></News>
                }
              />
            </Routes>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
