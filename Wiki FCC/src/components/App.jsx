import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';

// components---
import Form from './Form';
import ListItems from './ListItems';
import Spinner from './Spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.state = {
      data: '',
      showSpinner: true,
    };
    // initial fetch---
    fetchJsonp('https://en.wikipedia.org/w/api.php?action=opensearch&limit=24&format=json&search=apples&callback=?')
      .then((res) => {
        res.json().then((data) => {
          this.setState({
            data,
            showSpinner: false,
          });
        });
      });
  }

  searchHandler(searchText) {
    this.setState({
      showSpinner: true,
    });
    fetchJsonp(`https://en.wikipedia.org/w/api.php?action=opensearch&limit=24&format=json&search=${searchText}&callback=?`)
      .then((res) => {
        res.json().then((data) => {
          this.setState({
            data,
            showSpinner: false,
          });
        });
      });
  }
  render() {
    const { data, showSpinner } = this.state;
    return (
      <div>
        <Form searchHandler={this.searchHandler} />
        {!showSpinner && <ListItems data={data} />}
        {showSpinner && <Spinner />}
      </div>
    );
  }
}

export default App;
