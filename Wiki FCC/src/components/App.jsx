import React, { Component, } from 'react';
import fetchJsonp from 'fetch-jsonp';

// components---
import Form from './Form';
import ListItems from './ListItems';

class App extends Component {
  constructor(props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      data: '',
    };
  }
  componentWillMount() {
    const searchString = 'random';
    fetchJsonp(`https://en.wikipedia.org/w/api.php?action=opensearch&limit=24&format=json&search=${searchString}&callback=?`)
      .then((res) => {
        res.json()
          .then((json) => {
            console.log(json);
          });
      });
  }
  // search(callback) {
  //   console.log(callback);
  // }
  render() {
    return (
      <div>
        <Form />
        <ListItems />
      </div>
    );
  }
}

export default App;
