import React, { Component } from 'react';

class Repository extends Component {
  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);
  }

  render() {
    return <h1>Repository</h1>;
  }
}

export default Repository;
