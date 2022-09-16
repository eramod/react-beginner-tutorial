import React, { Component } from "react";

/**
 * Sample API request.
 * Currently unused. If you'd like to use it, you can import and render it in index.js.
 */
class Api extends Component {
  state = {
    data: [],
  };

  // Code is invoked after the component is mounted/inserted into the DOM tree. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        });
      });
  }

  render() {
    const { data } = this.state;

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return <ul>{result}</ul>;
  }
}

export default Api;
