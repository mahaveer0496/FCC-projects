import React, { Component } from 'react';
import fetchJsonp from 'fetch-jsonp';
import { connect } from 'react-redux';
import { fetchData as fetchAction } from './../redux/reducer';
// components---
// import Form from './Form';
// import ListItems from './ListItems';
// import Spinner from './Spinner';
const App = ()=> {
  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    // this.state = {
    //   data: '',
    //   showSpinner: true,
    // };
    // initial fetch---
    // fetchJsonp('https://en.wikipedia.org/w/api.php?action=opensearch&limit=24&format=json&search=apples&callback=?')
    //   .then((res) => {
    //     res.json().then((data) => {
    //       this.setState({
    //         data,
    //         showSpinner: false,
    //       });
    //     });
    //   });
  }

  searchHandler(event) {
    event.preventDefault();
    this.props.fetchData();
    // fetchJsonp(`https://en.wikipedia.org/w/api.php?action=opensearch&limit=24&format=json&search=${searchText}&callback=?`)
    //   .then((res) => {
    //     res.json().then((data) => {

    //     });
    //   });
  }
  render() {
    // const { data, showSpinner } = this.state;
    return (
      <div>
        <form onSubmit={this.searchHandler}>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state,
});
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
