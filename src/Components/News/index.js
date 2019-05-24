import React, { Component } from "react";
import axios from "axios";

import NewsResults from "./NewsResults";
import NewsDetail from "./NewsDetail";

class News extends Component {
  state = {
    items: null,
    selected: null
  };

  componentDidMount() {
    this.getResults();
  }

  async getResults() {
    const api =
      "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=J5QpOHpCRpLerCebWeWuyfKAhIgxXYTW";
    const { data } = await axios.get(api);

    if (data) this.setState({ items: data.results });
  }

  setDetail = selected => {
    this.setState({ selected });
  };

  closeDetail = () => this.setState({ selected: null });

  render() {
    const { items, selected } = this.state;

    const results = items ? (
      <NewsResults onClick={this.setDetail} items={items} />
    ) : null;

    const detail = selected ? (
      <NewsDetail onClose={this.closeDetail} {...selected} />
    ) : null;

    return <>{selected ? detail : results}</>;
  }
}

export default News;
